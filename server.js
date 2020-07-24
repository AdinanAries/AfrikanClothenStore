if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 3000;

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

console.log(stripeSecretKey, stripePublicKey);

const express = require("express");
const app = express();
const fs = require("fs");
const stripe = require("stripe")(stripeSecretKey);

//const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));

app.get("/store", (req, res) => {
  fs.readFile("items.json", function (err, data) {
    if (err) {
      res.status(500).end();
    } else {
      res.render("store.ejs", {
        stripePublicKey: stripePublicKey,
        items: JSON.parse(data),
      });
    }
  });
});

app.post("/purchase", (req, res) => {
  fs.readFile("items.json", function (err, data) {
    if (err) {
      res.status(500).end();
    } else {
      //console.log("purchase");
      const itemsJSON = JSON.parse(data);
      const itemsArray = itemsJSON.music.concat(itemsJSON.merch);
      let total = 0;
      req.body.items.forEach(function (item) {
        const itemJson = itemsArray.find(function (i) {
          return i.id == item.id;
        });
        total = total + itemJson.price * item.quantity;
      });
      /*stripe.charges
        .create({
          amount: total,
          source: req.body.stripeTokenId,
          currency: "usd",
        })
        .then(function () {
          console.log("Charge Successful");
          res.json({ message: "Successfully purchased items" });
        })
        .catch(function () {
          console.log("Charge Fail");
          console.log(req.body.stripeTokenId);
          console.log(total);
          res.status(500).end();
        });*/
    }
  });
});

app.listen(PORT, () => {
  console.log("server started on 3000");
});

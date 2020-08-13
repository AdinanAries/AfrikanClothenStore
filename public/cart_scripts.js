const shopping_cart_icon = document.getElementsByClassName(
  "shopping-cart-icon"
)[0];
const CheckoutCart = document.getElementsByClassName("CheckoutCart")[0];
const CloseShoppingCartBtn = document.getElementsByClassName(
  "CloseShoppingCartBtn"
)[0];

shopping_cart_icon.addEventListener("click", (evnt) => {
  CheckoutCart.style.display = "block";
});

CloseShoppingCartBtn.addEventListener("click", () => {
  CheckoutCart.style.display = "none";
});

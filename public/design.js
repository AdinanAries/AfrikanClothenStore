//showing fabrics div
const gender_options = Array.from(
  document.getElementsByClassName("gender-option")
);
gender_options.forEach((gender_option) => {
  gender_option.addEventListener("click", (evnt) => {
    document.getElementById("genderDiv").style.display = "none";
    document.getElementById("fabricsDiv").style.display = "block";
  });
});

const toClothenTypeDiv = document.getElementById("toClothenTypeDiv");
const toGenderBackBtn = document.getElementById("toGenderBackBtn");
const toFabricDiv = document.getElementById("toFabricDiv");
const toDesignDiv = document.getElementById("toDesignDiv");
const backToClothenType = document.getElementById("backToClothenType");

toClothenTypeDiv.addEventListener("click", (evnt) => {
  document.getElementById("fabricsDiv").style.display = "none";
  document.getElementById("clothenTypeDiv").style.display = "block";
});

toGenderBackBtn.addEventListener("click", (evnt) => {
  document.getElementById("fabricsDiv").style.display = "none";
  document.getElementById("genderDiv").style.display = "block";
});

toFabricDiv.addEventListener("click", (evnt) => {
  document.getElementById("clothenTypeDiv").style.display = "none";
  document.getElementById("fabricsDiv").style.display = "block";
});

toDesignDiv.addEventListener("click", (evnt) => {
  document.getElementById("clothenTypeDiv").style.display = "none";
  document.getElementById("designDiv").style.display = "block";
});

backToClothenType.addEventListener("click", (evnt) => {
  document.getElementById("designDiv").style.display = "none";
  document.getElementById("clothenTypeDiv").style.display = "block";
});

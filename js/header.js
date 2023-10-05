

/*LES CONST POUR ACTIONNER BUTTON*/
const signupButton = document.getElementById("sign-up-button");
const formSignUp = document.getElementById("idBtnSignUp");
const loginButton = document.getElementById("log-in-button");
const formLogIn = document.getElementById("idBtnLogIn"); /*  */
const closeButton = document.getElementById("closeButton");
const closeButtonLogIn = document.getElementById("closeButtonLogIn"); /*  */

// ---------FUNCTION APPARITION FORM SIGN-UP--------------//

// BUTTON CLICKER, FAIT APP LE FORM//

signupButton.addEventListener("click", function () {
  formSignUp.style.display = "block";
  console.log("apparition formulaire sign up");
});

// QUAND LE BUTTON FERMER CLICK, CACHE LE FORM
closeButton.addEventListener("click", function () {
  formSignUp.style.display = "none";
});

// CLICK AUTRE PART QUE LA CROIX --> FERME LE FORM
window.addEventListener("click", function (event) {
  if (event.target === formSignUp) {
    formSignUp.style.display = "none";
  }
});

// ---------FUNCTION APPARITION FORM LOG-IN--------------//

// BUTTON CLICKER, FAIT APP LE FORM
loginButton.addEventListener("click", function () {
  formLogIn.style.display = "block";
  console.log("apparition formulaire");
});

// QUAND LE BUTTON FERMER CLICK, CACHE LE FORM
closeButtonLogIn.addEventListener("click", function () {
  formLogIn.style.display = "none";
  console.log("fermeture formulaire");
});

// CLICK AUTRE PART QUE LA CROIX --> FERME LE FORM
window.addEventListener("click", function (event) {
  if (event.target === formLogIn) {
    formLogIn.style.display = "none";
    console.log("fermeture alternative");
  }
});

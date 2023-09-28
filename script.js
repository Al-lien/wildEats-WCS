/* Filters functionality

document.addEventListener('DOMContentLoaded', function() {
    const mountainsButton = document.getElementById('myButtonMountains');
    const lakeButton = document.getElementById('myButtonLake');
    const allButton = document.getElementById('all');
    const lacs = document.getElementsByClassName('lac');
    const mountains = document.getElementsByClassName('montagne');
    const photo = document.getElementsByClassName('lien-conteneur-photo');

    let mountainsVisible = true;
    let lakesVisible = true;

    mountainsButton.addEventListener('click', function() {
        console.log(photo);
        console.log('test1');

        for (let lac of lacs) {
            console.log(lac);
            lac.hidden = true;
        }
        for (let montagne of mountains) {
            montagne.hidden = false;
        }
        
    });

    lakeButton.addEventListener('click', function() {
        console.log(photo);
        console.log('test2');

        for (let montagne of mountains) {
            console.log(montagne);
            montagne.hidden = true;
        
        }
        for (let lac of lacs){
        lac.hidden = false;
    
        }

        
    });

    allButton.addEventListener('click', function() {
        console.log(photo);
        console.log('test3');

        for (let lac of lacs) {
            lac.hidden = false;
        }

        for (let montagne of mountains) {
            montagne.hidden = false;
        }

        
    });
*/

// LES CONST POUR ACTIONNER BUTTON
const loginButton = document.getElementById("log-in-button");
const formLogIn = document.getElementById("idBtnLogIn");
const closeButton = document.getElementById("closeButton");

// BUTTON CLICKER, FAIT APP LE FORM
loginButton.addEventListener("click", function () {
  formLogIn.style.display = "block";
});

// QUAND LE BUTTON FERMER CLICK, CACHE LE FORM
closeButton.addEventListener("click", function () {
  formLogIn.style.display = "none";
});

// CLICK AUTRE PART QUE LA CROIX --> FERME LE FORM
window.addEventListener("click", function (event) {
  if (event.target === formLogIn) {
    formLogIn.style.display = "none";
  }
});

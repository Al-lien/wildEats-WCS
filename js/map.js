const portfolio = document.querySelector(".portfolio"); // declaring variable of parent div

const restaurantType = ["Japonais", "Libanais", "Venezuelien", "Californien", "Turc", "Français", "Africain"];

function order(array) {
array.forEach((list) => {

    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("resizeable");
    portfolio.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
  
    /* const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = "";
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg); */
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardBodyHeader = document.createElement("div");
    cardBodyHeader.classList.add("card-body-header");
    cardBody.appendChild(cardBodyHeader);
  
    const cardName = document.createElement("h2");
    cardName.classList.add("card-name");
    cardName.innerHTML = list.name;
    cardBodyHeader.appendChild(cardName);

    const cardType = document.createElement("h3");
    cardType.classList.add("card-type");
    cardType.innerHTML = list.type;
    cardBodyHeader.appendChild(cardType);
    
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-body-footer");
    cardBody.appendChild(cardFooter);

    const cardPopularity = document.createElement("h3");
    cardPopularity.classList.add("card-popularity");
    cardPopularity.innerHTML = `${"⭐️".repeat(list.popularity)}`;
    cardFooter.appendChild(cardPopularity);

    const cardDistance = document.createElement("h3");
    cardDistance.classList.add("card-distance");
    cardDistance.innerHTML = `${list.distance} min`;
    cardFooter.appendChild(cardDistance);

    const cardPrice = document.createElement("h3");
    cardPrice.classList.add("card-price");
    cardPrice.innerHTML = `${"€".repeat(list.price)}`;
    cardFooter.appendChild(cardPrice);

});
}


const resizeableElements = document.querySelectorAll('.resizeable'); // Get references to all elements with the "resizeable" class

resizeableElements.forEach((element) => { // Add a click event listener to each element
  
  let isLarge = false; // Initialize a variable to track the state for each element

  element.addEventListener('click', function () {
    
    if (isLarge) { // Toggle the "large" class for the clicked element
      element.classList.remove('large');
    } else {
      element.classList.add('large');
    }

    isLarge = !isLarge; // Update the state for this element
  });
});



const orderByPrice = document.querySelector('.btnPrice');

orderByPrice.addEventListener("click", orderingByPrice);

function orderingByPrice () {
    restaurantList.sort((element1, element2) => element1.price - element2.price);
    console.log(restaurantList);
    order(restaurantList)
 }

 order(restaurantList);



    /* const orderByDistance = document.querySelector('.btnDistance');
    const orderByPopularity = document.querySelector('.btnPopularity');

orderByDistance.addEventListener("click", function() {
    restaurantList.sort((element1, element2) => element1.distance - element2.distance);
    console.log(restaurantList);
    order(restaurantList)}); 

orderByPopularity.addEventListener("click", function() {
    restaurantList.sort((element1, element2) => element1.popularity - element2.popularity);
    console.log(restaurantList);
    order(restaurantList)}); */
    
 



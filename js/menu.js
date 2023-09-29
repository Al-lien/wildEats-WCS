console.log("hello");

/* CREATING ELEMENTS  */

function order(restaurantList) {
  restaurantList.forEach((list) => {
  
    //Parent div
    const main = document.querySelector(".menu__container");

    //wrapper of the 2 cards : restaurant and map
    const portfolio = document.createElement("div");
    portfolio.classList.add("wrapper");
    portfolio.classList.add("resizeable");
    main.appendChild(portfolio);

    //Restaurant card
    const menuCardRestaurant = document.createElement("article");
    menuCardRestaurant.classList.add("menu__cardRestaurant");
    portfolio.appendChild(menuCardRestaurant);

    //Map card
    const menuCardMap = document.createElement("article");
    menuCardMap.classList.add("menu__cardMap");
    menuCardMap.classList.add("hidden");
    menuCardMap.style.backgroundImage = `url(${list.images.map})`
    portfolio.appendChild(menuCardMap);

    //Top of the restaurant card
    const menuCardPicture = document.createElement("div");
    menuCardPicture.classList.add("menu__card-picture");
    menuCardPicture.style.backgroundImage = `url(${list.images.main})`
    menuCardRestaurant.appendChild(menuCardPicture);

    //Bottom of the restaurant card
    const menuCardBody = document.createElement("div");
    menuCardBody.classList.add("menu__card-body");
    menuCardRestaurant.appendChild(menuCardBody);

    //Container of the titles of the restaurant card
    const cardBodyTitle = document.createElement("div");
    cardBodyTitle.classList.add("menu__card-body-title");
    menuCardBody.appendChild(cardBodyTitle);
  
    //Name of the restaurant
    const restaurantName = document.createElement("h2");
    restaurantName.classList.add("restaurant-name");
    restaurantName.innerHTML = list.name;
    cardBodyTitle.appendChild(restaurantName);

    //Type of the restaurant
    const restaurantType = document.createElement("h3");
    restaurantType.classList.add("restaurant-type");
    restaurantType.innerHTML = list.type;
    cardBodyTitle.appendChild(restaurantType);
    
    //Container of the values of the restaurant card
    const cardBodyValue = document.createElement("div");
    cardBodyValue.classList.add("menu__card-body-value");
    menuCardBody.appendChild(cardBodyValue);

    //Popularity value
    const popularityValue = document.createElement("h3");
    popularityValue.classList.add("popularityValue");
    popularityValue.innerHTML = `${"⭐️".repeat(list.popularity)}`;
    cardBodyValue.appendChild(popularityValue);

    //Distance value
    const distanceValue = document.createElement("h3");
    distanceValue.classList.add("card-distance");
    distanceValue.innerHTML = `${list.distance} min`;
    cardBodyValue.appendChild(distanceValue);

    //Price value
    const priceValue = document.createElement("h3");
    priceValue.classList.add("card-price");
    priceValue.innerHTML = `${"€".repeat(list.price)}`;
    cardBodyValue.appendChild(priceValue);

  });
}

order(restaurantList);

/* FUNCTIONS */


const resizeableElements = document.querySelectorAll('.resizeable'); // Get references to all elements with the "resizeable" class
let currentlyResized = null; // Track the currently resized element
const hiddenElements = document.querySelectorAll('.hidden'); // Track the currently hidden element

// Add a click event listener to each element with .resizeable
resizeableElements.forEach((element) => {
  element.addEventListener('click', function () {

    // Check if there's a currently resized element
    if (currentlyResized !== null) {

      // Remove the "large" class from the currently resized element
      currentlyResized.classList.remove('large');
    } else {

    //Add .large to the new clicked element
    element.classList.add('large');
    
    }

    
     // Update the currently resized element
    currentlyResized = element; 
  });
});

resizeableElements.forEach((wrapperElement) => {
  
    let isLarge = false; 
    
    wrapperElement.addEventListener('click', function () {
    
    if (isLarge) { 
      wrapperElement.classList.remove('large');
    } else {
      wrapperElement.classList.add('large');
    }

    let mapElement = wrapperElement.querySelector(".menu__cardMap");

    if (mapElement.style.opacity == "0") {
      mapElement.classList.remove('hidden');
    } else {
      mapElement.classList.add('show');
    }

    isLarge = !isLarge; // Update the state for this element
  });
});





    
 




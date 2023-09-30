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

const orderByPrice = restaurantList.sort((e1,e2)=>e1.price-e2.price);
console.log(orderByPrice);

const orderByPopularity = restaurantList.sort((e1,e2)=>e2.popularity-e1.popularity);
console.log(orderByPopularity);

const orderByDistance = restaurantList.sort((e1,e2)=>e1.distance-e2.distance);
console.log(orderByDistance);

/* FUNCTIONS ON CLICK */


const resizeableElements = document.querySelectorAll('.resizeable'); // Appelle tous les elements de classe ".resizeable"


/* let currentlyResized = false; // Déclare qu'aucun élement n'est agrandit
resizeableElements.forEach((wrapperElement) => { 
  wrapperElement.addEventListener('click', function () { // clique sur un élement.
    
    if (currentlyResized) { // Est-ce qu'il y a un autre élement agrandit ?
      currentlyResized.classList.remove('large'); // Si oui, réduit cet élement
      wrapperElement.classList.add('large'); // Et agrandit l'élement sur lequel tu as cliqué
    }

    currentlyResized = wrapperElement; // l'élement sur lequel tu as cliqué, devient un élement agrandit
  });
});  */    

resizeableElements.forEach((wrapperElement) => {
    let isFocused = false;
    let mapElement = wrapperElement.querySelector(".menu__cardMap"); 
    wrapperElement.addEventListener('click', function display() { 
    
    if (isFocused && big === 0) {  // Si l'élement est focus : 
      wrapperElement.classList.remove('large'); // Reduis le
      mapElement.classList.add('hidden'); // Cache la carte
    } else {
      wrapperElement.classList.add('large'); // Sinon agrandis le
      mapElement.classList.remove('hidden'); // Montre la carte
    }

    isFocused = !isFocused;
    console.log(big);

  });
});

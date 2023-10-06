console.log("Hello");

/* CREATING ELEMENTS */

function fillRestaurant(array) {

// recuperer tous les ARTICLES contenus dans #menu__container
const currentElements = document.querySelectorAll("#menu__container > article");

  // pour chaque element dedans, le supprimer
currentElements.forEach (function deleteElements(element) {
    element.remove();
  }
);
  // ajout des elements contenus dans le tableau array
array.forEach((eRestaurant) => {

//Parent div
const main = document.querySelector(".container");

//wrapper of the 2 cards : restaurant and map
const article = document.createElement("article");
article.classList.add("wrapper");
main.appendChild(article);

//Restaurant card
const mainRestaurant = document.createElement("main");
mainRestaurant.classList.add("product","restaurant");
article.appendChild(mainRestaurant);

//Map card
const mainMap = document.createElement("main");
mainMap.classList.add("product","map");
article.appendChild(mainMap);

//Restaurant img
const restaurantImg = document.createElement("picture");
restaurantImg.classList.add("background");
restaurantImg.style.backgroundImage = `url(${eRestaurant.images.main})`
mainRestaurant.appendChild(restaurantImg);

//Restaurant infos
const restaurantInfos = document.createElement("div");
restaurantInfos.classList.add("restaurant-infos");
mainRestaurant.appendChild(restaurantInfos);

//Restaurant title
const restaurantTitle = document.createElement("h1");
restaurantTitle.classList.add("title");
restaurantTitle.innerHTML = eRestaurant.name;
restaurantInfos.appendChild(restaurantTitle);

//Restaurant type
const restaurantType = document.createElement("h2");
restaurantType.classList.add("type");
restaurantType.innerHTML = eRestaurant.type;
restaurantInfos.appendChild(restaurantType);

//Restaurant description
const restaurantDescription = document.createElement("p");
restaurantDescription.classList.add("description");
restaurantInfos.appendChild(restaurantDescription);

//Description span popularity
const descriptionSpanStar = document.createElement("span");
descriptionSpanStar.innerHTML = `${"⭐️".repeat(eRestaurant.popularity)}`;
restaurantDescription.appendChild(descriptionSpanStar);
//Description span distance
const descriptionSpanDistance = document.createElement("span");
descriptionSpanDistance.innerHTML = `${eRestaurant.distance} min`;
restaurantDescription.appendChild(descriptionSpanDistance);
//Description span price
const descriptionSpanPrice = document.createElement("span");
descriptionSpanPrice.innerHTML = `${"€".repeat(eRestaurant.price)}`;
restaurantDescription.appendChild(descriptionSpanPrice);

//Restaurant map
const restaurantMap = document.createElement("picture");
restaurantMap.classList.add("map__img");
restaurantMap.style.backgroundImage = `url(${eRestaurant.images.map})`
mainMap.appendChild(restaurantMap);
    })

    addEventListenerToRestaurant();
};

fillRestaurant(restaurantList);


/* ClICK BUTTON -> ORDER */
const buttonFilterPrice = document.getElementById("price-button");

buttonFilterPrice.addEventListener("click", function () {

  const orderByPrice = restaurantList.sort((e1,e2)=>e1.price-e2.price);

  fillRestaurant(orderByPrice);

});

const buttonFilterPopularity = document.getElementById("popularity-button");
buttonFilterPopularity.addEventListener("click", function() {
  const orderByPopularity = restaurantList.sort((e1,e2)=>e2.popularity-e1.popularity);
  fillRestaurant(orderByPopularity);
}
);
const buttonFilterDistance = document.getElementById("distance-button");
buttonFilterDistance.addEventListener("click", function() {
  const orderByDistance = restaurantList.sort((e1,e2)=>e1.distance-e2.distance);
  fillRestaurant(orderByDistance);
}
);


function addEventListenerToRestaurant ()
{
const wrapper = document.querySelectorAll(".wrapper");


wrapper.forEach((wrapperElement)=> {
    let mapElement = wrapperElement.querySelector(".map");

    wrapperElement.addEventListener('click', function(){ 
        
            wrapper.forEach((el) => {
                let map = el.querySelector(".map");
                map.classList.remove('show');
                el.classList.remove('widden');
            });
                mapElement.classList.add('show');
                wrapperElement.classList.add('widden');
     }); 
});
}

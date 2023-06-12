import { inventories } from "./constants.js";

// Assigning the stringified object to a variable

var jsonString = sessionStorage.getItem("product-id");

// Assigning the previously stringified object - now in JSON-format - to a variable

var product = JSON.parse(jsonString);

// Test to access the object and its properties - successsful

var productContainer = document.getElementById("product");

function productGenerator() {
  productContainer.innerHTML = `<div class="m-scroll box-65 letter-height">
        <div class="m-scroll__title">
          <div class="scroll-backward ${product.scrollSpeed} letter-gap">
            <h2>
               ${product.artist} <span>${product.albumTitle}</span> ${
    product.artist
  } <span>${product.albumTitle}</span> ${product.artist} <span>${
    product.albumTitle
  }</span> ${product.artist} <span>${product.albumTitle}</span> ${
    product.artist
  } <span>${product.albumTitle}</span> ${product.artist} <span>${
    product.albumTitle
  }</span> ${product.artist} <span>${product.albumTitle}</span> ${
    product.artist
  } <span>${product.albumTitle}</span> ${product.artist} <span>${
    product.albumTitle
  }</span>
            </h2>
            <h2>
                ${product.artist} <span>${product.albumTitle}</span> ${
    product.artist
  } <span>${product.albumTitle}</span> ${product.artist} <span>${
    product.albumTitle
  }</span> ${product.artist} <span>${product.albumTitle}</span> ${
    product.artist
  } <span>${product.albumTitle}</span> ${product.artist} <span>${
    product.albumTitle
  }</span> ${product.artist} <span>${product.albumTitle}</span> ${
    product.artist
  } <span>${product.albumTitle}</span> ${product.artist} <span>${
    product.albumTitle
  }</span> 
            </h2>
          </div>
        </div>
    </div>


    <div class="product-flex">
        <div class="product-picture-wrapper">
            <img class="product-picture" src="img/${
              product.path
            }/vinyl.png" alt="${product.albumTitle}">
        </div>

        <div class="product-info">
            <h2 class="product-title">${product.albumTitle}</h2>
            <h3 class="product-artist">${product.artist}</h3>
            <h4 class="product-genre">${product.genre}</h4>
            <p class="product-description">${product.description}</p>
            <h5 class="product-price">${product.vinylPrice},-</h5>
            <div class="product-availability">
                <div class="product-availability-color ${
                  product.vinylStock[0] > 2
                    ? "product-green"
                    : product.vinylStock[0] == 0
                    ? "product-red"
                    : product.vinylStock[0] <= 2
                    ? "product-yellow"
                    : ""
                }"></div>
                <div class="product-availability-text">${
                  product.vinylStock[0] > 2
                    ? "PÅ LAGER"
                    : product.vinylStock[0] == 0
                    ? "IKKE PÅ LAGER"
                    : product.vinylStock[0] <= 2
                    ? "BEGRÆNSET ANTAL"
                    : "ERROR 404"
                }</div>
            </div>
            <div class="product-media">
                <div class="media-btn product-media-vinyl media-active">VINYL</div>
                <div class="media-btn product-media-cd">CD</div>
                <div class="media-btn product-media-cassette">KASSETTEBÅND</div>
            </div>
        </div>
    </div>
    
    <div class="recommend-product">
        <h2 class="recommend-title">MERE ${product.genre}</h2>
        <div class="recommend-container" id="recommend-container">
        
        </div>
    </div>
    `;

  var albumHead = product.albumTitle;

  document.title = `${albumHead.toUpperCase()} | BadstueRock`;
}

productGenerator();

var vinylMedia = document.querySelector(".product-media-vinyl");
var cdMedia = document.querySelector(".product-media-cd");
var cassetteMedia = document.querySelector(".product-media-cassette");
var productPicture = document.querySelector(".product-picture");

var productPrice = document.querySelector(".product-price");
var availableColor = document.querySelector(".product-availability-color");
var availableText = document.querySelector(".product-availability-text");

// Vinyl stock / display

if (product.vinylStock[1] === false) {
  vinylMedia.classList.add("hide");
}

// CD stock / display

if (product.cdStock[1] === false) {
  cdMedia.classList.add("hide");
}

// Cassette / display

if (product.cassetteStock[1] === false) {
  cassetteMedia.classList.add("hide");
}

var mediaBtns = document.querySelectorAll(".media-btn");

mediaBtns.forEach((userItem) => {
  userItem.addEventListener("click", () => {
    vinylMedia.classList.remove("media-active");
    cdMedia.classList.remove("media-active");
    cassetteMedia.classList.remove("media-active");

    userItem.classList.add("media-active");

    if (userItem.classList.contains("product-media-vinyl")) {
      productPicture.setAttribute("src", product.vinylImage);
      productPrice.innerHTML = product.vinylPrice + ",-";
      if (product.vinylStock[0] > 2) {
        availableColor.classList.add("product-green");
        availableColor.classList.remove("product-yellow");
        availableColor.classList.remove("product-red");
        availableText.innerHTML = "PÅ LAGER";
      } else if (product.vinylStock[0] == 0) {
        availableColor.classList.remove("product-green");
        availableColor.classList.remove("product-yellow");
        availableColor.classList.add("product-red");
        availableText.innerHTML = "IKKE PÅ LAGER";
      } else if (product.vinylStock[0] <= 2) {
        availableColor.classList.remove("product-green");
        availableColor.classList.add("product-yellow");
        availableColor.classList.remove("product-red");
        availableText.innerHTML = "BEGRÆNSET ANTAL";
      }
    }

    if (userItem.classList.contains("product-media-cd")) {
      productPicture.setAttribute("src", product.cdImage);
      productPrice.innerHTML = product.cdPrice + ",-";
      if (product.cdStock[0] > 2) {
        availableColor.classList.add("product-green");
        availableColor.classList.remove("product-yellow");
        availableColor.classList.remove("product-red");
        availableText.innerHTML = "PÅ LAGER";
      } else if (product.cdStock[0] == 0) {
        availableColor.classList.remove("product-green");
        availableColor.classList.remove("product-yellow");
        availableColor.classList.add("product-red");
        availableText.innerHTML = "IKKE PÅ LAGER";
      } else if (product.cdStock[0] <= 2) {
        availableColor.classList.remove("product-green");
        availableColor.classList.add("product-yellow");
        availableColor.classList.remove("product-red");
        availableText.innerHTML = "BEGRÆNSET ANTAL";
      }
    }

    if (userItem.classList.contains("product-media-cassette")) {
      productPicture.setAttribute("src", product.cassetteImage);
      productPrice.innerHTML = product.cassettePrice + ",-";
      if (product.cassetteStock[0] > 2) {
        availableColor.classList.add("product-green");
        availableColor.classList.remove("product-yellow");
        availableColor.classList.remove("product-red");
        availableText.innerHTML = "PÅ LAGER";
      } else if (product.cassetteStock[0] == 0) {
        availableColor.classList.remove("product-green");
        availableColor.classList.remove("product-yellow");
        availableColor.classList.add("product-red");
        availableText.innerHTML = "IKKE PÅ LAGER";
      } else if (product.cassetteStock[0] <= 2) {
        availableColor.classList.remove("product-green");
        availableColor.classList.add("product-yellow");
        availableColor.classList.remove("product-red");
        availableText.innerHTML = "BEGRÆNSET ANTAL";
      }
    }
  });
});

var recommendContainer = document.getElementById("recommend-container");

function recommendGenerator() {
  let id = 0;

  for (let inventory of inventories) {
    if (
      inventory.genre == product.genre &&
      inventory.albumTitle != product.albumTitle
    ) {
      id++;
      recommendContainer.innerHTML += `<a href="product.html" class="recommend-no-${id}">
                <div class="recommend-item">
                    <div class="inventory-card">
                        <div class="inventory-card-id recommend-card-id" id="${inventory.id}">
                            <img class="inventory-image" src="${inventory.image}" alt="${inventory.albumTitle}-image"">
                            <div class="inventory-genre-year">
                                <p class="inventory-genre">${inventory.genre}</p>
                                <p class="inventory-year">${inventory.year}</p>
                            </div>
                            <h2 class="inventory-title">${inventory.albumTitle}</h2>
                            <h3 class="inventory-artist">${inventory.artist}</h3>
                        </div>
                    </div>
                </div>
            </a>`;
    }
  }
}

recommendGenerator();

var recommendCards = document.querySelectorAll(".recommend-card-id");

recommendCards.forEach((userItem) => {
  var productId = userItem.id;

  userItem.addEventListener("click", () => {
    sessionStorage.setItem(
      "product-id",
      JSON.stringify(inventories[productId])
    );
  });
});

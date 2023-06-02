
// This script is adding the clicked object to sessionStorage to be used on the individual product page

// Importing the inventories object array

import { inventories } from "./constants.js"

// Assigning the #inventory-card to the variable inventoryCards

var inventoryCards = document.querySelectorAll(".inventory-card-id")

// Looping through the inventoryCards

inventoryCards.forEach((userItem) => {

    var productId = userItem.id

    userItem.addEventListener('click', () => {
        sessionStorage.setItem("product-id", JSON.stringify(inventories[productId]))
    })
})
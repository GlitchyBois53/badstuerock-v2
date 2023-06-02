
// Importing the objects to search in

import { inventories } from './constants.js';

// Search functionality for the filter and search feature


//Assigning elements to variables

const inventoryTemplate = document.getElementById("inventory-template")
const inventoryContainer = document.getElementById("inventory-container")
const searchBar = document.getElementById("search-bar")


// Media types 

const vinylFilter = document.querySelector("[data-media-vinyl]")
const cdFilter = document.querySelector("[data-media-cd]")
const cassetteFilter = document.querySelector("[data-media-cassette]")


// Genres

const popFilter = document.querySelector("[data-genre-pop]")
const rockFilter = document.querySelector("[data-genre-rock]")
const danceFilter = document.querySelector("[data-genre-dance]")
const rbFilter = document.querySelector("[data-genre-rb]")
const electronicFilter = document.querySelector("[data-genre-electronic]")
const hiphopFilter = document.querySelector("[data-genre-hiphop]")
const houseFilter = document.querySelector("[data-genre-house]")
const punkFilter = document.querySelector("[data-genre-punk]")
const soulFilter = document.querySelector("[data-genre-soul]")
const classicFilter = document.querySelector("[data-genre-classic]")
const heavyMetalFilter = document.querySelector("[data-genre-heavymetal]")
const jazzFilter = document.querySelector("[data-genre-jazz]")
const discoFilter = document.querySelector("[data-genre-disco]")
const funkFilter = document.querySelector("[data-genre-funk]")


// An empty array for the search results

let inventoriesResults = []


// The function that performs the search and filter functions

const filterInventory = () => {
    const searchValue = searchBar.value.toLowerCase()

    const isVinylFilterActive = vinylFilter.classList.contains('filter-active')
    const isCdFilterActive = cdFilter.classList.contains('filter-active')
    const isCassetteFilterActive = cassetteFilter.classList.contains('filter-active')

    const isPopFilterActive = popFilter.classList.contains('filter-active')
    const isRockFilterActive = rockFilter.classList.contains('filter-active')
    const isDanceFilterActive = danceFilter.classList.contains('filter-active')
    const isRbFilterActive = rbFilter.classList.contains('filter-active')
    const isElectronicFilterActive = electronicFilter.classList.contains('filter-active')
    const isHipHopFilterActive = hiphopFilter.classList.contains('filter-active')
    const isHouseFilterActive = houseFilter.classList.contains('filter-active')
    const isPunkFilterActive = punkFilter.classList.contains('filter-active')
    const isSoulFilterActive = soulFilter.classList.contains('filter-active')
    const isClassicFilterActive = classicFilter.classList.contains('filter-active')
    const isHeavyMetalFilterActive = heavyMetalFilter.classList.contains('filter-active')
    const isJazzFilterActive = jazzFilter.classList.contains('filter-active')
    const isDiscoFilterActive = discoFilter.classList.contains('filter-active')
    const isFunkFilterActive = funkFilter.classList.contains('filter-active')

    
    inventoriesResults.forEach(inventory => {
        const keywordsMatch = inventory.keywords.toLowerCase().includes(searchValue)

        let isVisible = false

        if (!isVinylFilterActive && !isCdFilterActive && !isCassetteFilterActive && !isPopFilterActive && !isRockFilterActive && !isDanceFilterActive && !isRbFilterActive && !isElectronicFilterActive && !isHipHopFilterActive && !isHouseFilterActive && !isPunkFilterActive && !isSoulFilterActive && !isClassicFilterActive && !isHeavyMetalFilterActive && !isJazzFilterActive && !isDiscoFilterActive && !isFunkFilterActive) {
            isVisible = keywordsMatch
        } else if (keywordsMatch) {
            if (isVinylFilterActive && inventory.vinylStock[1] === true) {
                isVisible = true
            }
            if (isCdFilterActive && inventory.cdStock[1] === true) {
                isVisible = true
            }
            if (isCassetteFilterActive && inventory.cassetteStock[1] === true) {
                isVisible = true
            }
            if (isPopFilterActive && inventory.genre === 'pop') {
                isVisible = true
            }
            if (isRockFilterActive && inventory.genre === 'rock') {
                isVisible = true
            }
            if (isDanceFilterActive && inventory.genre === 'dance') {
                isVisible = true
            }
            if (isRbFilterActive && inventory.genre === 'r&b') {
                isVisible = true
            }
            if (isElectronicFilterActive && inventory.genre === 'elektronisk') {
                isVisible = true
            }
            if (isHipHopFilterActive && inventory.genre === 'hip-hop') {
                isVisible = true
            }
            if (isHouseFilterActive && inventory.genre === 'house') {
                isVisible = true
            }
            if (isPunkFilterActive && inventory.genre === 'punk') {
                isVisible = true
            }
            if (isSoulFilterActive && inventory.genre === 'soul') {
                isVisible = true
            }
            if (isClassicFilterActive && inventory.genre === 'klassisk') {
                isVisible = true
            }
            if (isHeavyMetalFilterActive && inventory.genre === 'heavy metal') {
                isVisible = true
            }
            if (isJazzFilterActive && inventory.genre === 'jazz') {
                isVisible = true
            }
            if (isDiscoFilterActive && inventory.genre === 'disco') {
                isVisible = true
            }
            if (isFunkFilterActive && inventory.genre === 'funk') {
                isVisible = true
            }
        }

        inventory.element.classList.toggle('hide', !isVisible)
    })
}


// Event Listeners for toggling the filters and registering the search input

searchBar.addEventListener('input', () => {
    filterInventory() // callback function 
})

vinylFilter.addEventListener('click', () => {
    vinylFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

cdFilter.addEventListener('click', () => {
    cdFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

cassetteFilter.addEventListener('click', () => {
    cassetteFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

popFilter.addEventListener('click', () => {
    popFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

rockFilter.addEventListener('click', () => {
    rockFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

danceFilter.addEventListener('click', () => {
    danceFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

rbFilter.addEventListener('click', () => {
    rbFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

electronicFilter.addEventListener('click', () => {
    electronicFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

hiphopFilter.addEventListener('click', () => {
    hiphopFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

houseFilter.addEventListener('click', () => {
    houseFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

punkFilter.addEventListener('click', () => {
    punkFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

soulFilter.addEventListener('click', () => {
    soulFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

classicFilter.addEventListener('click', () => {
    classicFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

heavyMetalFilter.addEventListener('click', () => {
    heavyMetalFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

jazzFilter.addEventListener('click', () => {
    jazzFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

discoFilter.addEventListener('click', () => {
    discoFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

funkFilter.addEventListener('click', () => {
    funkFilter.classList.toggle('filter-active')
    filterInventory() // callback function 
})

// The function that displays the search results / parses them to the html element / site

const displayInventories = arr => {
    inventoriesResults = arr.map(inventory => {

        const card = inventoryTemplate.content.cloneNode(true).children[0]
        // her laver vi en variabel der repraesenterer de elementer vi skal bruge
        
        const image = card.querySelector(".inventory-image")
        const genre = card.querySelector(".inventory-genre")
        const year = card.querySelector(".inventory-year")
        const title = card.querySelector(".inventory-title")
        const artist = card.querySelector(".inventory-artist")
        const id = card.querySelector(".inventory-card-id")

        // her indsætter vi vores textcontent i de forskellige sektioner i vores card

        image.style.backgroundImage = `url(${inventory.image})`
        genre.innerHTML = inventory.genre
        year.innerHTML = inventory.year
        title.innerHTML = inventory.albumTitle
        artist.innerHTML = inventory.artist  
        id.id = inventory.id
    
        // her "append'er" vi det card vi her har lavet til vores userCardContainer

        inventoryContainer.append(card)

        // her returnerer vi et object

        return { image: inventory.image , albumTitle: inventory.albumTitle, artist: inventory.artist, year: inventory.year, genre: inventory.genre, keywords: inventory.keywords, vinylStock: inventory.vinylStock, cdStock: inventory.cdStock, cassetteStock: inventory.cassetteStock, id: inventory.id, element: card }
    })
}

// The function that displays the search results is initiated with the 'inventories' which is imported further up in the file

displayInventories(inventories)
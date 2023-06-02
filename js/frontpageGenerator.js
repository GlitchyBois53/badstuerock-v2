
// Importing the object arrays / content from 'constants.js'

import { releases, articles, covers1, covers2, covers3, covers4, covers5, covers6, testimonials, inventories } from "./constants.js";


// Content generator for the 'Releases' section on the front page

const releasesContainer = document.getElementById("releases");

function releaseGenerator() {
	for (let release of releases) {
			releasesContainer.innerHTML += 
			`<div class="album-release" id="${release.id}">
                    <img src="./img/${release.image}" alt="" class="album-cover">
                    <div class="genre-year">
                        <p class="genre">${release.genre}</p>
                        <p class="year">${release.year}</p>
                    </div>
                    <h4 class="title">${release.title}</h4>
                    <h4 class="artist">${release.artist}</h4>
             </div>`;
	}

    var albumRelease = document.querySelectorAll(".album-release")

    albumRelease.forEach((userItem) => {  
        
        var productId = userItem.id
        
        userItem.addEventListener('click', () => {
            window.location.href = 'product.html'
            sessionStorage.setItem("product-id", JSON.stringify(inventories[productId]))
        })
    })
}

releaseGenerator();


// Content generator for the 'Article' section on the front page

const articlesContainer = document.getElementById("articles");

function articleGenerator() {
	for (let article of articles) {
			articlesContainer.innerHTML += 
			`<div class="article">
                    <img src="./img/${article.image}" alt="" class="article">
                    <p class="type">${article.type}</p>
                    <p class="artitle">${article.artitle}</p>
             </div>`;
	}
}

articleGenerator();


// Content generator for the 'Article' section on the front page

const coverContainer1 = document.querySelector(".covers1");
const coverContainer2 = document.querySelector(".covers2");
const coverContainer3 = document.querySelector(".covers3");
const coverContainer4 = document.querySelector(".covers4");
const coverContainer5 = document.querySelector(".covers5");
const coverContainer6 = document.querySelector(".covers6");

function inspirationGenerator1() {
	for (let cover of covers1) {
			coverContainer1.innerHTML += 
			`<div class="cover" id="${cover.id}">
                    <img src="./img/${cover.image}" alt="" class="cover-img">
            </div>`;
	}
}

function inspirationGenerator2() {
	for (let cover of covers2) {
			coverContainer2.innerHTML += 
			`<div class="cover" id="${cover.id}">
                    <img src="./img/${cover.image}" alt="" class="cover-img">
            </div>`;
	}
}

function inspirationGenerator3() {
	for (let cover of covers3) {
			coverContainer3.innerHTML += 
			`<div class="cover" id="${cover.id}">
                    <img src="./img/${cover.image}" alt="" class="cover-img">
            </div>`;
	}
}

function inspirationGenerator4() {
	for (let cover of covers4) {
			coverContainer4.innerHTML += 
			`<div class="cover" id="${cover.id}">
                    <img src="./img/${cover.image}" alt="" class="cover-img">
            </div>`;
	}
}

function inspirationGenerator5() {
	for (let cover of covers5) {
			coverContainer5.innerHTML += 
			`<div class="cover" id="${cover.id}">
                    <img src="./img/${cover.image}" alt="" class="cover-img">
            </div>`;
	}
}

function inspirationGenerator6() {
	for (let cover of covers6) {
			coverContainer6.innerHTML += 
			`<div class="cover" id="${cover.id}">
                    <img src="./img/${cover.image}" alt="" class="cover-img">
            </div>`;
	}
}

inspirationGenerator1();
inspirationGenerator2();
inspirationGenerator3();
inspirationGenerator4();
inspirationGenerator5();
inspirationGenerator6();

var inspirationCover = document.querySelectorAll(".cover") 

inspirationCover.forEach((userItem) => {
    
    var productId = userItem.id

    userItem.addEventListener('click', () => {
        window.location.href = 'product.html'
        sessionStorage.setItem("product-id", JSON.stringify(inventories[productId]))
    })
})

// Testimonials generator

var testimonialsContainer = document.getElementById("testimonials")

function testimonialGenerator() {
	for (let testimonial of testimonials) {
			testimonialsContainer.innerHTML += 
			`<div class="testimonial ${testimonial.class}">
                <div class="testimonial-bio">
                    <img src="${testimonial.image}" alt="${testimonial.name}-photo"/>
                    <div class="testimonial-info">
                        <h4>${testimonial.name}</h4>
                        <div class="stars-container">
                            <img src="img/stars.png" class="${testimonial.stars}" alt="stars-green"/>
                            <img src="img/stars-grey.png" alt="stars-gray"/>
                        </div>
                    </div>
                </div>
                <p class="testimonial-text">${testimonial.text}</p>
            </div>`;
	}
}

testimonialGenerator();
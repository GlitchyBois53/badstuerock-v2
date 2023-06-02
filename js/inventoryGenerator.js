
// Importing the object arrays from constants.js

import { medias, genres } from './constants.js';


// Medias


// Creating the media card template

var mediaContainer = document.getElementById("medias")

function mediaGenerator() {
	for (let media of medias) {
			mediaContainer.innerHTML += 
			`<div class="filter-checkbox" ${media.data}>
                <div class="checkbox-color"></div>
                <div>
                    ${media.title}
                </div>
             </div>`;
	}
}


// Creating the genre card template

mediaGenerator();


// Genres


// Creating the media card template

var genreContainer = document.getElementById("genres")

function genreGenerator() {
	for (let genre of genres) {
			genreContainer.innerHTML += 
			`<div class="filter-checkbox" ${genre.data}>
                <div class="checkbox-color"></div>
                <div>
                    ${genre.title}
                </div>
             </div>`;
	}
}

genreGenerator();

const { Title } = require("@mui/icons-material");
const { duration } = require("@mui/material");

// Constantes
const hoursPerDay = 24;

console.log(hoursPerDay);

const horasPorDía = 24;
const minutosPorHora = 60;
const segundosPorMinuto = 60;

// Almacenar datos segun el tipo de dato.

let positiveInteger = 22;
let negativeInteger = -12;
let largeDecimal = 10.434345454546;

console.log(typeof positiveInteger); // number
console.log(typeof negativeInteger); // number
console.log(typeof largeDecimal); // float number

let userIsSignedIn = true;
let userIsAdmin = false;

console.log(typeof userIsSignedIn); // boolean
console.log(typeof userIsAdmin); // boolean

let firstname = "David";
let lastName = 'Handerson';

console.log(typeof firstname); // string
console.log(typeof lastName); // string

console.log(firstname + ' ' + lastName); // concatenating variables with a + operator

let episodeTitle = 'pilote';
let episodeDuration = 45;
let hasBeenWatched = true;

console.log(episodeTitle + ' ' + episodeDuration + ' ' + hasBeenWatched);


//Define objects and their attributes with classes
let myBook = {
    Title: 'The Secret',
    author: 'Rhonda Byrne',
    numberOfPages: '224',
    isAvailable: true
};
console.log(myBook);

let moovie = {
    Title: 'The One',
    duration: 60,
    hasBeenWatched: false,
};
console.log(moovie);

let moovieTitle = moovie.Title;
console.log(moovieTitle); // The one.

let moovieDuration = moovie.duration;
console.log(moovieDuration); // 60.


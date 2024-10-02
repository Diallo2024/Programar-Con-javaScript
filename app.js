const { Title, TimeToLeave } = require("@mui/icons-material");
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
let myLibro = {
    Title: 'The Secret',
    author: 'Rhonda Byrne',
    numberOfPages: '224',
    isAvailable: true
};
console.log(myLibro);

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

let episodio = {
    titulo: 'the one',
    duracion: 45,
    visto: true
};

console.log(episodio);

//Classes

class book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

let myBook = new book('The Secret', 'Rhonda Byrne', 224);

class series {
    constructor (title, duration, watched) {
        this.title = Title;
        this.duration = duration;
        this.watched = watched;
    }
};

firstSerie = new series ('the First', '45', 'true');
secondSerie = new series ('the second', '60', 'false');
thirdSeire = new series ('the third', '60', 'false');

//Manage complexity with the right collection

let invitados = []; //This is how to create an Array object.

let myInvitados = ['Jorge', 'Sarah', 'Audrey'];

let firstGuest = myInvitados[0]; // 'Jorge'
let ThirdGuest = myInvitados[2]; // 'Audrey'
let undefinedGuest = myInvitados[6]; // undefined

// Using an Array in the code to store variables

let allInvitados = [
    firstGuest, ThirdGuest, undefinedGuest
];

let numberOfGuests = 10;
let ticketsRemaining = false;
let artistName = 'Bob';

let artistProfile = {
    numberOfGuests: numberOfGuests,
    ticketsRemaining: ticketsRemaining,
    artistName: artistName
};

let artistArrray = [numberOfGuests, ticketsRemaining, artistName];
console.log(artistProfile);
console.log(artistArrray);

//Other way to use primitives types, objects and arrays in javaScript.
let numberOfBooks = 20;
let totalNumerOfBooks = numberOfBooks; // 20.

// then

let profilArtista = {
    name: 'Henderson Bob',
    age: 30,
    available: true
};

let allProfiles = [profilArtista]; // new Array containing the bove object.

profilArtista.available = false; // changing the object.

console.log(allProfiles); // will show {name: 'Henderson', age: 30, available: false }

let guests = ['oury', 'kate', 'mateo'];

guests.push('Paul Kelerman');
console.log(guests);

guests.unshift('Obama');
console.log(guests);

guests.pop();
console.log(guests);

//JavaScript: one language, multiple environments

let huespedes = 50;
console.log(huespedes); // is different than if we type:

/*console.log(name1);  undefined
let name1 = 'Obama'; */

// flow, if/else syntaxe

/*if (myBoolean) {
    // reat to myBoolean being true
} else {
    //react to myBoolean being false
}*/

let userLogedIn = true;
if(userLogedIn) {
    console.log('the User is logged succefully');
}else {
    console.log('Alert! Try it again');
}

let age = 18;

if (age >= 18) {
    console.log('Eres mayor de ead');
} else {
    console.log('Sigues siendo menor de edad');
}

const totalSillas = 30;
let totalInvitados = 25;

if (totalSillas > totalInvitados) {
    console.log('No quedan sillas');

} else {
    console.log('Nos faltan sillas');
}

class episodios {
    constructor (titulo, duración, visto) {
        this.titulo = titulo;
        this.duracion = duracion;

        if (visto == duración) {
            this.visto = true;

          } else {
            this.visto = false;
          }
    }
}

class episodes {
    constructor (title, duration, minutesWatched) {
        this.title = title;
        this.duracion = duration;

        if(minutesWatched == duration) {
            this.hasBeenWatched = true;
        } else {
            this.hasBeenWatched = false;
        }
    }
}

export default hasBeenWatched();
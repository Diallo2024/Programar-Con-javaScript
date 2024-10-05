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
    constructor(title, duration, watched) {
        this.title = Title;
        this.duration = duration;
        this.watched = watched;
    }
};

firstSerie = new series('the First', '45', 'true');
secondSerie = new series('the second', '60', 'false');
thirdSeire = new series('the third', '60', 'false');

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
if (userLogedIn) {
    console.log('the User is logged succefully');
} else {
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
    constructor(titulo, duración, visto) {
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
    constructor(title, duration, minutesWatched) {
        this.title = title;
        this.duracion = duration;

        if (minutesWatched == duration) {
            this.hasBeenWatched = true;
        } else {
            this.hasBeenWatched = false;
        }
    }
}

let userIsLoggedIn = true;
let usserhasPremiunAccount = true;
let userHasMegaPremiumAccount = false;

if (userIsLoggedIn && usserhasPremiunAccount) {
    console.log('User is logged and has a premium account');
} else {
    console.log('User is not logged');
}

userHasMegaPremiumAccount && usserhasPremiunAccount // false
userIsSignedIn || userHasMegaPremiumAccount // true
userIsLoggedIn || userHasMegaPremiumAccount // true

!userIsLoggedIn // false
!userHasMegaPremiumAccount // true

class Episode {
    constructor(title, duration, minutesWatched, watchedText, continueWatching) {
        this.title = title;
        this.duration = duration;
        this.watchedExt = watchedText;
        this.continueWatching = continueWatching;

        this.continueWatching = false;

        if (minutesWatched === 0) {
            this.watchedText = 'Not yet watched';
        } else if (minutesWatched > 0 && minutesWatched < duration) {
            this.watchedText = 'Watching';
            this.continueWatching = true;
        } else {
            this.watchedText = 'Watched';
        }


    }
}

let firstEpisode = new Episode('Dark Beginnings', 45, 45);
let secondEpisode = new Episode('The Mystery Continues', 45, 10);
let thirdEpisode = new Episode('An Unexpected Climax', 60, 0);

const firstUser = {
    name: 'Bill Keam',
    age: 25,
    accountLevel: 'normal'
};

const secondUser = {
    name: 'Maria Dean',
    age: 33,
    accountLevel: 'premium'
};

thirdUser = {
    name: 'Nelson',
    age: 22,
    accountLevel: 'mega-premium'
};

switch (firstUser.accountLevel) {
    case 'nomal':
        console.log('You have a normal account');
        break;
    case 'premium':
        console.log('You have a primium account');
        break;
    case 'mega-premium':
        console.log('You have a mega-premium account');
        break;
    default:
        console.log('unknown account type!');
}

// Using the right loop to repeat tasks

const numberOfPassengers = 10;

for(let i = 0; i < numberOfPassengers; i++) {
    console.log('Passenger Onboarded');
}

console.log('All passengers Onboarded');


/*for (i = 0; i < passengers.length; i++) {
    console.log('Passenger Onboarded');
};*/

const passengers = [
    'Bill Caro',
    'Sandro cleo',
    'Kate clinton',
    'Naomi Cambell'
];

for (let i = 0; i < passengers.length; i++) {
    console.log('Bording ' + passengers[i]);
};

for (let i in passengers) {
    console.log('Bording Passenger ' + passengers[i]);
};
const muziek = ['Avenged Sevenfold', 'Ayreon', 'Beast in Black', 'Blind Guardian', 'Carach Angren', 'Demons & Wizards', 'Helloween', 'Judas Priest', 'Megadeth', 'Primal Fear', 'Rhapsody (of Fire)',];
const boeken = ['Wheel of Time', 'Stormlight Archives', 'The Lord of the Rings', 'The Dark Tower', 'Mistborn'];
const games = ['Metroid', 'Dark Souls', 'Elder Scrolls', 'Rayman', 'Hollow Knight', 'Professor Layton', 'The Legend of Zelda', 'Mass Effect', ];

var musicList = document.getElementById("muziek");
var bookList = document.getElementById("boeken");
var gameList = document.getElementById("games");

muziek.forEach(function (item) {
let li = document.createElement('li');
musicList.appendChild(li);
li.innerHTML += item;
});

boeken.forEach(function (item) {
let li = document.createElement('li');
bookList.appendChild(li);
li.innerHTML += item;
});

games.forEach(function (item) {
let li = document.createElement('li');
gameList.appendChild(li);
li.innerHTML += item;
});

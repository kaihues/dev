import './style.css';
import logo from './images/logo.png';

const green = '#5adb7f';
const darkgreen = '#49c96d';
const cyan = '#69d9f0';
const darkcyan = '#5ac1d6';
const purple = '#9c8deb';
const darkpurple = '#8b7cd6';

let logoimg = document.getElementById('logo');
logoimg.src=logo;

let sidebar = document.getElementById('sidebar');
let colorTitles = document.getElementsByTagName('h4');

let stemButton = document.getElementById("stemEdButton");
let techButton = document.getElementById("creativeTechButton");
let servButton = document.getElementById("serviceButton");

stemButton.addEventListener('click', () => {
    sidebar.style.backgroundColor = green;
    stemButton.style.backgroundColor = darkgreen;
    techButton.style.backgroundColor = cyan;
    servButton.style.backgroundColor = purple;
});

techButton.addEventListener('click', () => {
    sidebar.style.backgroundColor = cyan;
    techButton.style.backgroundColor = darkcyan;
    stemButton.style.backgroundColor = green;
    servButton.style.backgroundColor = purple;
});

servButton.addEventListener('click', () => {
    sidebar.style.backgroundColor = purple;
    servButton.style.backgroundColor = darkpurple;
    techButton.style.backgroundColor = cyan;
    stemButton.style.backgroundColor = green;
});
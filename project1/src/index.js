import './style.css';
import logo from './images/logo.png';
import scissordivider from './images/scissors-divider.png';
import { jsPDF } from "jspdf";

const green = '#5adb7f';
const darkgreen = '#49c96d';
const cyan = '#69d9f0';
const darkcyan = '#5ac1d6';
const purple = '#9c8deb';
const darkpurple = '#8b7cd6';


let logoimg = document.getElementById('logo');
logoimg.src=logo;

let scissimg = document.getElementById('scissordivider');
scissimg.src=scissordivider;

let sidebar = document.getElementById('sidebar');
let colorElement = document.getElementsByClassName('colorElement');


let stemButton = document.getElementById("stemEdButton");
let techButton = document.getElementById("creativeTechButton");
let servButton = document.getElementById("serviceButton");

let downButton = document.getElementById("downloadButton");
let resume = document.getElementById('resume');

let techElement = document.getElementsByClassName('techElement');
let stemElement = document.getElementsByClassName('stemElement');
let servElement = document.getElementsByClassName('servElement');

const doc = new jsPDF({
    orientation: "portrait",
    unit: "in",
  });

function generateResume() {
    doc.html(resume).then(function () {
      doc.save('kai-resume.pdf');
      console.log("making")
    })
    console.log("generated");
 };


downButton.addEventListener('click', () => {
    generateResume();
});
  
stemButton.addEventListener('click', () => {
    stemResume();
});

techButton.addEventListener('click', () => {
    techResume();
});

servButton.addEventListener('click', () => {
    servResume();
});

function show(type) {
    for (const element of type) {
        element.classList.remove("hidden");
    }
};

function hide(type) {
    for (const element of type) {
        element.classList.add("hidden");
    }
};

function color(color) {
    for (const element of colorElement) {
        element.style.color = color;
    }
};

function stemResume() {
    sidebar.style.backgroundColor = green;
    stemButton.style.backgroundColor = darkgreen;
    techButton.style.backgroundColor = cyan;
    servButton.style.backgroundColor = purple;
    
    color(green);

    hide(stemElement);
    hide(techElement);
    hide(servElement);
    show(stemElement);
};

function techResume() {
    sidebar.style.backgroundColor = cyan;
    techButton.style.backgroundColor = darkcyan;
    stemButton.style.backgroundColor = green;
    servButton.style.backgroundColor = purple;
    
    color(cyan); 

    hide(techElement);
    hide(stemElement);
    hide(servElement);
    show(techElement);
};

function servResume() {
    sidebar.style.backgroundColor = purple;
    servButton.style.backgroundColor = darkpurple;
    techButton.style.backgroundColor = cyan;
    stemButton.style.backgroundColor = green;

    color(purple);

    hide(servElement);
    hide(techElement);
    hide(stemElement);
    show(servElement);
};

function setup(){
    hide(techElement);
    hide(stemElement);
    hide(servElement);
    techResume();
}

setup();

import './style.css';
import logo from './images/logo.png';
import scissordivider from './images/scissors-divider.png';
import html2PDF from 'jspdf-html2canvas';

const green = '#5adb7f';
const darkgreen = '#49c96d';
const cyan = '#69d9f0';
const darkcyan = '#5ac1d6';
const purple = '#9c8deb';
const darkpurple = '#8b7cd6';
const blue = '#42adff';


let logoimg = document.getElementById('logo');
logoimg.src=logo;

let scissimg = document.getElementById('scissordivider');
scissimg.src=scissordivider;

let sidebar = document.getElementById('sidebar');
let colorElement = document.getElementsByClassName('colorElement');


let stemButton = document.getElementById("stemEdButton");
let techButton = document.getElementById("creativeTechButton");
let servButton = document.getElementById("serviceButton");
let custButton = document.getElementById("customButton");

let downButton = document.getElementById("downloadButton");
let resume = document.getElementById('resume');

let techElement = document.getElementsByClassName('techElement');
let stemElement = document.getElementsByClassName('stemElement');
let servElement = document.getElementsByClassName('servElement');
let custElement = document.getElementsByClassName('custom');

let courselist = document.getElementsByClassName('courselist');


let max = window.matchMedia("(max-width: 800px)");

function generateResume() {
    html2PDF(resume, {
        jsPDF: {
            unit: 'in',
            format: [8.5, 11]
        },
        imageType: 'image/jpeg',
        output: 'kai-resume.pdf'
    });
}
 
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

custButton.addEventListener('click', () => {
    customResume();
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
    hide(custElement);
    
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
    hide(custElement);

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
    hide(custElement);
    hide(courselist);

    show(servElement);
};

function customResume() {
    sidebar.style.backgroundColor = blue;
    stemButton.style.backgroundColor = green;
    techButton.style.backgroundColor = cyan;
    servButton.style.backgroundColor = purple;
    
    color(blue);

    hide(custElement);
    hide(stemElement);
    hide(techElement);
    hide(servElement);
    hide(courselist);

    show(custElement);
};

function mediaQuery(x) {
    if (x.matches) { // If screen is less than / equal to 800
        downButton.innerText = '\xa0' + "⤓" + '\xa0';
      } else {
        downButton.innerText = "⤓ Download PDF";
      }
}

max.addEventListener('change', () => {
    mediaQuery(max);
});

function setup(){
    mediaQuery(max);
    hide(techElement);
    hide(stemElement);
    hide(servElement);
    techResume();
}

setup();

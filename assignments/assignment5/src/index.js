import './stylesheet.css';

import topbar from "./images/topbar-icons.png";

import duck1 from './images/duck1.gif';
import duck2 from './images/duck2.gif';

document.getElementById('iconsimg').src=topbar;

let duck = document.getElementById('duck-image');

duck.src=duck1;

duck.addEventListener('mouseover', () => {
    duck.src=duck2;
});

duck.addEventListener('mouseout', () => { 
    duck.src=duck1;
});



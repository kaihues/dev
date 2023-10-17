import './stylesheet.css';
import duck1 from '../images/duck1.png';
import duck2 from '../images/duck2.png';
import duck3 from '../images/duck3.png';
import duck4 from '../images/duck4.png';
import duck5 from '../images/duck5.png';

duck = document.getElementById('duck-image');
duck.src="duck1";

let mouseState = 1;

duck.addEventListener('mouseover', () => {
    mouseState = 2;
    mouseState = 3;
});

duck.addEventListener('mouseout', () => {
    mouseState = 2;
    mouseState = 1;
});

while (mouseState = 1) {
    duck.src = duck1;
    wait(500);
    duck.src = duck2;
    wait(500);
}

while (mouseState = 2) {
    duck.src = duck3;
    wait(500);
}

while (mouseState = 3) {
    duck.src = duck4;
    wait(500);
    duck.src = duck5;
    wait(500);
}
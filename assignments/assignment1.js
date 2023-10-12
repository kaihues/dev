console.log("hello world");

const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');

const img1 = document.getElementById('img1');

let isStyled = false;
para2.style.color = '#FFFFFF';

document.addEventListener('click', () => {
    if (isStyled) {
        para1.style.color = null;
        para2.style.color = '#FFFFFF'; 
        isStyled = false;
    } else {
       para1.style.color = '#FFFFFF';
       para2.style.color = null;
       isStyled = true;
    }
    
});

img1.addEventListener('mouseover', () => {
    img1.src = "../images/wake-kitty.png";

});

img1.addEventListener('mouseout', () => {
    img1.src = "../images/shh-kitty.png";

});
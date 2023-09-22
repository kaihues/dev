// I used this site to learn how to live update outputs on the slider
// https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types


const form = document.querySelector('form');
form.addEventListener('submit', (event)=> {
    event.preventDefault();

    const data = new FormData(form);

    const namedata = data.get('yourname');
    const colordata = data.get('color');
    const likedata = data.get('like');
    const thank = document.getElementById("thank");
    const heart = document.getElementById("heart");

    if (likedata == 1 || likedata == 2) {
        thank.textContent = "thanks"+'\xa0'+namedata+'\xa0';
    }

    if (likedata == 3 || likedata == 4) {
        thank.textContent = "thank you for the message"+'\xa0'+namedata+"!"+'\xa0';
    }

    if (likedata == 5) {
        thank.textContent = "thank you so much"+'\xa0'+namedata+"!! :D"+'\xa0';
    }

    heart.textContent = "♥";
    heart.style.color = colordata;

});

const like = document.querySelector('#like');
const output = document.querySelector('.like-output');

output.textContent = like.value;
output.textContent = "i'd hang out with him";

like.addEventListener('input', () => {
    if (like.value == 1) {
        output.textContent = "only a bit";
    }
    if (like.value == 2) {
        output.textContent = "he's cool";
    }
    if (like.value == 3) {
        output.textContent = "i'd hang out with him";
    }
    if (like.value == 4) {
        output.textContent = "holy cow he's great";
    }
    if (like.value == 5) {
        output.textContent = "so very many!!";
    }
    
})

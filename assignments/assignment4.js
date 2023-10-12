

const box = document.getElementById('textbox');
const image = document.getElementById('foximg');
const button = document.getElementById('foxbutton');

    function write(data) {
        const randimg = Math.floor(Math.random() * data);
        image.src = `https://img.foxes.cool/fox/${randimg}.jpg`;
    }
    function getImage() {
        fetch('https://foxes.cool/counts/fox')
        .then((response) => response.json())
        .then((data) => { write(data) });
    }

    function loading() {
        image.src = '../images/loading.png';
    }
    
    button.addEventListener('click', () => {
        loading();
        getImage();
    })
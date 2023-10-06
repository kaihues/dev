

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
        image.src = 'https://cdn.discordapp.com/attachments/784612710218072074/1159733396281495634/loading.png?ex=653218e4&is=651fa3e4&hm=eada779a5eff27bb38bf285a3f78f18beb4be4266ea810c2ac209f2f01f779ca&';
    }
    
    button.addEventListener('click', () => {
        loading();
        getImage();
    })
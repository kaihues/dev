console.log("hello world");

const userNameInput = document.getElementById('username');
userNameInput.addEventListener('change', ()=> {
    console.log(userNameInput.value);
});

const form = document.querySelector('form');
form.addEventListener('submit', (event)=> {
    event.preventDefault();

    const data = new FormData(form);
    console.log(data.get('username'));
    console.log(data.get('password'));
});



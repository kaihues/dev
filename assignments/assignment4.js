

const box = document.getElementById('textbox');

    function write(json) {
        for (const fact of json.data) {
            console.log(fact);
            const p = document.createElement('p');
            p.innerText = fact;
            box.appendChild(p);
        }
    }

    fetch('')
    .then((response) => {return response.json() })
    .then(write);
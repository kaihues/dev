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
    img1.src = "https://cdn.discordapp.com/attachments/784612710218072074/1151987000166064208/cat-wake.PNG";

});

img1.addEventListener('mouseout', () => {
    img1.src = "https://cdn.discordapp.com/attachments/784612710218072074/1151986999935385720/cat-sleep.PNG";

});
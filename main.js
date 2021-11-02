const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

let pictures = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"]

for (let i=0; i < pictures.length; i++) {
let newImage = document.createElement('img');
newImage.setAttribute('src', pictures[i]);
newImage.setAttribute('class', 'small-picture')
thumbBar.appendChild(newImage);    
}

function change (e) {
displayedImage.setAttribute('src', e.target.getAttribute('src'))
}
thumbBar.onclick = change;

/* Wiring up the Darken/Lighten button */
function darken () {
    if (btn.classList.contains('dark')){
    overlay.style.backgroundColor = 'rgb(0,0,0,0.5)';
    btn.textContent = 'Light'
    btn.setAttribute('class', 'light');
    } else {
        overlay.style.backgroundColor = 'rgb(0,0,0,0)';
        btn.textContent = 'Dark'
        btn.setAttribute('class', 'dark');
    }    
}
btn.addEventListener('click', darken);

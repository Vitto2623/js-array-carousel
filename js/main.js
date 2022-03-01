const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// aggiungo le immagini dinamicamente 
let containerContent = "";

for (let i = 0 ; i < items.length; i++){
    containerContent += `
    <div class="container-left">
        <img src="${items[i]}" alt="immagine-montagne-svizzera">
        <div class="sub-title">
            <h2>${title[i]}</h2>
            <h3>${text[i]}</h3>
        </div>
    </div>`
}
// fine aggiunta

const wrapper = document.querySelector("div.wrapper");
wrapper.innerHTML = containerContent;

// prendo il container left
const elementsContainerLeft = document.getElementsByClassName("container-left");
console.log(elementsContainerLeft);
// aggiungo una funzionalità al button up
const upButton = document.getElementsByClassName("button-up");
upButton.addEventListener('click', function(){

});
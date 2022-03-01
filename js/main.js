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
        <img src="${items[i]}" alt="random-image">
        <div class="sub-title">
            <h2>${title[i]}</h2>
            <h3>${text[i]}</h3>
        </div>
    </div>`
}
// fine aggiunta

const wrapper = document.querySelector("div.wrapper");
wrapper.innerHTML = containerContent;

// recupero bordo immagini
const borderOff = document.getElementsByClassName("border");

const containerLeft = document.getElementsByClassName("container-left");
containerLeft[0].classList.add("active");
borderOff[0].classList.add('active-border');
console.log(containerLeft);

let activeElement = 0;

// aggiungo una funzionalità al button-bottom
const downButton = document.getElementById("button-down");
downButton.addEventListener('click', function(){
    containerLeft[activeElement].classList.remove("active");
    borderOff[activeElement].classList.remove('active-border');
    activeElement ++ ;
    if (activeElement == 5){
        activeElement = 0;
    }
    containerLeft[activeElement].classList.add("active");
    borderOff[activeElement].classList.add('active-border');
});

// aggiungo una funzionalità al button-up
const upButton = document.getElementById("button-up");
upButton.addEventListener('click', function(){
    containerLeft[activeElement].classList.remove("active");
    borderOff[activeElement].classList.remove('active-border');
    activeElement -- ;
    if (activeElement == -1){
        activeElement = 4;
    }
    containerLeft[activeElement].classList.add("active");
    borderOff[activeElement].classList.add('active-border');
}); 
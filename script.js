// local reviews data
const reviews = [
    {
        id: 1,
        name: "kehinde marvellous odetayo",
        job: "corporate financial analyst",
        img: "./img/keh1.jpg",
        text: "Lorem ipsum dolor sit amet, pariatur suscipit consequatur veliusto veritatis.",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "chef",
        img: "./img/portfolio-item6.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam odio velit cumque harum doloremque veliusto veritatis.",
    },
    {
        id: 3,
        name: "sayo bayo",
        job: "artist",
        img: "./img/keh1.jpg",
        text: "Lorem ipsum dolor sit amet, veliusto veritatis.",
    },
    {
        id: 4,
        name: "tayo seyi",
        job: "curator",
        img: "./img/portfolio-item6.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam odio velit cumque harum doloremque pariatur suscipit consequatur veliusto veritatis.",
    }
];

//  select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
 
// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

// show person based on item

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev person

prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson(currentItem);
});

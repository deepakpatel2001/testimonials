const userImage = document.querySelector('.client-image');
const userName = document.querySelector('.user-name');
const work = document.querySelector('.profession');
const userBio = document.querySelector('.userBio');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const parentContainer = document.querySelector('.main-div');
const randomBtn = document.querySelector('button');

let userInfo = [
    {
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        userName: 'Susan',
        profession: 'WEB Developer',
        bio: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        userName: 'Anna Johnson',
        profession: 'WEB DESIGNER',
        bio: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        userName: 'Peter Jones',
        profession: 'INTERN',
        bio: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        userName: 'Bill Anderson',
        profession: 'THE BOSS',
        bio: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
    },
];

let currentIndex = 0;

window.addEventListener('DOMContentLoaded', () => {
    updateUser();
});

function updateUser() {
    userImage.src = userInfo[currentIndex].img;
    userName.textContent = userInfo[currentIndex].userName;
    work.textContent = userInfo[currentIndex].profession;
    userBio.textContent = userInfo[currentIndex].bio;
}

rightArrow.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > userInfo.length - 1) {
        currentIndex = 0;
    }
    updateUser();
});

leftArrow.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = userInfo.length - 1;
    }
    updateUser();
});

randomBtn.addEventListener('click', () => {
    const randomNumberIndex = Math.floor(Math.random() * userInfo.length);
    currentIndex = randomNumberIndex;
    console.log(randomNumberIndex);
    updateUser();
});

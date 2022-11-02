const images = ["img01.jpg", "img02.jpg", "img03.jpg"];

const randomImages = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement('img');
bgImg.src = `img/${randomImages}`;
document.body.appendChild(bgImg);
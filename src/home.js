import heroImg from './images/hero-image.jpg';

export default function loadHome() {
    const content = document.getElementById('content');

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    const textDiv = document.createElement('div');
    textDiv.classList.add('text');

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Sweet Haven Delights";

    const tagline = document.createElement('p');
    tagline.textContent = "Baked fresh daily with love, sweetness, and care – to lift your mood and brighten your day!";

    const description = document.createElement('p');
    description.textContent = "From delicate, colorful macarons to our signature fruit cake, every dessert is crafted with passion to bring comfort and joy. Whether you’re stopping by for a quick treat or savoring an afternoon with coffee and cake, Sweet Haven Delights is your happy place.";

    textDiv.appendChild(headline);
    textDiv.appendChild(tagline);
    textDiv.appendChild(description);

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');
    const image = document.createElement('img');
    image.classList.add('hero-img');
    image.src = heroImg;
    image.alt = "Hero Image";
    imageDiv.appendChild(image);

    homeContainer.appendChild(textDiv);
    homeContainer.appendChild(imageDiv);

    content.appendChild(homeContainer);
}
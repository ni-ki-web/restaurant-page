export default function loadAbout() {
    const content = document.getElementById('content');
    const aboutDiv = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = "Our Story";

    const para1 = document.createElement('p');
    para1.textContent = "Sweet Haven Delights started as a little home bakery with a big dream: to share the happiness of freshly baked desserts with our community. We specialize in pastries, cookies, and cakes that are made with care and inspired by both classic recipes and modern flavors.";

    const para2 = document.createElement('p');
    para2.textContent = "Every dessert is crafted by hand using quality ingredients — no shortcuts, just love and butter. Whether you’re here for a quick coffee and a macaron, or celebrating with a cake, we want you to feel right at home.";

    aboutDiv.appendChild(headline);
    aboutDiv.appendChild(para1);
    aboutDiv.appendChild(para2);

    content.appendChild(aboutDiv);
}
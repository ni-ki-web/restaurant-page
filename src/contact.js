export default function loadContact() {
    const content = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const headline = document.createElement('h1');
    headline.textContent = "Get in Touch";

    const img = document.createElement('div');
    img.classList.add('img-placeholder');
    img.textContent = "Cafe Image";

    const addressDiv = document.createElement('div');
    addressDiv.classList.add('contact-card');

    const address = document.createElement('p');
    address.textContent = "📍 123 Sweet Street, Dessert City";

    const phone = document.createElement('p');
    phone.textContent = "📞 09-123-4567";

    const email = document.createElement('p');
    email.textContent = "✉️ hello@sweethavendelights.com";

    addressDiv.appendChild(address);
    addressDiv.appendChild(phone);
    addressDiv.appendChild(email);

    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('contact-card');

    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = "Opening Hours";

    const hours = document.createElement('ul');
    hours.classList.add('hours');
    const schedule = [
        "Monday - Friday: 8AM - 7PM",
        "Saturday - Sunday: 9AM - 8PM",
    ];

    schedule.forEach(time => {
        const li = document.createElement('li');
        li.textContent = time;
        hours.appendChild(li);
    });

    hoursDiv.appendChild(hoursTitle);
    hoursDiv.appendChild(hours);

    const closing = document.createElement('p');
    closing.classList.add('closing-line');
    closing.textContent = "We'd love to see you! Stop by for coffee, cake, and a cozy chat.";

    contactDiv.appendChild(headline);
    contactDiv.appendChild(img);
    contactDiv.appendChild(addressDiv);
    contactDiv.appendChild(hoursDiv);
    contactDiv.appendChild(closing);

    content.appendChild(contactDiv);
}
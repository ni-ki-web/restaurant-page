import macaronImg from './images/macarons.jpg';
import eclairImg from './images/chocolate-eclairs.jpg';
import shortcakeImg from './images/strawberry-shortcake.jpg';
import cupcakeImg from './images/vanilla-cupcake.jpg';
import orangeDonutImg from './images/orange-donut.jpg';
import tartImg from './images/tart.jpg';
import hazelCupcakeImg from './images/hazelnut-cupcake.jpg';

export default function loadMenu() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');
    const menuItems = [
        {
        name: 'Rasberry Macarons',
        description: 'Delicate almond shells with a tangy raspberry buttercream filling.',
        img: macaronImg
        },
        {
        name: 'Chocolate Eclair',
        description: 'Crisp pastry filled with vanilla custard and topped with rich chocolate glaze.',
        img: eclairImg
        },
        {
        name: 'Strawberry Shortcake',
        description: 'Layers of fluffy sponge, whipped cream, and fresh strawberries.',
        img: shortcakeImg
        },
        {
        name: "Sunrise Delight",
        description: "A fluffy donut topped with a silky white chocolate Swiss icing, garnished with a fresh orange slice and a crisp wafer for the perfect crunch.",
        img: orangeDonutImg
        },
        {
        name: 'Fruit Cake Slice',
        description: 'Moist cake packed with dried fruits, nuts, and a hint of spice.',
        img: ''
        },
        {
        name: 'Vanilla Cupcake',
        description: 'Classic vanilla sponge with creamy buttercream frosting and sprinkles.',
        img: cupcakeImg
        },
        {
        name: "Hazelnut Crunch Cupcake",
        description: "A rich chocolate cupcake filled with smooth hazelnut cream, topped with silky chocolate frosting, a drizzle of Nutella, and a Ferrero Rocher for the ultimate crunch.",
        img: hazelCupcakeImg
        },
        {
        name: "Berry Bliss Tart",
        description: "Crisp mini tart filled with creamy custard and topped with fresh berries. Sweet, bright, and refreshing.",
        img: tartImg
        },
    ];
    menuItems.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('menu-card');

        if (item.img) {
            const img = document.createElement('img');
            img.src = item.img;
            img.alt = item.name;
            itemCard.appendChild(img);
        } else {
            const placeholderImg = document.createElement('div');
            placeholderImg.classList.add('img-placeholder');
            placeholderImg.textContent = item.name;
            itemCard.appendChild(placeholderImg);
        }

        const name = document.createElement('h2');
        name.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        itemCard.appendChild(name);
        itemCard.appendChild(description);

        menuGrid.appendChild(itemCard);
    });

    menuDiv.appendChild(headline);
    menuDiv.appendChild(menuGrid);

    content.appendChild(menuDiv);
}
// products.js

document.addEventListener('DOMContentLoaded', () => {
    loadUser();
    loadProducts();
});

function loadUser() {
    const username = localStorage.getItem('username') || 'User';
    document.getElementById('user-name').innerText = `Hello, ${username}`;
}

function loadProducts() {
    const products = [
        { name: "Sneaker 1", price: "$99.99", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/395829/01/sv01/fnd/IND/fmt/png/Carina-Slim-Perf-Women's-Sneakers" },
        { name: "Sneaker 2", price: "$89.99", image: "https://example.com/sneaker2.jpg" },
        { name: "Sneaker 3", price: "$79.99", image: "https://example.com/sneaker3.jpg" },
        { name: "Sneaker 4", price: "$69.99", image: "https://example.com/sneaker4.jpg" }
        // Add more products as needed
    ];

    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const h2 = document.createElement('h2');
        h2.textContent = product.name;

        const p = document.createElement('p');
        p.textContent = product.price;

        productCard.appendChild(img);
        productCard.appendChild(h2);
        productCard.appendChild(p);

        productList.appendChild(productCard);
    });
}

// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
];

// State for favorites
const favorites = [];

// Function to render product cards
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button onclick="addToFavorites(${product.id})">Add to Favorites</button>
        `;
        productList.appendChild(productCard);
    });
}

// Function to render favorite items
function renderFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';

    favorites.forEach(item => {
        const favoriteItem = document.createElement('div');
        favoriteItem.className = 'favorite-item';
        favoriteItem.innerHTML = `
            <span>${item.name} - $${item.price}</span>
            <button onclick="removeFromFavorites(${item.id})">Remove from Favorites</button>
        `;
        favoritesList.appendChild(favoriteItem);
    });
}

// Function to add a product to favorites
function addToFavorites(productId) {
    const product = products.find(p => p.id === productId);
    if (product && !favorites.some(f => f.id === productId)) {
        favorites.push(product);
        renderFavorites();
    }
}

// Function to remove a product from favorites
function removeFromFavorites(productId) {
    const index = favorites.findIndex(f => f.id === productId);
    if (index > -1) {
        favorites.splice(index, 1);
        renderFavorites();
    }
}

// Initial rendering of products
renderProducts();

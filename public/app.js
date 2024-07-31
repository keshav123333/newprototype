async function addProduct() {
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const imageUrl = document.getElementById('product-image-url').value;

    const product = { name, price, imageUrl };

    const response = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });

    const newProduct = await response.json();
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-image-url').value = '';
    renderProducts();
}

async function renderProducts() {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();

    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-item';
        div.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
        `;
        productList.appendChild(div);
    });
}

renderProducts();

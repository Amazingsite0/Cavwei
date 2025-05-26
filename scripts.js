document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { name: "Pantene Pro-V", price: 1200, date: "2024-06-27", image: "images/Pantene Pro-V.jpg" },
        { name: "Head And Shoulders", price: 1400, date: "2024-06-28", image: "images/Head And Shoulders.jpg" },
        { name: "Herbal Essences", price: 1300, date: "2024-06-29", image: "images/Herbal Essences.jpeg" },
        { name: "Veet Body Remover Strips", price: 380, date: "2024-06-28", image: "images/Veet Body Remover Strips.jpeg" },
        { name: "Listerine Fresh Brust", price: 800, date: "2024-06-28", image: "images/Listerine Fresh Brust.jpeg" },
        { name: "Neutrogena Soap", price: 550, date: "2024-06-28", image: "images/Neutrogena Soap.jpeg" },
        { name: "Neutrogena Soap", price: 550, date: "2024-06-28", image: "images/Neutrogena Soap1.jpeg" },
        { name: "Nivea Lotion", price: 950, date: "2024-06-28", image: "images/Nivea Lotion.jpeg" },
        { name: "Oil Spice Pure Sports", price: 1400, date: "2024-06-28", image: "images/Oil Spice Pure Sports.jpeg" },
        { name: "Olay double Action", price: 1300, date: "2024-06-28", image: "images/Olay double Action.jpeg" },
        { name: "Olay Night Cream", price: 1700, date: "2024-06-28", image: "images/Olay Night Cream.jpeg" },
        { name: "Pears Oil-Clear & Glow", price: 450, date: "2024-06-28", image: "images/Pears Oil-Clear & Glow.jpeg" },
        { name: "She Shower Gel", price: 1300, date: "2024-06-28", image: "images/She Shower Gel.jpeg" },
        { name: "Sunsilk Hair Oil", price: 1200, date: "2024-06-28", image: "images/Sunsilk Hair Oil.jpeg" },
        { name: "Veet Body Remover Strips New", price: 550, date: "2024-06-28", image: "images/Veet Body Remover Strips New.jpeg" },
        { name: "Olay Beauty Fluid", price: 1500, date: "2024-06-28", image: "images/Olay Beauty Fluid.jpeg" },
        { name: "Nivea Baby Cream 30 ml", price: 210, date: "2024-06-28", image: "images/Nivea Baby Cream.jpeg" },
        { name: "SafeGuard", price: 550, date: "2024-06-28", image: "images/SafeGuard.jpeg" }
    ];

    const productContainer = document.getElementById('product-container');
    const cartItems = [];
    let cartTotal = 0;

    function renderProducts() {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Best Price.</p>
                <p class="price">Pkr: ${product.price}</p>
                <button class="button add-to-cart">Add to Cart</button>
            `;
            productContainer.appendChild(productElement);
        });
    }

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productName = e.target.parentElement.querySelector('h3').innerText;
            const productPrice = parseFloat(e.target.parentElement.querySelector('.price').innerText.replace('Pkr: ', ''));
            cartItems.push({ name: productName, price: productPrice });
            cartTotal += productPrice;
            updateCart();
        }
    });

    function updateCart() {
        document.getElementById('cart-count').innerText = cartItems.length;
        document.getElementById('cart-total').innerText = `Pkr ${cartTotal}`;
    }

    document.getElementById('cart-icon').addEventListener('click', function () {
        document.getElementById('cart-modal').style.display = 'block';
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerText = `${item.name} - Pkr ${item.price}`;
            cartItemsContainer.appendChild(itemElement);
        });
    });

    document.querySelector('.close').addEventListener('click', function () {
        document.getElementById('cart-modal').style.display = 'none';
    });

    document.getElementById('theme-toggle').addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });

    document.getElementById('checkout-button').addEventListener('click', function () {
        const orderSummary = cartItems.map(item => `${item.name} - Pkr ${item.price}`).join('%0A');
        const whatsappUrl = `https://wa.me/923353466636?text=Order%20Summary:%0A${orderSummary}%0ATotal:%20Pkr%20${cartTotal}`;
        window.location.href = whatsappUrl;
    });

    renderProducts();
});

document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { name: "Pantene Pro-V", price: 1200, date: "2024-06-27", image: "images/Pantene%20Pro-V.jpg" },
        { name: "Head And Shoulders", price: 1400, date: "2024-06-28", image: "images/Head%20And%20Shoulders.jpg" },
        { name: "Herbal Essences", price: 1300, date: "2024-06-29", image: "images/Herbal%20Essences.jpeg" },
        { name: "Veet Body Remover Strips", price: 380, date: "2024-06-28", image: "images/Veet%20Body%20Remover%20Strips.jpeg" },
        { name: "Listerine Fresh Brust", price: 800, date: "2024-06-28", image: "images/Listerine%20Fresh%20Brust.jpeg" },
        { name: "Neutrogena Soap", price: 550, date: "2024-06-28", image: "images/Neutrogena%20Soap.jpeg" },
        { name: "Neutrogena Soap", price: 550, date: "2024-06-28", image: "images/Neutrogena%20Soap1.jpeg" },
        { name: "Nivea Lotion", price: 950, date: "2024-06-28", image: "images/Nivea%20Lotion.jpeg" },
        { name: "Oil Spice Pure Sports", price: 1400, date: "2024-06-28", image: "images/Oil%20Spice%20Pure%20Sports.jpeg" },
        { name: "Olay double Action", price: 1300, date: "2024-06-28", image: "images/Olay%20double%20Action.jpeg" },
        { name: "Olay Night Cream", price: 1700, date: "2024-06-28", image: "images/Olay%20Night%20Cream.jpeg" },
        { name: "Pears Oil-Clear & Glow", price: 450, date: "2024-06-28", image: "images/Pears%20Oil-Clear%20&%20Glow.jpeg" },
        { name: "She Shower Gel", price: 1300, date: "2024-06-28", image: "images/She%20Shower%20Gel.jpeg" },
        { name: "Sunsilk Hair Oil", price: 1200, date: "2024-06-28", image: "images/Sunsilk%20Hair%20Oil.jpeg" },
        { name: "Veet Body Remover Strips New", price: 550, date: "2024-06-28", image: "images/Veet%20Body%20Remover%20Strips%20New.jpeg" },
        { name: "Olay Beauty Fluid", price: 1500, date: "2024-06-28", image: "images/Olay%20Beauty%20Fluid.jpeg" },
        { name: "Nivea Baby Cream 30 ml", price: 210, date: "2024-06-28", image: "images/Nivea%20Baby%20Cream.jpeg" },
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
                <img src="${encodeURI(product.image)}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Best Price.</p>
                <p class="price">Pkr: ${product.price}</p>
                <button class="button add-to-cart">Add to Cart</button>
            `;
            productContainer.appendChild(productElement);
        });
    }

    // Delegated event listener for Add to Cart
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productElement = e.target.closest('.product');
            const productName = productElement.querySelector('h3').innerText;
            const productPrice = parseFloat(productElement.querySelector('.price').innerText.replace('Pkr: ', ''));
            cartItems.push({ name: productName, price: productPrice });
            cartTotal += productPrice;
            updateCart();
        }
    });

    function updateCart() {
        document.getElementById('cart-count').innerText = cartItems.length;
        document.getElementById('cart-total').innerText = `Pkr ${cartTotal}`;
    }

    // Show Cart Modal
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function () {
            const cartModal = document.getElementById('cart-modal');
            cartModal.style.display = 'block';

            const cartItemsContainer = document.getElementById('cart-items');
            cartItemsContainer.innerHTML = '';
            cartItems.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.innerText = `${item.name} - Pkr ${item.price}`;
                cartItemsContainer.appendChild(itemElement);
            });
        });
    }

    // Close Cart Modal
    const closeModal = document.querySelector('.close');
    if (closeModal) {
        closeModal.addEventListener('click', function () {
            document.getElementById('cart-modal').style.display = 'none';
        });
    }

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Checkout - WhatsApp
    const checkoutBtn = document.getElementById('checkout-button');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function () {
            if (cartItems.length === 0) {
                alert("Your cart is empty!");
                return;
            }

            const orderSummary = cartItems.map(item => `${item.name} - Pkr ${item.price}`).join('%0A');
            const whatsappUrl = `https://wa.me/923309240007?text=Order%20Summary:%0A${orderSummary}%0ATotal:%20Pkr%20${cartTotal}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    renderProducts();
});

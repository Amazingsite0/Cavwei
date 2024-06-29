document.addEventListener('DOMContentLoaded', function () {
    const products = Array.from(document.querySelectorAll('.product'));

    // WhatsApp redirection
    products.forEach(product => {
        const button = product.querySelector('.button');
        const productName = product.querySelector('h3').innerText;
        const productPrice = product.querySelector('.price').innerText;

        button.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const message = `I am interested in ${productName} which costs ${productPrice}`;
            const phoneNumber = '923309240007'; // Replace with the actual phone number
            const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            window.location.href = whatsappURL;
        });
    });

    // Search functionality
    document.getElementById('search').addEventListener('input', function (e) {
        const searchQuery = e.target.value.toLowerCase();
        products.forEach(product => {
            const productName = product.dataset.name.toLowerCase();
            if (productName.includes(searchQuery)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

    // Sort functionality
    document.getElementById('sort').addEventListener('change', function () {
        const sortOption = this.value;
        let sortedProducts = [];

        if (sortOption === 'newest') {
            sortedProducts = products.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
        } else if (sortOption === 'oldest') {
            sortedProducts = products.sort((a, b) => new Date(a.dataset.date) - new Date(b.dataset.date));
        } else if (sortOption === 'lowToHigh') {
            sortedProducts = products.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
        } else if (sortOption === 'highToLow') {
            sortedProducts = products.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
        }

        const productContainer = document.getElementById('product-container');
        productContainer.innerHTML = '';
        sortedProducts.forEach(product => {
            productContainer.appendChild(product);
        });
    });
});

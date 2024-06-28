document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const button = product.querySelector('.button');
        const productName = product.querySelector('h3').innerText;
        const productPrice = product.querySelector('.price').innerText;

        button.addEventListener('click', function () {
            const message = `I am interested in ${productName} which costs ${productPrice}`;
            const phoneNumber = 'YOUR_PHONE_NUMBER';
            const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            window.location.href = whatsappURL;
        });
    });
});

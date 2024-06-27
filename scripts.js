/* General Styles */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
}

header {
    background-color: #007bff;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

header h1 {
    margin: 0;
    font-size: 2.5rem;
}

.container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

/* Product Styles */
.product-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.product {
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s;
    max-width: 300px;
    text-align: center;
}

.product:hover {
    transform: translateY(-10px);
}

.product img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.product h3 {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: #333;
}

.product p {
    font-size: 1rem;
    color: #666;
    padding: 0 1rem;
}

.product .price {
    font-size: 1.25rem;
    color: #28a745;
    font-weight: bold;
    margin: 1rem 0;
}

.product button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
}

.product button:hover {
    background-color: #0056b3;
}

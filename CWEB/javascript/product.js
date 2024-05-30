document.addEventListener("DOMContentLoaded", function() {
    const products = {
        "1": {
            "name": "Opulent Satin Gown",
            "price": "$1999",
            "description": "Elegant and timeless satin dress, perfect for special occasions.",
            "images": [
                "img/products/product-1/img1.jpg",
                "img/products/product-1/img2.jpg",
                "img/products/product-1/img3.jpg"
            ],
            "sizes": ["S", "M", "L", "XL"],
            "extraDetails": "Crafted from luxurious satin fabric, this dress features a flattering silhouette and exquisite detailing."
        },
        "2": {
            "name": "Platinum Grey Hoodie",
            "price": "$989",
            "description": "Comfortable and stylish grey hoodie for casual wear.",
            "images": [
                "img/products/product-2/img1.jpg",
                "img/products/product-2/img2.jpg",
                "img/products/product-2/img3.jpg"
            ],
            "sizes": ["S", "M", "L"],
            "extraDetails": "Made from premium materials, this hoodie offers both warmth and style, making it a must-have for any wardrobe."
        },
        "3": {
            "name": "Eclipse Sunglasses",
            "price": "$1849",
            "description": "Luxurious sunglasses with a modern design.",
            "images": [
                "img/products/product-3/img1.jpg",
                "img/products/product-3/img2.jpg",
                "img/products/product-3/img3.jpg"
            ],
            "sizes": ["One"],
            "extraDetails": "Featuring high-quality lenses and a sleek frame, these sunglasses are the perfect accessory for any outfit."
        },
        "4": {
            "name": "Rose Quartz Blazer",
            "price": "$2549",
            "description": "Chic and sophisticated pink blazer, ideal for both professional and casual settings.",
            "images": [
                "img/products/product-4/img1.jpg",
                "img/products/product-4/img2.jpg",
                "img/products/product-4/img3.jpg"
            ],
            "sizes": ["XS", "S", "M", "L"],
            "extraDetails": "This blazer is tailored to perfection, offering a refined look with its vibrant color and impeccable fit."
        },
    };
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');

    if (productId && products[productId]) {
        const product = products[productId];
        document.getElementById("productName").textContent = product.name;
        document.getElementById("productPrice").textContent = product.price;
        document.getElementById("productDescription").textContent = product.description;
        document.getElementById("extraDetails").textContent = product.extraDetails;
        const carouselInner = document.getElementById("carouselInner");
        carouselInner.innerHTML = '';
        product.images.forEach((image, index) => {
            const div = document.createElement("div");
            div.classList.add("carousel-item");
            if (index === 0) {
                div.classList.add("active");
            }
            const img = document.createElement("img");
            img.src = image;
            img.classList.add("d-block", "w-100");
            div.appendChild(img);
            carouselInner.appendChild(div);
        });
        const sizeOptions = document.getElementById("sizeOptions");
        sizeOptions.innerHTML = '';
        product.sizes.forEach(size => {
            const button = document.createElement("button");
            button.classList.add("btn", "btn-outline-dark");
            button.textContent = size;
            sizeOptions.appendChild(button);
        });
    } else {
        console.error("Product not found");
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header-nav');

menuToggle.addEventListener('click', () => {
    headerNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

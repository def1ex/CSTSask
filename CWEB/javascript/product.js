document.addEventListener("DOMContentLoaded", function() {
    // Product data
    const products = {
        "1": {
            "name": "Product 1",
            "price": "$40",
            "description": "One line description of Product 1.",
            "images": [
                "img/products/product-1/img1.jpg",
                "img/products/product-1/img2.jpg",
                "img/products/product-1/img3.jpg"
            ],
            "sizes": ["S", "M", "L", "XL"],
            "extraDetails": "Additional information about Product 1."
        },
        "2": {
            "name": "Product 2",
            "price": "$50",
            "description": "One line description of Product 2.",
            "images": [
                "img/products/product-2/img1.jpg",
                "img/products/product-2/img2.jpg",
                "img/products/product-2/img3.jpg"
            ],
            "sizes": ["S", "M", "L"],
            "extraDetails": "Additional information about Product 2."
        }
        // Add more products as needed
    };

    // Fetch product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');

    // Load product data based on productId
    if (productId && products[productId]) {
        const product = products[productId];
        document.getElementById("productName").textContent = product.name;
        document.getElementById("productPrice").textContent = product.price;
        document.getElementById("productDescription").textContent = product.description;
        document.getElementById("extraDetails").textContent = product.extraDetails;

        // Load carousel images
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

        // Load size options
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

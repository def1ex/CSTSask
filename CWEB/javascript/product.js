document.addEventListener('DOMContentLoaded', function() {
    fetch('products.json') // Adjust the path as needed
        .then(response => response.json())
        .then(data => {
            // Populate product details
            document.getElementById('productName').textContent = data.product.name;
            document.getElementById('productPrice').textContent = data.product.price;
            document.getElementById('productDescription').textContent = data.product.description;

            // Populate product sizes
            const sizeOptions = document.getElementById('productSizes');
            data.product.sizes.forEach(size => {
                const button = document.createElement('button');
                button.className = 'btn btn-outline-dark';
                button.textContent = size;
                sizeOptions.appendChild(button);
            });

            // Populate carousel images
            const carouselInner = document.getElementById('carouselInner');
            data.product.images.forEach((image, index) => {
                const carouselItem = document.createElement('div');
                carouselItem.className = index === 0 ? 'carousel-item active' : 'carousel-item';
                carouselItem.innerHTML = `<img src="${image}" class="d-block w-100" alt="Product Image ${index + 1}">`;
                carouselInner.appendChild(carouselItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}); 
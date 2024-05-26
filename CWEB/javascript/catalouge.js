// JavaScript for image change on hover
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const originalImg = card.querySelector('.product-image');
        const hoverImgSrc = originalImg.getAttribute('data-hover-src'); // assuming data-hover-src attribute is used for hover image

        // Preload hover image for smoother transition
        const hoverImg = new Image();
        hoverImg.src = hoverImgSrc;

        card.addEventListener('mouseenter', function() {
            originalImg.src = hoverImgSrc;
        });

        card.addEventListener('mouseleave', function() {
            originalImg.src = originalImg.getAttribute('src');
        });
    });
});

const blogPosts = [
    {
        title: "A Symphony of Style: Unveiling the Latest Fashion Trends",
        content: "Step into a world where elegance meets innovation as we unravel the canvas of this season's fashion. From the graceful sway of dresses to the subtle allure of accessories, embark on a journey to redefine your personal style. Let each garment be a brushstroke, painting a portrait of sophistication and individuality."
    },
    {
        title: "Icons Reimagined: Luxe Brands Redefining Fashion's Landscape",
        content: "Enter the realm of opulence where tradition dances with avant-garde. We unveil the vanguards of luxury fashion, seamlessly blending timeless sophistication with daring innovation. Elevate your wardrobe with pieces that transcend trends and carve out your unique narrative. Let fashion be your canvas, and luxury your palette."
    },
    {
        title: "Wanderlust Chronicles: The Artistry of Luxury Travel",
        content: "Join us on an odyssey of extravagance as we navigate through the realms of luxury travel. From the sun-kissed shores of exotic resorts to the seclusion of private islands, immerse yourself in a tapestry of unparalleled indulgence. Let every journey be a symphony of splendor, curated exclusively for the discerning traveler. Embrace wanderlust, and let every destination be a masterpiece waiting to be explored."
    },
    {
        title: "Fashion with a Conscience: Embracing Ethical Elegance",
        content: "Uncover the harmony between style and sustainability as we delve into the ethos of ethical fashion. Embrace a wardrobe that echoes your values without compromising on flair. Discover the artisans and visionaries reshaping the industry, one eco-friendly ensemble at a time. Let your fashion choices reflect not just your elegance, but also your commitment to a better world."
    },
    {
        title: "Adornments Unveiled: The Art of Accessorizing with Panache",
        content: "Unlock the secrets of sartorial finesse as we unravel the enchanting world of accessories. From the bold strokes of statement jewelry to the understated elegance of handcrafted handbags, master the art of accentuation. Let every accessory be a brushstroke, painting a masterpiece of personal style. Embrace the power of adornment, and let your accessories speak volumes about your personality and taste."
    }
];

function displayBlogPosts() {
    const blogContent = document.querySelector('.blog-content');
    blogPosts.forEach((post, index) => {
        const blogPostDiv = document.createElement('div');
        blogPostDiv.classList.add('blog-post');
        blogPostDiv.id = `blog${index + 1}`;

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        blogPostDiv.appendChild(titleElement);
        blogPostDiv.appendChild(contentElement);

        blogContent.appendChild(blogPostDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayBlogPosts();

    const menuToggle = document.querySelector('.menu-toggle');
    const headerNav = document.querySelector('.header-nav');

    menuToggle.addEventListener('click', () => {
        headerNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});

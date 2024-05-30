function initMap() {
    var location = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
const menuToggle = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header-nav');

menuToggle.addEventListener('click', () => {
    headerNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
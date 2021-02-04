// Handle toggling the navbar on small screens
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Handle subscribing
const handleSubscribe = () => {
    alert("Thanks for subscribing");
}
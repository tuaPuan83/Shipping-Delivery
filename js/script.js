const sidebar = document.querySelector('.sidebar'); 
const navLinks = document.querySelectorAll('.navbar__link');

function showSidebar() {
    sidebar.classList.toggle("active");
}

function closeSidebar() {
    sidebar.classList.remove("active");
}

navLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});





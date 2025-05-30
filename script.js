document.querySelectorAll('.transition-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = href;
        }, 2000);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});




document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.tNav a');
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("current");
        }
    });
});




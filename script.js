// Contoh JavaScript untuk interaksi dinamis (opsional)
// Misalnya, Anda bisa menambahkan efek scroll-smooth untuk menu navbar.

const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(link => {
    link.addEventListener("click", scrollToSection);
});

function scrollToSection(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scroll({
        top: targetSection.offsetTop,
        behavior: "smooth"
    });
}

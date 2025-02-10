document.addEventListener("DOMContentLoaded", () => {
    // Animate input field when focused
    const searchInput = document.querySelector("main input");
    searchInput.addEventListener("focus", () => {
        searchInput.style.transform = "scale(1.05)";
        searchInput.style.transition = "0.3s";
    });

    searchInput.addEventListener("blur", () => {
        searchInput.style.transform = "scale(1)";
    });

    // Smooth hover effect on navigation links
    const navLinks = document.querySelectorAll("header ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.letterSpacing = "1px";
            link.style.transition = "0.3s";
        });

        link.addEventListener("mouseout", () => {
            link.style.letterSpacing = "0px";
        });
    });
});

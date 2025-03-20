document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links using event delegation
    document.querySelector("nav ul").addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        }
    });

    // Highlight active section in navbar on scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            if (window.pageYOffset >= section.offsetTop - 60) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href").substring(1) === currentSection);
        });
    });

    // CV Download Button Functionality
    const cvDownloadBtn = document.querySelector(".download-cv .btn");
    if (cvDownloadBtn) {
        cvDownloadBtn.addEventListener("click", function (event) {
            event.preventDefault();
            const cvUrl = "Rueben_Charis_S_Resume.pdf"; // Ensure file exists
            const a = document.createElement("a");
            a.href = cvUrl;
            a.download = "Rueben_Charis_S_Resume.pdf";
            document.body.appendChild(a);
            a.click();
            a.remove();
        });

        // Add smooth hover and click animations using class toggling
        ["mouseenter", "mouseleave", "mousedown", "mouseup"].forEach(event => {
            cvDownloadBtn.addEventListener(event, () => {
                cvDownloadBtn.classList.toggle(event);
            });
        });
    }

    // Socials Section Animation using CSS class toggling
    document.querySelectorAll(".social-icon").forEach(icon => {
        ["mouseenter", "mouseleave"].forEach(event => {
            icon.addEventListener(event, () => icon.classList.toggle("hover"));
        });
    });
});

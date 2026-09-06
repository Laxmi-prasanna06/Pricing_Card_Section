```javascript
/* ================= PRICING TOGGLE ================= */

const billingToggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".amount");

billingToggle.addEventListener("change", function () {

    prices.forEach(function (price) {

        if (billingToggle.checked) {

            price.textContent =
                price.getAttribute("data-yearly");

        } else {

            price.textContent =
                price.getAttribute("data-monthly");
        }

    });

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* ================= SCROLL ANIMATION ================= */

const cards = document.querySelectorAll(
    ".course-card, .pricing-card, .instructor, .benefit"
);

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});
```

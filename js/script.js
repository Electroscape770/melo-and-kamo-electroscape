/* =========================================================
   MELO & KAMO ELECTROSCAPE
   WEBSITE JAVASCRIPT
   ========================================================= */


/* =========================================================
   GALLERY FILTERS
   ========================================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        galleryItems.forEach(function(item) {

            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});


/* =========================================================
   LIGHTBOX
   ========================================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.querySelector(".lightbox-close");
const previousButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");
const galleryImages = document.querySelectorAll(".gallery-item img");

let currentImage = 0;


/* OPEN IMAGE */

galleryImages.forEach(function(image, index) {

    image.addEventListener("click", function(event) {

        event.stopPropagation();

        currentImage = index;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* SHOW IMAGE */

function showImage(index) {

    if (index < 0) {
        index = galleryImages.length - 1;
    }

    if (index >= galleryImages.length) {
        index = 0;
    }

    currentImage = index;

    lightboxImage.src = galleryImages[currentImage].src;
    lightboxImage.alt = galleryImages[currentImage].alt;

}


/* NEXT */

if (nextButton) {

    nextButton.addEventListener("click", function(event) {

        event.stopPropagation();

        showImage(currentImage + 1);

    });

}


/* PREVIOUS */

if (previousButton) {

    previousButton.addEventListener("click", function(event) {

        event.stopPropagation();

        showImage(currentImage - 1);

    });

}


/* CLOSE */

if (closeButton) {

    closeButton.addEventListener("click", function(event) {

        event.stopPropagation();

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    });

}


/* CLOSE BY BACKGROUND */

if (lightbox) {

    lightbox.addEventListener("click", function(event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

}


/* KEYBOARD CONTROLS */

document.addEventListener("keydown", function(event) {

    if (!lightbox || !lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

    if (event.key === "ArrowRight") {
        showImage(currentImage + 1);
    }

    if (event.key === "ArrowLeft") {
        showImage(currentImage - 1);
    }

});


/* =========================================================
   REQUEST A QUOTE → WHATSAPP
   ========================================================= */

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

    quoteForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const service = document.getElementById("service").value;
        const location = document.getElementById("location").value;
        const message = document.getElementById("message").value;

        const whatsappMessage =
            "Hello Melo & Kamo Electroscape!\n\n" +
            "I would like to request a quotation.\n\n" +
            "Name: " + name + "\n" +
            "Phone / WhatsApp: " + phone + "\n" +
            "Email: " + (email || "Not provided") + "\n" +
            "Service Required: " + service + "\n" +
            "Location / Area: " + location + "\n\n" +
            "Details:\n" +
            message + "\n\n" +
            "Thank you.";

        const whatsappURL =
            "https://wa.me/27678030619?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");

    });

}

/* =========================================================
   WEBSITE LOADED
   ========================================================= */

console.log("QUOTE FORM SCRIPT LOADED");
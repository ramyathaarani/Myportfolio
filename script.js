// ===================================
// 1. MOBILE NAVIGATION
// ===================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close the mobile menu after clicking a link

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// ===================================
// 2. ACTIVE NAVIGATION LINK
// ===================================

const sections = document.querySelectorAll("main section[id]");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                navItems.forEach(function (link) {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },

    {
        rootMargin: "-30% 0px -55% 0px"
    }

);

sections.forEach(function (section) {

    observer.observe(section);

});


// ===================================
// 3. PROJECT INFORMATION MODAL
// ===================================

const projectButtons = document.querySelectorAll(".project-button");

const projectModal = document.getElementById("projectModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalClose = document.getElementById("modalClose");

const modalOkay = document.getElementById("modalOkay");


const projectDetails = {

    "Recipe Finder": {
        description:
            "A recipe discovery website concept that helps users explore meal ideas, discover ingredients, and find inspiration for their next dish."
    },

    "Study Planner": {
        description:
            "A student productivity website concept for organizing assignments, planning revision sessions, and keeping track of study tasks."
    },

    "Travel Journal": {
        description:
            "A travel journal website concept for saving favourite destinations, organizing trip memories, and discovering beautiful places."
    }

};


function openProjectModal(projectName) {

    modalTitle.textContent = projectName;

    modalDescription.textContent =
        projectDetails[projectName].description;

    projectModal.classList.add("show");

    projectModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    modalClose.focus();

}


function closeProjectModal() {

    projectModal.classList.remove("show");

    projectModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const projectName = button.dataset.project;

        openProjectModal(projectName);

    });

});


modalClose.addEventListener("click", closeProjectModal);

modalOkay.addEventListener("click", closeProjectModal);


// Close the modal when clicking outside the box

projectModal.addEventListener("click", function (event) {

    if (event.target === projectModal) {

        closeProjectModal();

    }

});


// Close the modal using the Escape key

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeProjectModal();

    }

});


// ===================================
// 4. CONTACT FORM
// ===================================

const contactForm = document.getElementById("contactForm");

const formStatus = document.getElementById("formStatus");


contactForm.addEventListener("submit", function (event) {

    // Prevent the page from reloading

    event.preventDefault();

    const userName =
        document.getElementById("userName").value.trim();

    const userEmail =
        document.getElementById("userEmail").value.trim();

    const userMessage =
        document.getElementById("userMessage").value.trim();


    // Check that the fields contain text

    if (!userName || !userEmail || !userMessage) {

        formStatus.textContent =
            "Please fill in all the fields.";

        return;

    }


    // Display a success message

    formStatus.textContent =
        "Thank you, " + userName +
        "! Your message has been entered successfully. " +
        "This demo form does not send emails yet.";


    // Clear the form

    contactForm.reset();

});


// ===================================
// 5. CONSOLE MESSAGE
// ===================================

console.log("Welcome to Ramya's Portfolio! 🌿");
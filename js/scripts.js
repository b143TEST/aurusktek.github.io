
// This file is intentionally blank
// Use this file to add JavaScript to your project

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")
const submitButton =  document.getElementById("submitButton")


const goToTop = () => {
    debugger;
    document.body.scrollIntoView({
        behavior: "smooth",
    });
};


backToTopButton.addEventListener("click", goToTop)

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden")
    } else {
        backToTopButton.classList.add("hidden")
    }

})

const submitDetails = () => {
    debugger;
    alert("We have received your details and appreciate you reaching out to us!")
};


submitButton.addEventListener("click", submitDetails)



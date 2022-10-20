/* You're going to have to move this to script tags to make it work on google sites. */

const studentAdder = document.getElementById("studentAdder");

studentAdder.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Form submitted");
});
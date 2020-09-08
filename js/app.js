const checkbox = document.querySelector(".socialDash__checkbox");

checkbox.addEventListener("change", function() {
    document.body.classList.toggle('dark');
});
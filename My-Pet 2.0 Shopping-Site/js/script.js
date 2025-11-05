document.querySelector("#menu").addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("selected")
});

document.querySelector("#lengthSlider").addEventListener("input", function () {
    document.querySelector(`#${this.dataset.counter}`).innerHTML = `${this.value} - ${+this.value + 10}`
})
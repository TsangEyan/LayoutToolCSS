let labels = document.getElementsByClassName("label-container")
let buttons = document.getElementsByClassName("button")
for (button of buttons) {
    button.addEventListener('click', showReview);
}
function showReview() {
    for (label of labels) {
        label.classList.remove("label-active")
    }
    let i = Array.from(buttons).indexOf(event.target)
    labels[i].classList.add("label-active")

}


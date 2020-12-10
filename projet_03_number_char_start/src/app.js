import { onInput, onSubmit} from "./core/utils.js"

const input = document.querySelector(".phrase");
const form = document.querySelector("form");

document.body.onload = () => {
    input.addEventListener("input", onInput);
    form.addEventListener("submit", onSubmit);
}

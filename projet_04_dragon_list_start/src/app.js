import "./style.scss"
import {addDragons, addCount, onSubmit, initForm} from "./core/utils.js";

const form = document.querySelector("form")

const listen = () => (new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(form.addEventListener("submit", onSubmit));
        }, 500);
    })
);

document.body.onload = () => {
    initForm()
    addCount();
    addDragons();
    form.addEventListener("submit",onSubmit)

}

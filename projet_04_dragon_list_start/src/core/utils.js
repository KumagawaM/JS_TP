import dragons from './dragon.js';
import forces from "./force.js";

export {addDragons, addCount, onSubmit, initForm}

const counter = document.querySelector('#count');

const initForm = () => {

    const input_name = document.querySelector(".name");
    const input_element = document.querySelector(".element");
    const input_force = document.querySelector(".force");

    input_name.value = null;
    input_element.value = null;
    input_force.value = null;

}

const addDragons = () => {

    const list = document.querySelector('.dragons');
    for(const dragon of dragons.names){

        const forceById = forces.find(a => a.id === dragon.id);
        const average = forceById.notes.reduce((a,b) =>(a + b)) / forceById.notes.length;

        const li = document.createElement("li");
        li.innerHTML =  `Name : ${dragon.name}, Element: ${dragon?.element ? dragon.element : undefined}`;
        list.appendChild(li);

        const ul =document.createElement("ul");
        const li2 = document.createElement('li');

        li2.innerText = `Force: ${average}`;
        ul.appendChild(li2);
        list.appendChild(ul);
    }
}

const addCount = () => {
    counter.innerHTML = dragons.count;


}

const onSubmit = (e) => {
    e.preventDefault();

    const input_name = document.querySelector(".name");
    const input_element = document.querySelector(".element");
    const input_force = document.querySelector(".force");


    const ul = document.querySelector(".dragons");
    const li = document.createElement("li");

    const ul2 =document.createElement("ul");
    const li2 = document.createElement('li');

    counter.innerHTML++;

    li.innerText = `Name: ${input_name.value}, Element: ${input_element.value ? input_element.value : undefined}`;
    ul.appendChild(li);

    li2.innerText = `Force: ${input_force.value ? input_force.value : undefined}`;
    ul2.appendChild(li2);
    ul.appendChild(ul2);

    initForm();
}

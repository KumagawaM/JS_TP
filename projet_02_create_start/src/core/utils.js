const createElement = () => {
    console.log("fonction createElement");

    const list = document.querySelector('.numbers');
    console.log(list);
    for (let i = 4; i <= 20; i++){
        const li = document.createElement('li');
        const span = "<span>"+i+"</span>"

        li.innerHTML = `${String.fromCharCode(63+i)}= ${span}`
        list.appendChild(li)
    }
}

export {createElement}

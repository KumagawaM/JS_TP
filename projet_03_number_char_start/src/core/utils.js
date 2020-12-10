export {onInput, onSubmit}

const onInput = (e) => {
    const value = e.target.value;
    let acc = ""
    console.log(value);

    for( const word of value.split(" ")) acc+= word.length + " ";

    document.querySelector(".result").innerText = acc;
};

const onSubmit = (e) => {
    e.preventDefault();

    const input = document.querySelector(".phrase");
    const words = input.value
    let acc = ""

    for( const word of words.split(" ")){
        acc+= word.length + " ";

    }
    console.log(acc);
    document.querySelector('.message').innerText = words
    document.querySelector(".numberWord").innerText = acc || "Erreur";
    input.value = null;
}

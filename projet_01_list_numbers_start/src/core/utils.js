const SelectAllLi = () => {
    let els = document.querySelectorAll('li');
    console.log(els);
}

const SelectPermutation  = () => {
    let els = document.querySelectorAll('li');

    [ els[0].querySelector('span').textContent,
        els[1].querySelector('span').textContent, els[2].querySelector('span').textContent] =
        [els[2].querySelector('span').innerHTML,
            els[0].querySelector('span').innerHTML, els[1].querySelector('span').innerHTML]

}

const SelectPermutationFor = () => {
    console.log("Function SelectPermutationFor");

    let els = document.querySelectorAll('li');
    let tmp = els[0].querySelector('span').textContent;
    let size = els.length -1;

    for(let i = 0; i < size; i++){
        els[i].querySelector('span').innerHTML = els[size-i].querySelector('span').textContent;
    }
    els[size].querySelector('span').innerHTML = tmp;

}

export {SelectAllLi, SelectPermutation, SelectPermutationFor};


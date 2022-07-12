function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const blueButton = document.getElementById('make-blue-button');
// blueButton.onclick = makeBlueButton;
// function makeBlueButton() {
//     document.body.style.backgroundColor = 'blue';
// }

blueButton.onclick = () => document.body.style.backgroundColor = 'blue';

const goldenButton = document.getElementById('golden-button');
goldenButton.addEventListener('click' , () => {
    document.body.style.backgroundColor = 'goldenrod';
})

document.getElementById('update-me').addEventListener('click', () =>{
    const text = document.getElementById('put-text');
    const p = document.createElement('p');
    p.innerText = text.value;
    const section = document.getElementById('section');
    section.appendChild(p)
})
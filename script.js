const ohpEL = window.document.getElementById("ohp");
const ex1El = window.document.getElementById("weight1");

const exFunc = () => {
    ex1El.value = ohpEL.value * 0.75
}

exFunc();

ohpEL.addEventListener("input", () => {
    ex1El.value = ohpEL.value * 0.75
})
const targuno = document.querySelector(".rating");
const targdos = document.querySelector(".thank");
const numeros = document.querySelector(".rating-num");
const boton = document.querySelector(".rating-submit");
const num = document.querySelector(".result-num");
const error = document.getElementById("error");

let numSelect = null;

numeros.addEventListener("click", (e) => {
	numSelect = e.target.innerText;
	num.innerText = numSelect;
	console.log(numSelect);
});

boton.addEventListener("click", () => {
	if (numSelect !== null && numSelect >= 1 && numSelect <= 5) {
		targuno.style.display = "none";
		targdos.style.display = "flex";
	} else {
		targuno.style.height = "368px";
		error.style.display = "block";
	}
});

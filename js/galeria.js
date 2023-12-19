const miniaturas = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img")
const botones = document.querySelectorAll(".modal button");
let rutas = [];
let direccion = 0;

miniaturas.forEach((miniatura, indice) =>{

	rutas.push(miniatura.getAttribute("href"));//aqui las recopilo

	miniatura.addEventListener("click", evento => {
		evento.preventDefault();
		direccion = indice;
		imgModal.setAttribute("src", rutas[direccion]);
		modal.classList.add("visible");
		
	});
});

modal.addEventListener("click", function(){
	this.classList.remove("visible");
})

botones.forEach((boton, indice) => {
	boton.addEventListener("click", evento =>{
		evento.stopPropagation();
		
		if(direccion == 0){
			direccion = direccion > 0 ? direccion < direccion - 1 : rutas.length - 1;
		}
		else{
			direccion = direccion < direccion.length - 1 ? direccion + 1 : 0;

		}
		imgModal.setAttribute("src",rutas[direccion]);
	});
});
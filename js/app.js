/*
 * Archivo principal de funcionalidad de JS
 */

 (function galeriaWork(){
 	var imagen = Array.from(document.getElementsByClassName("img-work"));
 	var imagenModal = document.getElementById("flex-work-modal");
 	var workModal, close, img;

 	imagen.forEach(function(caja){
 		caja.addEventListener("click", function(){
 			imagenModal.innerHTML = "";
 			workModal = document.createElement("div");
 			workModal.classList.add("modal-work");
 			workModal.innerHTML = caja.innerHTML;
 			
 			imagenModal.appendChild(workModal);
 			imagenModal.classList.remove("hide");
 			
 			close = document.createElement("div");
 			close.classList.add("close");
 			
 			img = document.createElement("img");
 			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
 			
 			close.appendChild(img);
 			imagenModal.appendChild(close);
 			
 			close.addEventListener("click", function(){
 				imagenModal.classList.add("hide");
 			});
 		});
 	});

 })();
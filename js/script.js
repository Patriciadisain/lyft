
// VARIABLES GLOBALES
var contID = 0; 
var idTarjetas = 100;
var idBTN = 500;
// Función de inicio
$(document).ready(function() {
	$('.agregar').click(function() {
        $('.nuevaLista').append('<input type="text" placeholder="Escribe el título de tu lista" class="agregarNuevo '+contID+' col-sm-2" id="nuevaLista"> <button class="btn-success agregarNuevo col-sm-1" onclick="agregarLista('+contID+')">Guardar</button>');
   		contID++;
   	});
});
// Postear el valor del input, y añadir botón para agregar tarjetas
var contenedorPost = document.getElementById('contenedorPost');
function agregarLista (numId){
	$('#nuevaLista').addClass('hidden');
	$('.agregarNuevo').addClass('hidden');		
	var valorInput = document.getElementsByClassName(numId)[0].value;
	var post = document.createElement('div');
	var parrafoLista = document.createElement('p');
	var  titulo = document.createTextNode(valorInput);
	var botonTarjeta = document.createElement('button');
	var nodoBoton = document.createTextNode('Añadir tarjeta');
		post.setAttribute("class", "divPost col-sm-2");
		post.setAttribute("id",numId);
	var botonID = idBTN++;
		botonTarjeta.setAttribute("id",botonID);
		parrafoLista.setAttribute("class", "titulo-lista text-center");
		botonTarjeta.setAttribute("class", "btn btn-añadir");
		botonTarjeta.setAttribute("onclick", "mostarTextarea("+numId+","+botonID+");");
	// Relacionar
		parrafoLista.appendChild(titulo);
		contenedorPost.appendChild(post);
		botonTarjeta.appendChild(nodoBoton);
		post.appendChild(parrafoLista);
		post.appendChild(botonTarjeta);	
// Para mostrar a un costado
	$('.nuevaLista').append('<input type="text" placeholder="Escribe el título de tu lista" class="col-sm-2 agregarNuevo '+contID+'" id="nuevaLista"> <button class="btn-success agregarNuevo col-sm-1" onclick="agregarLista('+contID+')">Guardar</button>');
   		contID++;
   	};
// Función para que se creen las tarjetas
function mostarTextarea (nuevoId, boton){		
	var inputTarjeta = document.createElement('textarea');
		inputTarjeta.setAttribute("class", "classInput");
		inputTarjeta.setAttribute("type", " text");
		inputTarjeta.setAttribute("placeholder", "Escribe tus tarjetas");
		idTarjetas++;
		inputTarjeta.setAttribute("id", idTarjetas);	
	var contenedorLista = document.getElementById(nuevoId);
	var añadirTarjeta = document.getElementById(boton);
		contenedorLista.insertBefore(inputTarjeta,añadirTarjeta);		
};

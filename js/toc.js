/*
 * Tabla de contenido v1.0.0
 * Developed by FramberTech
 * Copyright 2023
 * License Mit
*/
// Function auto invocada 
(function (){
	// Obtener el contenedor de la tabla de contenido
	const tocContainer = document.querySelector('.container-toc');

	// Obtener todos los encabezados dentro del contenedor
	const headings = tocContainer.querySelectorAll('h1, h2, h3, h4, h5, h6');

	// Crear la tabla de contenido
	const tocList = document.createElement('ul');
	headings.forEach((heading) => {
  		// Crear un elemento de lista para cada encabezado
  		const listItem = document.createElement('li');

  		// Crear un enlace para el encabezado
  		const link = document.createElement('a');
  		link.textContent = heading.textContent;
  		link.setAttribute('href', `#${heading.id}`);

  		// Agregar el enlace al elemento de lista
  		listItem.appendChild(link);

  		// Agregar el elemento de lista a la tabla de contenido
  		tocList.appendChild(listItem);
	});

	// Agregar la tabla de contenido a la página
	const tocApp = document.querySelector('.toc-app');
	tocApp.appendChild(tocList);
})();

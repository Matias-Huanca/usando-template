function mostrarResultados(results) {
  // Agarramos el contenedor de los resultados
  const contenedor = document.querySelector(".results");

  //Agarramos el template del html
  const template = document.querySelector("#results-item-template");
  // console.log("este es el temple", template);

  // Crear tantos template necesites ..
  for (const element of results) {
    //Agarramos un elemento de ese template / Title
    const titleTemple = template.content.querySelector(
      ".results-item-content-title",
    );

    // Cambiamos el contenido de un elemento del template
    console.log("Titulo de temple:", titleTemple);
    titleTemple.textContent = "Hola Soy el temple Cambiado";

    // Lo mismo para condition
    const conditionTemple = template.content.querySelector(
      ".results-item-condition",
    );
    conditionTemple.textContent = "Hola Soy cambio en Condicion";

    const clone = document.importNode(template.content, true);

    //Le agregamos el template al contenedor
    contenedor.appendChild(clone);
  }
}

function main() {
  //Extraemos el elemento form del html
  const formEl = document.querySelector(".search-form");
  console.log(formEl);

  //Escuchamos los datos ingresados de la pagina con submit
  formEl.addEventListener("submit", (e) => {
    // Cancelamos la devolucion por defecto
    e.preventDefault();

    //Formulario
    const formulario = e.target;

    //Agarramos el dato ingresado en el input
    const palabraABuscar = formulario.buscar.value;
    console.log(palabraABuscar);

    //Consumo de una API
    // fetch("https://api.nationalize.io?name=" + palabraABuscar).then(
    //   (response) => {
    //     response.json().then((data) => console.log(data));
    //   },
    // );
  });

  //Datos estaticos para probar el uso de template y importNode
  mostrarResultados([1, 2, 3, 4]);
}
main();

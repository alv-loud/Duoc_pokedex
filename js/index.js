
tinymce.init({
    selector: '#descripcion-txt',
    height: 500,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
  const pokemones = [] // defini un arreglo   +++
  const cargarTabla =()=>{
    //una referencia a la tabla // osea el id= tbody-pokemon que esta en el body de la tabla
    let tbody = document.querySelector("#tbody-pokemon")

    // por cada pokemmon generar una fila
    //ANTES DEL FOR SIEMPRE SE TIENE QUE LIMPIAR LA TABLA PARA QUE NO SE REPITAN LOS DATOS
    tbody.innerHTML = ""; 
    for(let i=0; i< pokemones.length; ++i){
      let p = pokemones [i];
      //crea el elemento que no existe pero no lo agrega a la pagina solo sirve para llamar a la tabla
      let tr = document.createElement("tr");
      // por cada atributo del pokemon(nombre,tipo,etc) generar una celda
      let tdNombre = document.createElement("td");
      //TODO: mostrar el icono no el numero
      let tdTipo = document.createElement("td");
      let tdDescripcion = document.createElement("td");
      let tdNro =document.createElement("td");
      let tdAcciones =document.createElement("td");

      tdNombre.innerText = p.nombre;
      tdTipo.innerText = p.tipo;
      //TODO
      tdDescripcion.innerHTML = p.descripcion
      tdNro.innerText = i +1;
      //TODO
      tr.appendChild(tdNro);
      tr.appendChild(tdNombre);
      tr.appendChild(tdTipo);
      tr.appendChild(tdDescripcion);
      tr.appendChild(tdAcciones);

      tbody.appendChild(tr);

      console.log(p);
    }
    // Agregar la fila a la tabla (manipulando el DOM)


  };

  document.querySelector("#pokemon-form").addEventListener('submit',(e)=>{
      e.preventDefault();
      let nombre = document.querySelector("#nombre-txt").value;
      let descripcion = tinymce.get("descripcion-txt").getContent();
      let legendario = document.querySelector("#legendario-si").checked;
      let tipo = document.querySelector("#tipo-select").value

      let pokemon = {};
      pokemon.nombre = nombre;
      pokemon.descripcion = descripcion;
      pokemon.legendario = legendario;
      pokemon.tipo = tipo;
      pokemones.push(pokemon);
      console.log(pokemon); 
      cargarTabla(); 
      Swal.fire("Pokemon registrado!!");


  }); 
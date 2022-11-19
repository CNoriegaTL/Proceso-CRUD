// PROCESOS CRUD

let row = null;

function Enviar(){ // FUNCION DE ENVIO MAPEADA CON ONCLICK EN HTML
 let ingresoDatos = traerDatos();
 let leerDatos = datosdeLocalStorage(ingresoDatos);
 if(ingresoDatos == false) {
  mensaje.innerHTML = `<h3 style="color: orange;">Por favor ingresar datos!</h3>`;
 }
 else{
  if (row == null) {
   insertar(leerDatos);
   mensaje.innerHTML = `<h3 style="color: green;">Registro realizado!</h3>`;
 } else {
  actualizar();
  mensaje.innerHTML = `<h3 style="color: green">Datos Actualizados!</h3>`;
 }
 }
 
document.getElementById("formulario").reset();
}

// C - Create ("Crear") - TRAER DATOS DEL FORMULARIO
function traerDatos() {
 let nombre1 = document.getElementById("nombre").value;
 let acomp1 = document.getElementById("acomp").value;
 let alim1 = document.getElementById("alim").value;
 
 let arr = [nombre1, acomp1, alim1];

 if( arr.includes(""))
 {return false}
 else {
  return arr;
 }
}

// R - Read ("Leer")
// DATOS DE LOCAL STORAGE
function datosdeLocalStorage(ingresoDatos) {

 let n = localStorage.setItem("Nombre", ingresoDatos[0])
 let a = localStorage.setItem("Acompañantes", ingresoDatos[1])
 let r = localStorage.setItem("Alimentos", ingresoDatos[2])

// TRAER VALORES DE TABLA LOCAL

let n1 =  localStorage.getItem("Nombre", n);
let a1 = localStorage.getItem("Acompañantes", a);
let r1 = localStorage.getItem("Alimentos", r);

let arr = [n1, a1 , r1];
return arr;
}

// INSERTAR ACCIONES DE EDITAR Y ELIMINAR LUEGO DE INGRESAR DATOS EN LA TABLA
function insertar(leerDatos) {
let row = table.insertRow();
row.insertCell(0).innerHTML = leerDatos[0];
row.insertCell(1).innerHTML = leerDatos[1];
row.insertCell(2).innerHTML = leerDatos[2];
row.insertCell(3).innerHTML = `<button onclick = edit(this)>Editar</button>
                              <button onclick = eliminar(this)>Eliminar</button>`;
}

// FUNCION Y BOTON DE EDITAR

function edit(ed) {
 row = ed.parentElement.parentElement;
 document.getElementById("nombre").value = row.cells[0].innerHTML;
 document.getElementById("acomp").value = row.cells[1].innerHTML;
 document.getElementById("alim").value = row.cells[2].innerHTML;

}

// U - Update ("Actualizar")

function actualizar() {
 row.cells[0].innerHTML = document.getElementById("nombre").value;
 row.cells[1].innerHTML = document.getElementById("acomp").value;
 row.cells[2].innerHTML = document.getElementById("alim").value;
 row = null;
}

// D - Delete ("Borrar")

function eliminar(elim) {
 let pregunta = confirm("Estas seguro que quieres eliminar el registro?")
 if (pregunta == true) {
  row = elim.parentElement.parentElement;
  document.getElementById("table").deleteRow(row.rowIndex);
 }

}
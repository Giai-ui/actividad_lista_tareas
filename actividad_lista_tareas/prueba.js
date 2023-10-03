document.getElementById("agregar").addEventListener("click",agregarTarea);
function agregartarea(){
    const nuevaTarea=document.getElementById("nuevatarea");
    const listaTareas=document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTarea.value.trim();
    if (nuevaTareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = nuevaTareaTexto;
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "delete";
        botonEliminar.id="eliminar";
        botonEliminar.onclick = function() {
        listaTareas.removeChild(nuevaTarea);
        };
        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        nuevatarea.value = "";
        }
}
document.getElementById("listaTareas").addEventListener("click",
    function(event) {
    if (event.target.tagName === "LI") {
    marcarCompletada(event.target);
    }}
);
function marcarCompletada(tarea) {
    tarea.classList.toggle("completed");
}
function mostrarcompletadas(){
    const tareas = document.querySelectorAll(li);
    tareas.forEach(tareas=>{
        if (tareas.classList.contains("completed")) {
            tareas.style.display="block";
            } else {
            tareas.style.display="none";
            }
    })
}
function mostrarpendientes(){
    const tareas = document.querySelectorAll(li);
    tareas.forEach(tareas=>{
        if (!tareas.classList.contains("completed")) {
            tareas.style.display="block";
            } else {
            tareas.style.display="none";
            }
    })
}
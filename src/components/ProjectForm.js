import React from 'react'

function ProjectForm(){
  return (
<>
    <div className='formproyect'>
        <h2>SECCIÓN DE PROYECTOS</h2>
        <div class="campo">
            <label for="nombre-proyecto">Escriba el nombre del proyecto:</label>
            <input type="text" id="nombre-proyecto" name="nombre-proyecto"></input>
        </div>
        <div class="campo">
            <label for="descripcion-proyecto">Descripción del proyecto:</label>
            <textarea id="descripcion-proyecto" name="descripcion-proyecto"></textarea>
        </div>
        <div class="campo">
            <label for="tecnologias-usadas">Tecnologías usadas:</label>
            <input type="text" id="tecnologias-usadas" name="tecnologias-usadas"/>
        </div>
        






    </div>
</>
  )
}
export default ProjectForm;
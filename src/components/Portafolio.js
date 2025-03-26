import React, { useState } from "react";
import ProjectForm from "./ProjectForm"; // Asegúrate de que la ruta sea correcta
import SkillsForm from "./SkillsForm"; // Asegúrate de que la ruta sea correcta

function Portafolio() {
  const [recitext, setRecitext] = useState(""); // Estado para la descripción del proyecto

  // Función para actualizar el estado de la descripción
  const handleTextChange = (textarea) => {
    setRecitext(textarea);
  };

  console.log("handleTextChange:", handleTextChange); // Verifica la función antes de pasarla

  return (
    <div>
      <h1>Portafolio Profesional</h1>

      {/* Componente de formulario de proyecto */}
      <ProjectForm onTextChange={handleTextChange} />

      {/* Muestra la descripción del proyecto */}
      <p>Descripción Del Proyecto: {recitext}</p>

      {/* Componente de habilidades */}
      <SkillsForm />
    </div>
  );
}

export default Portafolio;



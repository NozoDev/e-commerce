import { useState } from "react";

// Hook personalizado useForm
export const useForm = (initialState, onSubmitCallback) => {
  // Estado para mantener los datos del formulario
  const [formData, setFormData] = useState(initialState);

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target; // Desestructurando el nombre y valor del campo que cambió
    // Actualizando el estado del formulario con el nuevo valor
    setFormData({
      ...formData, // Mantener los valores actuales
      [name]: value, // Actualizar solo el campo que cambió
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar la recarga de la página al enviar el formulario
    onSubmitCallback(formData); // Llamar a la función de callback con los datos del formulario
    handleReset(); // Restablecer el formulario después del envío
  };

  // Función para restablecer los campos del formulario a su estado inicial
  const handleReset = () => {
    setFormData(initialState); // Establecer el estado del formulario al estado inicial
  };

  // Retornar el estado y las funciones de manejo del formulario
  return {
    formData, // Los datos actuales del formulario
    handleChange, // Función para manejar cambios en los campos del formulario
    handleSubmit, // Función para manejar el envío del formulario
    handleReset, // Función para restablecer el formulario
  };
};

import imagen1 from "../images/img1.jpg";
import { useForm } from "../hooks/useForm";

export const Singnup = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const onSubmit = (formData) => {
    console.log("formulario enviado", formData);
  };

  const { formData, handleChange, handleReset, handleSubmit } = useForm(
    initialState,
    onSubmit
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="hidden md:block">
        <img
          className="h-full w-full object-cover"
          src={imagen1}
          alt="shopping"
        />
      </div>

      <div className="flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          onReset={handleReset}
          className="bg-white shadow-md rounded-lg p-8 max-w-md w-full"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Crear Cuenta</h2>
          <label className="block mb-4">
            <span className="text-gray-700">Correo Electrónico</span>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo"
              required
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Contraseña</span>
            <input
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Ingresa tu contraseña"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Registrarse
          </button>
          <p className="mt-4 text-center text-gray-600">
            ¿Ya tienes una cuenta?{" "}
            <a href="#" className="text-indigo-500 hover:text-indigo-600">
              Inicia sesión
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

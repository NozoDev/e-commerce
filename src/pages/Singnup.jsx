import React from "react";

export const Singnup = () => {
  return (
    <div className="border grid grid-cols-2 w-full justify-center items-center min-h-screen">
      <div className="border border-sky-400 h-full"></div>
      <div className="border border-red-400 h-full">
        <form>
          <input type="text" placeholder="Ingresa Correo" />
        </form>
      </div>
    </div>
  );
};

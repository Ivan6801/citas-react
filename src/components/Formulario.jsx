import React from "react";

export function Formulario() {
  return (
    <>
      <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-bold text-3xl text-center">
          Seguimiento Pacientes
        </h2>
        <p className="text-lg mt-5 text-center">
          Añade Pacuentes y {""}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form className="bg-white shadow-md rounded-lg py-10 px-5">
          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="mascota"
            >
              Nombre Mascota
            </label>
            <input
              id="mascota"
              type="text"
              name=""
              placeholder="Nombre de la Mascota"
              className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="propietario"
            >
              Nombre del Propietario
            </label>
            <input
              id="propietario"
              type="text"
              name=""
              placeholder="Nombre de Propietario"
              className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="propietario"
              type="email"
              name=""
              placeholder="Email"
              className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="alta"
            >
              Alta
            </label>
            <input
              id="alta"
              type="date"
              name=""
              className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-700 uppercase font-bold"
              htmlFor="sintomas"
            >
              Síntomas
            </label>
            <textarea
              id="sintomas"
              name=""
              className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los Síntomas"
            />
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full text-white p-3 uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value="Agregar Paciente"
          />
        </form>
      </div>
    </>
  );
}

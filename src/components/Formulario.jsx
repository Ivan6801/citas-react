import React, { useState, useEffect } from "react";
import { Error } from "./Error";

export function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando Formulario");

    // Validación del Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay Al Menos un campo vacio");
      setError(true);
      return;
    }
    setError(false);

    // Objecto de Paciente
    const objectoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId(),
    };

    if (paciente.id) {
      // Editando el registro
      objectoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objectoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Nuevo registro
      objectoPaciente.id = generarId();
      setPacientes([...pacientes, objectoPaciente]);
    }
    // Reiniciar el form
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

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
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5"
        >
          {error && <Error>Todos los campos son obligatorios</Error>}
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
              className="border-2 w-full mt-2 p-2 placeholder-gray-500 rounded-md"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
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
              className="border-2 w-full mt-2 p-2 placeholder-gray-500 rounded-md"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
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
              className="border-2 w-full mt-2 p-2 placeholder-gray-500 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              className="border-2 w-full mt-2 p-2 placeholder-gray-500 rounded-md"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
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
              className="border-2 w-full mt-2 p-2 placeholder-gray-500 rounded-md"
              placeholder="Describe los Síntomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full text-white p-3 uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          />
        </form>
      </div>
    </>
  );
}

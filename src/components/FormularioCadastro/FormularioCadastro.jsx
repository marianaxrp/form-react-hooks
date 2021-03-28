import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ onSubmit, validarCPF }) {
  return (
    <>
      <DadosPessoais onSubmit={onSubmit} validarCPF={validarCPF} />
      <DadosUsuario />
      <DadosEntrega />
    </>
  );
}

export default FormularioCadastro;

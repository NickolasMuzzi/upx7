import React from "react";
import styled from "styled-components";
import Input from "../components/Input";
import { Form, Formik, FormikValues } from "formik";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { createBatch } from "../services/batch";
import { toast } from "react-toastify";
type RegisterBatchPageProps = {
  className?: string;
};

const RegisterBatchPage = ({ className }: RegisterBatchPageProps) => {
  const navigate = useNavigate();
  if (!localStorage.getItem("loggedIn")) {
    return <div>Você não tem permissão para acecessar essa pagina</div>;
  }
  const create = (val: FormikValues) => {
    for (let d of Object.keys(val)) {
      if (!val[d] || val[d] === undefined || val[d] === null) {
        toast.error(`Preencha o campo ${d}`);
        return;
      }
    }
    createBatch({ batch: val }).then((res) =>
      toast.success("Espaço adicionado com sucesso")
    );
    setTimeout(() => {
      navigate("/dashboard");
      return;
    }, 800);
  };
  return (
    <div className={className}>
      <div className="container">
        <div className="header">
          <img src={logo} alt="Green Friend Logo" className="logo" />
        </div>
        <h1>Cadastro de Espaço</h1>
        <Formik onSubmit={(val) => create(val)} initialValues={{}}>
          {(formik) => (
            <Form className="form">
              <Input label="Endereco:" type="text" name="adress" required />
              <Input
                label="Área do terreno:"
                type="number"
                min={1}
                name="area"
                required
              />
              <Input label="Descrição:" name="description" required />
              <div className="buttons">
                <button type="submit">Cadastrar</button>
                <button type="button" onClick={() => navigate("/dashboard")}>
                  Voltar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default styled(RegisterBatchPage)`
  .header {
    background-color: #044e07;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-container .logo,
  .header .logo {
    height: 100px;
  }

  /* Informação do usuário */
  .user-info {
    font-size: 18px;
  }

  /* Conteúdo principal */
  .main-content {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  }

  .option {
    text-align: center;
    text-decoration: none;
    color: inherit;
  }

  .option .icon {
    width: 100px;
    height: auto;
    margin-bottom: 10px;
  }

  .option h2 {
    margin: 0;
    font-size: 20px;
  }

  /* Container centralizado */
  .container {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
    margin: auto;
    margin-top: 50px;
  }

  .form label {
    display: block;
    margin-top: 10px;
    text-align: left;
  }

  .form textarea {
    resize: none;
    height: 100px;
  }

  .buttons {
    margin-top: 20px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }

  button[type="button"] {
    background-color: #f44336;
    margin-top: 10px;
  }

  button:hover {
    opacity: 0.9;
  }
`;

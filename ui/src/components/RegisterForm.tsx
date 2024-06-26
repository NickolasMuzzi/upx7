import { Form, Formik, FormikValues } from "formik";
import React from "react";
import styled from "styled-components";
import Input from "./Input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
type RegisterFormProps = {
  className?: string;
  personType?: string | boolean;
  createPerson?: any;
  createCompany?: any;
};

const RegisterForm = ({ ...props }: RegisterFormProps) => {
  const navigate = useNavigate();
  const create = (val: FormikValues) => {
    if (Object.keys(val).length === 0) {
      toast.error("Os campos devem ser preenchidos.");
      return;
    }
    if (val?.password !== val?.confirm_password) {
      toast.error("As senhas estão diferentes.");
      return;
    } else {
      for (let d of Object.keys(val)) {
        if (!val[d] || val[d] === undefined || val[d] === null) {
          toast.error(`Preencha o campo ${d}`);
          return;
        }
      }
    }
    if (props.personType === "person") {
      delete val.confirm_password;
      props.createPerson({ user: val }).then((res: any) => navigate("/login"));
    } else if (props.personType === "company") {
      delete val.confirm_password;
      val["role"] = 0;
      props
        .createCompany({ company: val })
        .then((res: any) => navigate("/login"));
    }
  };
  return (
    <div className={props.className}>
      <Formik
        className={props.className}
        initialValues={{}}
        onSubmit={(values) => create(values)}
      >
        {() => (
          <Form className="form">
            <Input label="Nome" placeholder="Nome" name="username" />
            <Input label="E-mail" placeholder="E-mail" name="email" />
            <Input label="Telefone" placeholder="Telefone" name="cellphone" />
            {props.personType === "company" ? (
              <Input label="CNPJ" placeholder="CNPJ" name="cnpj" />
            ) : (
              <Input label="CPF" placeholder="CPF" name="cpf" />
            )}
            <Input
              type="password"
              label="Senha"
              placeholder="Senha"
              name="password"
            />
            <Input
              type="password"
              label="Copnfirmar Senha"
              placeholder="Confirmar Senha"
              name="confirm_password"
            />
            <div className="button">
              <button type="submit">Cadastrar</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default styled(RegisterForm)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form {
    padding: 24px;
    width: 50%;
    height: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50px 50px;
    background: #ffffff;
    box-shadow: 5px 5px 10px #ebebeb, -5px -5px 10px #ffffff;
    border-radius: 20px;
    .button {
      display: flex;
      justify-content: center;
      grid-column: span 2;
      button {
        width: 150px;
        height: 40px;
        color: #ffff;
        background-color: #628662;
        border-radius: 4px;
        border: 0px;
        cursor: pointer;
        &:hover {
          background-color: #3e553e;
        }
      }
    }
  }
`;

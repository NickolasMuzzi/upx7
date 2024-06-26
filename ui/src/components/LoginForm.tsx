import { Form, Formik, FormikValues } from "formik";
import React from "react";
import styled from "styled-components";
import Input from "./Input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
type LoginFormProps = {
  className?: string;
  personType?: string | boolean;
  loginPerson?: any;
  loginCompany?: any;
};

const LoginForm = ({ ...props }: LoginFormProps) => {
  const navigate = useNavigate();
  const create = (val: FormikValues) => {
    for (let d of Object.keys(val)) {
      if (!val[d] || val[d] === undefined || val[d] === null) {
        toast.error(`Preencha o campo ${d}`);
        return;
      }
    }
    if (props.personType === "person") {
      props
        .loginPerson({ password: val?.password, email: val?.email })
        .then((res: any) => {
          if (res.exists) {
            localStorage.setItem("loggedIn", res.user?.username);
            localStorage.setItem("email", res.user?.email);
            navigate("/dashboard");
          } else {
            toast.error("E-mail ou senha incorretos");
          }
        });
    } else if (props.personType === "company") {
      props
        .loginCompany({ password: val?.password, email: val?.email })
        .then((res: any) => {
          if (res.exists) {
            localStorage.setItem("loggedIn", res.company?.username);
            localStorage.setItem("email", res.user?.email);

            navigate("/dashboard");
          } else {
            toast.error("E-mail ou senha incorretos");
          }
        });
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
            <Input label="E-mail" placeholder="E-mail" name="email" />
            <Input
              type="password"
              label="Senha"
              placeholder="Senha"
              name="password"
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

export default styled(LoginForm)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form {
    padding: 24px;
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { Form, Formik, FormikValues } from "formik";
type VerifyDiscountPageProps = {
  className?: string;
};

const VerifyDiscountPage = ({ className }: VerifyDiscountPageProps) => {
  const [discount, setDiscount] = useState({
    irpj: 0,
    csll: 0,
    icms: 0,
    iptu: 0,
    iss: 0,
  });
  const navigate = useNavigate();
  const calcDiscount = (formikValues: FormikValues) => {
    const finalCalc = {
      irpj: formikValues?.irpj * (formikValues?.qtd_espacos * 100),
      csll: formikValues?.csll * (formikValues?.qtd_espacos * 100),
      icms: formikValues?.icms * (formikValues?.qtd_espacos * 100),
      iptu: formikValues?.iptu * (formikValues?.qtd_espacos * 100),
      iss: formikValues?.iss * (formikValues?.qtd_espacos * 100),
    };
    setDiscount(finalCalc);
    return;
  };
  if (!localStorage.getItem("loggedIn")) {
    return <div>Você não tem permissão para acecessar essa pagina</div>;
  }

  return (
    <div className={className}>
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="Green Friend Logo" className="logo" />
        </div>
        <div className="user-info">
          <span>Bem-vindo, {localStorage.getItem("loggedIn")}</span>
        </div>
      </div>
      <div className="main-content">
        <h1>Verificar meus descontos</h1>
        <div className="form">
          <Formik onSubmit={(val) => calcDiscount(val)} initialValues={{}}>
            {(formik) => (
              <Form>
                <Input
                  label="Quantidade de espaços em sua posse"
                  name="qtd_espacos"
                  type="number"
                  min={0}
                />
                <Input
                  label="Imposto de renda pessoa juridica"
                  name="irpj"
                  type="number"
                  min={0}
                />
                <Input
                  label="Contribuição social sobre lucro liquido"
                  name="csll"
                  type="number"
                  min={0}
                />
                <Input
                  label="Imposto sobre circulação de mercadorias e serviços"
                  name="icms"
                  type="number"
                  min={0}
                />
                <Input
                  label="Imposto predial e territorial urbano"
                  name="iptu"
                  type="number"
                  min={0}
                />
                <Input
                  label="Imposto sobre serviços"
                  name="iss"
                  type="number"
                  min={0}
                />
                <button type="submit">Calcular</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="result">
        <p>Valor após descontos: </p>
        <p>IRPJ: {discount.irpj}&nbsp;R$</p>
        <p>CSLL: {discount.csll}&nbsp;R$</p>
        <p>ICMS: {discount.icms}&nbsp;R$</p>
        <p>IPTU: {discount.iptu}&nbsp;R$</p>
        <p>ISS: {discount.iss}&nbsp;R$</p>
      </div>
    </div>
  );
};

export default styled(VerifyDiscountPage)`
  height: 70%;
  .header {
    background-color: #044e07;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-container .logo {
    height: 100px;
  }

  .user-info {
    font-size: 18px;
  }

  .main-content {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    .form {
      form {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        button {
          background-color: #4caf50;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
        }
        button:hover {
          opacity: 0.9;
        }
      }
      height: 100%;
    }
  }

  .option {
    text-align: center;
  }

  .option .icon {
    width: 100px;
    height: auto;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .option h2 {
    margin: 0;
    font-size: 20px;
  }
  .result {
    color: white;
    background-color: #4caf50;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    position: absolute;
    top: 40%;
    left: 40px;
    border-radius: 8px;
    p {
      width: 100%;
      text-align: center;
    }
  }
`;

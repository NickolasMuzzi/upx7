import React, { useState } from "react";
import styled from "styled-components";
import company from "../assets/company-svgrepo-com.svg";
import person from "../assets/person-holding-a-glass-of-milk-svgrepo-com.svg";
import logo from "../assets/logo.png";
import RegisterForm from "../components/RegisterForm";
import { createNewPerson } from "../services/user";
import { createNewCompany } from "../services/company";
type RegisterPageProps = {
  className?: string;
};

const RegisterPage = ({ ...props }: RegisterPageProps) => {
  const [personType, setPersonType] = useState<string | boolean>(false);
  return (
    <div className={props.className}>
      <div className="container">
        <img src={logo} alt="green friend" style={{ height: "200px" }} />
        <h1>Bem Vindo</h1>
        <h4>Você é uma Empresa ou uma Pessoa Física?</h4>
        <div
          className="choose-person-type"
          style={personType ? { display: "none" } : { display: "flex" }}
        >
          <div className="card" onClick={() => setPersonType("company")}>
            <div className="card-header">
              <h3 style={{ color: "#628662" }}>Empresa</h3>
            </div>
            <div className="card-body">
              <img src={company} alt="empresa" />
            </div>
          </div>
          <div className="card" onClick={() => setPersonType("person")}>
            <div className="card-header">
              <h3 style={{ color: "#628662" }}>Pessoa Física</h3>
            </div>
            <div className="card-body">
              <img src={person} alt="empresa" />
            </div>
          </div>
        </div>
        <div
          className="form-container"
          style={personType ? { display: "flex" } : { display: "none" }}
        >
          <RegisterForm
            createPerson={createNewPerson}
            createCompany={createNewCompany}
            personType={personType}
          />
        </div>
      </div>
    </div>
  );
};

export default styled(RegisterPage)`
  width: 100%;
  height: 100vh;
  background-color: #628662;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container {
    padding: 30px;
    width: 70%;
    height: 85%;
    background-color: #ffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .choose-person-type {
      width: 100%;
      height: 70%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      .card {
        padding: 15px;
        width: 40%;
        height: 90%;
        border-radius: 25px;
        background: #ffffff;
        box-shadow: 5px 5px 10px #e8e8e8, -5px -5px 10px #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        cursor: pointer;
        img {
          height: 250px;
        }
        &:hover {
          background: #ffffff;
          box-shadow: inset 10px 10px 20px #f2f2f2,
            inset -10px -10px 20px #ffffff;
        }
      }
    }
    .form-container {
      width: 100%;
      height: 70%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }
  }
`;

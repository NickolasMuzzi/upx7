import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import disponibilizar from "../assets/disponibilizar.png";
import meusEspacos from "../assets/meus-espacos.png";
import procurarEspacos from "../assets/procurar-espacos.png";
import discount from "../assets/discount-svgrepo-com (1).svg";
import info from "../assets/info-circle-svgrepo-com.svg"
import { useNavigate } from "react-router-dom";
type DashboardPageProps = {
  className?: string;
};

const DashboardPage = ({ className }: DashboardPageProps) => {
  const navigate = useNavigate();
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
        <div className="option" onClick={() => navigate("/disponibilizar")}>
          <img
            src={disponibilizar}
            alt="Disponibilizar Espaços"
            className="icon"
          />
          <h2>Disponibilizar Espaços</h2>
        </div>
        <div className="option" onClick={() => navigate("/meus-espacos")}>
          <img
            src={meusEspacos}
            alt="Meus Espaços Disponíveis"
            className="icon"
          />
          <h2>Meus Espaços Disponíveis</h2>
        </div>
        <div className="option" onClick={() => navigate("/procurar")}>
          <img
            src={procurarEspacos}
            alt="Procurar Espaços Disponíveis"
            className="icon"
          />
          <h2>Procurar Espaços Disponíveis</h2>
        </div>
        <div className="option" onClick={() => navigate("/verificar-desconto")}>
          <img src={discount} alt="Verificar meu desconto" className="icon" />
          <h2>Verificar meu desconto</h2>
        </div>
        <div className="option" onClick={() => navigate("/sobre")}>
          <img src={info} alt="Verificar meu desconto" className="icon" />
          <h2>Sobre isenção fiscal</h2>
        </div>
      </div>
    </div>
  );
};

export default styled(DashboardPage)`
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
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
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
`;

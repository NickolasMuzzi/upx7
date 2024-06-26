import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import icon from "../assets/add-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { findBatches } from "../services/batch";
import { toast } from "react-toastify";
type MyBatchesProps = {
  className?: string;
};

const MyBatches = ({ className }: MyBatchesProps) => {
  const [myBatches, setmyBatches] = useState<any>([]);

  useEffect(() => {
    if (myBatches?.length === 0) {
      findBatches().then((res) => {
        setmyBatches(res);
      });
    }
  });

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
        <h1>Meus Espaços Disponíveis</h1>
        <div className="panel">
          {myBatches?.length > 0 &&
            myBatches.map((batch: any, idx: number) => {
              return (
                <>
                  <div className="space-card">
                    <div className="align-card-title">
                      <h2>Espaço {idx + 1}</h2>
                    </div>

                    <p>
                      <strong>Endereço:</strong>
                      {batch?.adress || "--"}
                    </p>
                    <p>
                      <strong>Tamanho da Área:</strong> {batch?.area || "--"}
                    </p>
                    <p>
                      <strong>Email do Proprietário:</strong>{" "}
                      {batch?.ownerEmail || "--"}
                    </p>
                    <p>
                      <strong>Descrição:</strong> {batch?.description || "--"}
                    </p>
                  </div>
                </>
              );
            })}
        </div>
        <div className="action-buttons">
          <button onClick={() => navigate("/dashboard")}>Voltar</button>
          <button onClick={() => navigate("/procurar")}>
            Veja novos Espaços
          </button>
        </div>
      </div>
    </div>
  );
};

export default styled(MyBatches)`
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
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .main-content h1 {
    margin-bottom: 20px;
  }

  .panel {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
  .action-buttons {
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    button {
      background-color: #4caf50;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      width: 30%;
    }
    button:hover {
      opacity: 0.9;
    }
  }
  .space-card {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: left;
    word-break: break-all;
    white-space: normal;
    .align-card-title {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      img {
        position: relative;
        bottom: 20px;
        left: 20px;
        height: 40px;
        cursor: pointer;
      }
    }
  }

  .space-card h2 {
    margin-top: 0;
  }

  .space-card p {
    margin: 5px 0;
  }
`;

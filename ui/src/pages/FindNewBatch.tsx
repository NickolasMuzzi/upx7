import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import icon from "../assets/add-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { findOwnerlessBatches, addOwnerToBatch } from "../services/batch";
import { toast } from "react-toastify";
type FindNewBatchProps = {
  className?: string;
};

const FindNewBatch = ({ className }: FindNewBatchProps) => {
  const [availableBatches, setAvailableBatches] = useState<any>([]);

  useEffect(() => {
    if (availableBatches?.length === 0) {
      findOwnerlessBatches().then((res) => {
        setAvailableBatches(res);
      });
    }
  });
  const changeOwner = (id: string) => {
    addOwnerToBatch(
      {
        ownerEmail: localStorage.getItem("email"),
      },
      id
    ).then(() => toast.success("Espaço reservado com sucesso."));
    window.location.reload();
  };
  const navigate = useNavigate();
  if (!localStorage.getItem("loggedIn")) {
    return <div>Você não tem permissão para acecessar essa pagina</div>;
  }
  return (
    <div className={className}>
      <div className="header">
        <div className="logo-container">
          <img
            src={logo}
            alt="Green Friend Logo"
            className="logo"
            onClick={() => navigate("/dashboard")}
          />{" "}
        </div>
        <div className="user-info">
          <span>Bem-vindo, {localStorage.getItem("loggedIn")}</span>
        </div>
      </div>
      <div className="main-content">
        <h1>Procurar Espaços Disponíveis</h1>
        <div className="panel">
          {availableBatches?.length > 0 &&
            availableBatches.map((batch: any, idx: number) => {
              return (
                <>
                  <div className="space-card">
                    <div className="align-card-title">
                      <h2>Espaço {idx + 1}</h2>
                      <img
                        src={icon}
                        alt="Adicionar"
                        onClick={() => changeOwner(batch.id)}
                      />
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
          {availableBatches?.length === 0 && (
            <>
              <h3>Nenhum espaço disponível</h3>
              <button onClick={() => navigate("/meus-espacos")}>
                Veja seus Espaços
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default styled(FindNewBatch)`
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
    cursor: pointer;
  }

  .user-info {
    font-size: 18px;
  }

  /* Conteúdo principal */
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

  /* Painel de espaços */
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

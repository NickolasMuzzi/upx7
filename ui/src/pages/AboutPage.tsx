import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import disponibilizar from "../assets/disponibilizar.png";
import meusEspacos from "../assets/meus-espacos.png";
import procurarEspacos from "../assets/procurar-espacos.png";
import discount from "../assets/discount-svgrepo-com (1).svg";
import info from "../assets/info-circle-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
type AboutPageProps = {
  className?: string;
};

const AboutPage = ({ className }: AboutPageProps) => {
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
        <h3>Sobre isenção fiscal:</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). Where does it
          come from? Contrary to popular belief, Lorem Ipsum is not simply
          random text. It has roots in a piece of classical Latin literature
          from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
          on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
          a line in section 1.10.32. The standard chunk of Lorem Ipsum used
          since the 1500s is reproduced below for those interested. Sections
          1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
          also reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
        :
      </div>
    </div>
  );
};

export default styled(AboutPage)`
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
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    p {
      font-size: 16px;
      line-height: 24px;
      text-align: justify;
    }
  }
`;

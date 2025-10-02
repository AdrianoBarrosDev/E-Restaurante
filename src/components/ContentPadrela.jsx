import React, { useRef } from "react";
import styled from "styled-components";

const DivHead = styled.div`
  background-color: #FFF8E0;

  .decoracao-semicirculo {
    position: absolute;
    margin-top: -8vw;
  }

  .semicirculo-img {
    width: 7vw;
    min-width: 40px;
  }

  .decoracao-linhas {
    position: absolute;
    right: 0vw;
    margin-top: 1vw;
  }

  .group-88-img {
    width: 45vw;
    min-width: 250px;
    height: 1vw;
    min-height: 13px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 5% 75px 40px 6%;
    gap: 5%;
  }

  .content-text {
    flex-direction: column;
    width: 100%;
    font-size: 1.2vw;
    overflow: hidden;
  }

  .img {
    width: 100%;
    object-fit: contain;
  }

  .content-title {
    color: #EFC32F;
    font-weight: bold;
    font-size: 4vw;
    margin-bottom: 80px;
    margin-top: 35px;
  }

  .ler-mais-btn {
    margin-top: 10px;
    background: none;
    border: none;
    color: #eab308;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
  }

  p {
    color: #5B3F20;
    font-size: 1.1vw;
    font-weight: 500;
    font-family: "Poppins";
    padding-bottom: 20px;
  }

  @media screen and (max-width: 1400px) {

    .content {
      gap: 0px;
      padding-right: 2%;
    }

    .content-img {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .content-title {
      margin-bottom: 10%;
    }

    p {
      margin-bottom: 2vw;
      padding-bottom: 2vw;
    }

  }

  @media screen and (max-width: 766px) {
    .content {
      flex-direction: column;
      padding: 40px;
    }

    p {
      font-size: 16px;
    }

    .content-title{
        font-size: clamp(35px, 7vw, 75px);
        text-align: center;
        margin-bottom: 40px;
    }

  }

  @media screen and (max-width: 575px) {
    .content {
      flex-direction: column;
      padding: 20px;
    }

    p {
      font-size: 14px;
      margin-bottom: 15px;
    }

    .content-text {
      padding: 10px;
    }

  }
`;

export function ContentPadrela() {
  const textRef = useRef(null);

  return (
    <DivHead>
      <div className="decoracao-semicirculo">
        <img
          className="semicirculo-img"
          src="images/decoracao-semicirculo.png"
          alt=""
        />
      </div>
      <div className="decoracao-linhas">
        <img className="group-88-img" src="images/Group 88.png" alt="" />
      </div>

      <div className="content">
        <div
          ref={textRef}
          className="content-text"
          data-aos="fade-up"
        >
          <h2 className="content-title linearTitle">Nossa História</h2>
          <p>Tudo começou há alguns anos, quando o cheiro de pão quentinho ainda era apenas um sonho dentro do forno. O Padrela nasceu do desejo de levar à mesa das famílias muito mais do que produtos: queríamos compartilhar carinho, tradição e aquele sabor que lembra a casa da gente.</p>
          <p>No início, éramos apenas um pequeno espaço de bairro, com fornadas simples, mas cheias de dedicação. Com o tempo, fomos crescendo, e junto com a padaria trouxemos novidades para atender cada momento do seu dia. Hoje, além dos pães fresquinhos e bolos caseiros, servimos almoços saborosos, pizzas irresistíveis e lanches preparados na hora.</p>
          <p>Nossa missão continua a mesma: oferecer qualidade, variedade e um ambiente acolhedor, onde cada cliente se sinta em casa. Mais do que uma padaria, somos um ponto de encontro para famílias e amigos, um lugar onde boas histórias e bons sabores se encontram todos os dias.</p>
        </div>

        <div className="content-img overflow-hidden w-100" data-aos="zoom-in">
          <img className="img" src="images/content-img.png" alt="" />
        </div>
      </div>
    </DivHead>
  );
}

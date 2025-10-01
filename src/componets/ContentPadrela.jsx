import React, { useState, useEffect, useRef } from "react";
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
    justify-content: center;
    align-items: center;
    padding: 40px 80px;
  }

  .content-text {
    flex-direction: column;
    width: 100%;
    font-size: 1.2vw;
    overflow: hidden;
    transition: max-height 0.6s ease;
  }

  .content-img {
    width: 100%;
    min-width: 300px;
  }

  .content-title {
    color: #EFC32F;
    font-weight: bold;
    font-size: 4vw;
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

  @media screen and (max-width: 766px) {
    .content {
      flex-direction: column;
      padding: 50px;
    }

    .content-title{
        font-size: 28px;
    }

    .content-text {
      font-size: 12px;
    }
  }
`;

export function ContentPadrela() {
  const [expanded, setExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const textRef = useRef(null);

  const [maxHeight, setMaxHeight] = useState("none");


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 425);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      if (expanded) {
        setMaxHeight(`${textRef.current.scrollHeight}px`);
      } else {
        setMaxHeight("120px");
      }
    } else {
      setMaxHeight("none");
    }
  }, [expanded, isSmallScreen]);

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
          style={{ maxHeight: maxHeight }}
        >
          <div className="content-title">Nossa História</div>
          <br />
          Tudo começou há alguns anos, quando o cheiro de pão quentinho ainda era apenas um sonho dentro do forno. O Padrela nasceu do desejo de levar à mesa das famílias muito mais do que produtos: queríamos compartilhar carinho, tradição e aquele sabor que lembra a casa da gente.  
          <br />
          <br />
          No início, éramos apenas um pequeno espaço de bairro, com fornadas simples, mas cheias de dedicação. Com o tempo, fomos crescendo, e junto com a padaria trouxemos novidades para atender cada momento do seu dia. Hoje, além dos pães fresquinhos e bolos caseiros, servimos almoços saborosos, pizzas irresistíveis e lanches preparados na hora.  
          <br />
          <br />
          Nossa missão continua a mesma: oferecer qualidade, variedade e um ambiente acolhedor, onde cada cliente se sinta em casa. Mais do que uma padaria, somos um ponto de encontro para famílias e amigos, um lugar onde boas histórias e bons sabores se encontram todos os dias.
        </div>

        {isSmallScreen && (
          <button
            className="ler-mais-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Ler menos ▲" : "Ler mais ▼"}
          </button>
        )}

        <div className="content-img">
          <img className="w-100" src="images/content-img.png" alt="" />
        </div>
      </div>
    </DivHead>
  );
}

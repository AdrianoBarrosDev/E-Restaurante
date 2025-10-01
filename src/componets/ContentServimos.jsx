import styled from "styled-components";

const DivHead = styled.div`
    .content-servimos {
        flex-direction: column;
        padding: 0px 80px;
    }

    .servimos-title {
        font-weight: bold;
        font-size: 4vw;
        color: #EFC32F;
        padding-bottom: 60px;
    }

    .servimos-imgs {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 30px;
    }

    .servimos-img {
        width: 13vw;
        height: auto;
        transition: transform 0.3s ease;
    }

    .servimos-img:hover {
        transform: scale(1.05);
    }

    .serv{
        flex-direction: column;
    }

    .serv-title{
        text-align: center;
        font-weight: bold;
        font-size: 1.8vw;
        color: #EFC32F;
    }

    .serv-button-cardapio {
        margin: 40px auto 0;
        display: block;
        width: 70%;
        height: 4vw;
        min-height: 50px;
        background-color: #E7B91F;
        border: none;
        outline: solid 2px white !important;
        outline-offset: -10px;
        border-radius: 15px;
        font-weight: bold;
        color: white;
        font-size: 1.5vw;
    }

  @media screen and (max-width: 766px) {

    .content-servimos{
        padding: 0px 50px;
    }
    .servimos-img {
      width: 20vw;
      max-width: 220px;
    }

    .servimos-title{
        font-size: 28px;
    }

    .serv-button-cardapio{
        font-size: 15px;
    }
  }

  @media screen and (max-width: 480px) {
    .content-servimos {
        padding: 0 20px;
    }

    .servimos-img {
        width: 30vw;
        max-width: 190px;
    }

    .servimos-title {
        font-size: 29px;
        padding:20px;
    }

    .serv-title {
        font-size: 17px;

    }
  }
`;

export function ContentServimos() {
  return (
    <DivHead>
      <div className="content-servimos">
        <div className="servimos-title">Servimos</div>
        <div className="servimos-imgs">
          <div className="serv">
            <img className="servimos-img" src="images/Matinais.png" alt="Matinais"/>
            <div className="serv-title">Matinais</div>
          </div>
          <div className="serv">
            <img className="servimos-img" src="images/Almoço.png" alt="Almoço"/>
            <div className="serv-title">Almoço</div>
          </div>
          <div className="serv">
            <img className="servimos-img" src="images/Lanches.png" alt="Lanches"/>
            <div className="serv-title">Lanches</div>
          </div>
          <div className="serv">
            <img className="servimos-img" src="images/Doces.png" alt="Doces"/>
            <div className="serv-title">Doces</div>
          </div>
          <div className="serv">
            <img className="servimos-img" src="images/Pizzas.png" alt="Pizzas"/>
            <div className="serv-title">Pizzas</div>
          </div>
          <div className="serv">
            <img className="servimos-img" src="images/Sopas.png" alt="Sopas"/>
            <div className="serv-title">Sopas</div>
          </div>
        </div>
        <button className="serv-button-cardapio">Ver cardápio</button>
      </div>
    </DivHead>
  );
}

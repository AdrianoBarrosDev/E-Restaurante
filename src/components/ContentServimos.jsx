import styled from "styled-components";

const DivHead = styled.div`
    .content-servimos {
      flex-direction: column;
      padding: 0px 75px 0px 6%;
      font-family: "Poppins";    
    }

    .servimos-title {
      font-weight: bold;
      color: #EFC32F;
      padding-bottom: 60px;
      font-size: clamp(35px, 7vw, 75px);
    }

    .servimos-imgs {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
      gap: 30px;
    }

    .servimos-img {
      width: 13vw;
      height: auto;
      transition: transform 0.3s ease;
      min-width: 160px;
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
      font-size: clamp(20px, 2vw, 30px);
      
      color: #EFC32F;
      padding-top: 20px;
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
      font-size: 1.3vw;
      margin-block: 100px;
    }

  @media screen and (max-width: 1200px) {

    .content-servimos{
        padding: 0px 30px;
    }
    .servimos-img {
      width: 20vw;
      max-width: 220px;
    }
    .serv-button-cardapio{
        font-size: 15px;
    }
  }

  @media screen and (max-width: 575px) {

    .servimos-title {
      padding-bottom: 20px;
    }

    .servimos-img {
      width: 36vw;
    }

    .servimos-imgs {
      width: 100%;
      justify-content: space-around;
    }

    .serv-title {
        font-size: 17px;
    }

    .serv-button-cardapio {
      margin-block: 15vw 20px;
    }

  }
`;

export function ContentServimos() {
  return (
    <DivHead>
      <div className="content-servimos">
        <div className="servimos-title text-center text-xxl-start linearTitle" data-aos="fade-up">Servimos</div>
        <div className="servimos-imgs">
          <div className="serv" data-aos="fade-up">
            <img className="servimos-img" src="images/Matinais.png" alt="Matinais"/>
            <div className="serv-title">Matinais</div>
          </div>
          <div className="serv" data-aos="fade-up">
            <img className="servimos-img" src="images/Almoço.png" alt="Almoço"/>
            <div className="serv-title">Almoço</div>
          </div>
          <div className="serv" data-aos="fade-up">
            <img className="servimos-img" src="images/Lanches.png" alt="Lanches"/>
            <div className="serv-title">Lanches</div>
          </div>
          <div className="serv" data-aos="fade-up">
            <img className="servimos-img" src="images/Doces.png" alt="Doces"/>
            <div className="serv-title">Doces</div>
          </div>
          <div className="serv" data-aos="fade-up">
            <img className="servimos-img" src="images/Pizzas.png" alt="Pizzas"/>
            <div className="serv-title">Pizzas</div>
          </div>
          <div className="serv" data-aos="fade-up">
            <img className="servimos-img" src="images/Sopas.png" alt="Sopas"/>
            <div className="serv-title">Sopas</div>
          </div>
        </div>
        <button className="serv-button-cardapio" data-aos="fade-up" onClick={() => window.location.href = '/cardapio'}>Ver Cardápio</button>
      </div>
    </DivHead>
  );
}

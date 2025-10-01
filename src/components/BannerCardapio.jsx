import styled from "styled-components";

const DivHead = styled.div`
  position: relative;

    .header { 
        position: absolute; 
        top: 20px; 
        left: 50%; 
        transform: translateX(-50%); 
        height: 70px; 
        width: 98%; 
        max-width: 100vw; 
        border-radius: 50px; 
        background-color: #1c1c1c; 
        display: flex; 
        align-items: center; 
        color: white; 
        padding: 0px 20px; 
        z-index: 10; 
    }

    .abas { 
        margin-left: auto; 
        display: flex; 
        gap: 3vw; 
        margin-right: 40px; 
    }

    .aba-button { 
        background-color: #1c1c1c; 
        border: none; color: white; 
        font-family: "Poppins"; 
        font-size: 14px; 
        font-weight: bold; cursor: pointer; 
    }

    .img-logo-header { 
        width: 70px; 
    }

    .carousel { 
        position: relative;
        border-radius: 0px 0px 50px 50px; 
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 10px;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: 40vw;  
        min-height: 350px;
    }

    .carousel-inner{
    }

    .img-carrossel {
        border-radius: 0px 0px 50px 50px;
    }
    .carrossel-padrela-logo { 
        position: absolute; 
        top: 50%; left: 50%; 
        transform: translate(-50%, -50%); 
        width: 30vw; 
        z-index: 5; 
    }

    .carousel-control-prev{
        background-color: #E7B91F;
        width: 60px;
        height: 60px;
        top: 20vw;
        left: 20px;
        border-radius: 100%;
        opacity: 1;
    }

    .carousel-control-next{
        background-color: #E7B91F;
        width: 60px;
        height: 60px;
        top: 20vw;
        right: 20px;
        border-radius: 100%;
        opacity: 1;
    }
`;

export function BannerCardapio() {
  return (
    <DivHead>
      <div className="header">
        <img className="img-logo-header" src="images/padrela-logo.png" alt="logo header" />
        <span className="judson d-none d-lg-block">PADRELA</span>
        <div className="abas">
          <button className="aba-button">Conhecer</button>
          <button className="aba-button">Cardápio</button>
          <button className="aba-button">Contato</button>
        </div>
      </div>

      <div className="carrossel">
        <img className="carrossel-padrela-logo" src="images/padrela-logo.png" alt="logo central" />

        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/image-carrossel.png" className="img-carrossel w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="images/image-carrossel.png" className="img-carrossel w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="images/image-carrossel.png" className="img-carrossel w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </DivHead>
  );
}

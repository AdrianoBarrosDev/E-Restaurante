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
    border: none; 
    color: white; 
    font-family: "Poppins"; 
    font-size: 14px; 
    font-weight: bold; 
    cursor: pointer; 
  }

  .img-logo-header { 
    width: 70px; 
  }

  .carrossel { 
    position: relative;
    border-radius: 0px 0px 50px 50px; 
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 10px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 40vw;  
    min-height: 350px;
    background-image: url("images/image-carrossel.png");
    background-size: cover;
    background-position: center;
  }

  .carrossel-padrela-logo { 
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    width: 30vw; 
    z-index: 5; 
  }

  .header {
      padding: 0 !important;
      height: 70px;
      width: 98%;
      max-width: 100vw;
      border-radius: 50px;
      background-color:#1C1C1C;
      display: flex;
      align-items: center;
      color: white;
      padding: 0px 20px;
      margin-top: 20px;
  }

  .ativo {
    background-color: #F2CE56;
    padding: 5px 15px;
    border: none;
    border-radius: 15px;
  }
`;

export function BannerCardapio() {
  return (
    <DivHead>
      <div className="header">
        <img className='img-logo-header' src="images/padrela-logo.png" alt="" />
        <span className="judson d-none d-lg-block">PADRELA</span>

        <div className="abas">
            <button className="aba-button" onClick={() => window.location.href = '/'}>Conhecer</button>
            <button className="aba-button ativo" onClick={() => window.location.href = '/cardapio'}>Cardápio</button>
            <button className="aba-button">Contato</button>
        </div>
        
      </div>

      <div className="carrossel">
        <img className="carrossel-padrela-logo" src="images/padrela-logo.png" alt="logo central" />
      </div>
    </DivHead>
  );
}
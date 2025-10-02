import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DivHead = styled.div`
  position: relative;

  .a {
    width: 100%;                  /* ocupa toda a largura */
    height: 35vw;                 /* altura proporcional à largura da tela */
    min-height: 400px;            /* altura mínima */
    background-image: url("images/image-carrossel.png");
    background-size: cover;        /* cobre todo o container sem distorcer */
    background-position: center;   /* centraliza a imagem */
    background-repeat: no-repeat;  /* evita repetir a imagem */
  }
  .abas {
      margin-left: auto;
      display: flex;
      gap: 3vw;
      margin-right: 40px;
  }

  .aba-button{
      background-color: #1C1C1C;
      border: none;
      color: white;
      font-family: 'poppins';
      font-size: clamp(8px, 3vw, 15px);
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

  @media (max-width: 575px) {
    .ativo {
        padding: 5px 5%;
    }
  }

`;

export function BannerCardapio() {

  const navigate = useNavigate();

  return (
    <DivHead>
      <div className="a d-flex justify-content-start align-items-center flex-column">
        <div className="header" data-aos="fade-up">
          <img className='img-logo-header' src="images/padrela-logo.png" alt="" />
          <span className="judson d-none d-lg-block">PADRELA</span>
          <div className="abas">
              <button className="aba-button" onClick={() => window.location.href = '/'}>Conhecer</button>
              <button className="aba-button ativo" onClick={() => window.location.href = '/cardapio'}>Cardápio</button>
          </div>
        </div>
        <img className='w-25' style={{minWidth: "300px"}} src="images/padrela-logo.png" alt="" />
      </div>
    </DivHead>
  );
}
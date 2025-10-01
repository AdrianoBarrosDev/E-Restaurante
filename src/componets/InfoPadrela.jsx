import styled from "styled-components";

const DivHead = styled.div`
    .info-img{
        width: 100%;
        margin-top: 40px;
    }

    .contato{
        flex-direction:column;
        justify-content: center;
        align-items: center;
        text-align: center;
    
    }

    .contato-title{
        color: #E7B91F;
        font-weight: bold;
        font-size: 4vw;
    }

    .redes-sociais{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        padding: 80px;
    }

    .rede-img{
        width: 25vw;
    }

    .footer{
        color: white;
        height: 70px;
        background-color: #1C1C1C;
        border-radius: 30px 30px 0px 0px;
        display: flex;
        align-items: center;
    }

    .judson{
        font-family: 'Judson';
        font-size: 20px;
    }

    .img-logo{
        width: 70px;
    }

    .wport-logo{
        margin-left: auto;
        width: 120px;
    }

@media screen and (max-width: 766px) {
    .contato-title{
        font-size: 28px;
    }

    .redes-sociais{
        flex-direction: column;
    }

    .rede-img{
        width: 10vw;
        min-width: 200px;
    }

  }
`;

export function InfoPadrela() {
  return (
    <DivHead>
        <div>
            <img className="info-img" src="images/info-padrela.png" alt="" />
        </div>
        <div className="contato">
            <div className="contato-title">Entre em Contato</div>
            <div className="redes-sociais">
                <img className="rede-img" src="images/insta-padrela.png" alt="" />
                <img className="rede-img" src="images/face-padrela.png" alt="" />
                <img className="rede-img" src="images/whats-padrela.png" alt="" />
            </div>
        </div>
        <div className="footer">
            <img className='img-logo' src="images/padrela-logo.png" alt="" />
            <span className="judson">PADRELA</span>
            <img className="wport-logo" src="images/wport-logo.png" alt="" />
        </div>
    </DivHead>
  );
}

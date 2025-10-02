import styled from "styled-components";

const DivHead = styled.div`
    .info-img{
        margin-top: 40px;
        object-fit: contain;
        width: 100%;
    }

    .contato{
        flex-direction:column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-block: 50px 80px;
        font-family: "Poppins";
        overflow-x: hidden;
    }

    .contato-title{
        color: #E7B91F;
        font-weight: bold;
        font-size: clamp(35px, 7vw, 75px);
    }

    .redes-sociais{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 80px;
        gap: 80px;
    }

    .card-contato {
        background-color: #1C1C1C;
        padding: 28px 22px;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        outline: 2px solid #E7B91F;
        outline-offset: -15px;
    }

    p {
        color: white;
        font-size: clamp(17px, 1.5vw, 27px);
        margin: 0;
        white-space: nowrap;
    }

    .footer{
        color: white;
        height: 70px;
        background-color: #1C1C1C;
        border-radius: 50px 50px 0px 0px;
        display: flex;
        align-items: center;
        overflow: hidden;
        padding-inline: 50px;
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

        .footer {
            padding-inline: 0 20px;
            border-radius: 30px 30px 0px 0px;
        }

    }

    @media screen and (max-width: 575px) {
        .redes-sociais {
            padding-inline: 30px;
        }

        .rede-img {
            width: 18%;
            min-width: 44px;
        }

    }
`;

export function InfoPadrela() {
  return (
    <DivHead>
        <div data-aos="zoom-out">
            <img className="info-img d-none d-sm-block" src="images/info-padrela.png" alt="" />
            <img className="info-img d-block d-sm-none" src="images/info-padrela-mobile.png" alt="" />
        </div>
        <div className="contato">
            <div className="contato-title linearTitle" data-aos="fade-up" data-aos-delay="500">Entre em Contato</div>
            <div className="redes-sociais row">
                <div className="card-contato col-12 col-sm-8 col-lg-4 col-xxl-3" data-aos="fade-right" data-aos-delay="500">
                    <img className="rede-img" src="images/face-padrela.png" alt="Logo Instagram" />
                    <p>@padrela_santos</p>
                </div>
                <div className="card-contato col-12 col-sm-8 col-lg-4 col-xxl-3" data-aos="fade-up" data-aos-delay="500">
                    <img className="rede-img" src="images/insta-padrela.png" alt="Logo Instagram" />
                    <p>@padrela_santos</p>
                </div>
                <div className="card-contato col-12 col-sm-8 col-lg-4 col-xxl-3" data-aos="fade-left" data-aos-delay="500">
                    <img className="rede-img" src="images/whats-padrela.png" alt="Logo Instagram" />
                    <p>(13) 3261-2990</p>
                </div>
            </div>
        </div>
        <div className="footer" data-aos="fade-up">
            <img className='img-logo' src="images/padrela-logo.png" alt="" />
            <span className="judson">PADRELA</span>
            <img className="wport-logo" src="images/wport-logo.png" alt="" />
        </div>
    </DivHead>
  );
}

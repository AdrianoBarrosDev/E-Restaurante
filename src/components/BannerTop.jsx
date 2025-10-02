import styled from "styled-components";

const DivHead = styled.div`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .top {
        background-image: url("/images/banner_top.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 45vw;
        min-height: 465px;
        width: 100%;
        max-width: 100vw;
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

    .img-logo-header{
        width: 70px;
    }

    .low_content{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10%;
    }

    .img-logo{
        width: 37%;
        min-width: 300px
    }

    .content-banner{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow-x: hidden;
    }


    .escrita-banner{
        flex-direction: column;
        font-family:'Poppins';
        text-align: center;
        font-style: bold;
        color: white;
        font-size: 4vw;
    }

    .button_cardapio{
        width: 250px;
        height: 4vw;
        min-height: 50px;
        min-width: 130px;
        background-color: #E7B91F;
        border: none;
        outline: solid 2px white !important; 
        outline-offset: -10px;
        border-radius: 15px;
        font-weight: bold;
        color: white;
        font-size: 1.2vw;
    }

    .judson{
        font-family: 'Judson';
        font-size: 20px;
    }

    .ativo {
        background-color: #F2CE56;
        padding: 5px 15px;
        border: none;
        border-radius: 15px;
    }

    p {
        margin: 0;
        font-size: 4vw;
        color: white;
        font-weight: bold;
    }

    @media (max-width: 767px) {
        .low_content{
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .escrita-header{
            display: none;
        }

        .content-banner {
            justify-content: center;
        }

        .button_cardapio {
            width: 40%;
            max-width: 250px;
            font-size: 10px;
        }

    }

    @media (max-width: 575px) {
        .button_cardapio {
            border-radius: 12px;
            outline-offset: -7px;
        }

        .ativo {
            padding: 5px 5%;
        }

    }
  
`;

export function BannerTop() {
    return (
        <>
            <DivHead>
                <div className='top'>
                    <div className="content-banner row">
                        <div className="header" data-aos="fade-up">
                            <img className='img-logo-header' src="images/padrela-logo.png" alt="" />
                            <span className="judson d-none d-lg-block">PADRELA</span>

                            <div className="abas">
                                <button className="aba-button ativo" onClick={() => window.location.href = '/'}>Conhecer</button>
                                <button className="aba-button" onClick={() => window.location.href = '/cardapio'}>Cardápio</button>
                                <button className="aba-button">Contato</button>
                            </div>
                            
                        </div>
                        <div className="row justify-content-center justify-content-md-around align-items-center">
                            <div className="img-logo col-12 col-md-6" data-aos="fade-right">
                                <img className='w-100' src="images/padrela-logo.png" alt="" />
                            </div>
                            <div className="escrita-banner col-12 col-md-6" data-aos="fade-left">
                                <div className="escrita-header d-none d-md-block">
                                    <div>
                                        <p>Descubra</p>
                                        <p className="destaque linearTitle">Novos sabores</p>
                                    </div>
                                </div>
                                <button className="button_cardapio" onClick={() => window.location.href = '/cardapio'}>Ver cardápio</button>
                            </div>
                        </div>
                    </div>
                </div>
            </DivHead>
        </>
    );
}
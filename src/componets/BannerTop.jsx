import styled from "styled-components";

const DivHead = styled.div`
    .top {
        background-image: url("/images/banner_top.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 45vw;
        min-height: 450px;
        padding: 30px 30px 0px 30px;
    }

    .header {
        height: 70px;
        width: 100%;
        border-radius: 50px;
        background-color:#1C1C1C;
        display: flex;
        align-items: center;
        color: white;
    }

    .abas {
        margin-left: auto; /* joga as abas pra direita */
        display: flex;
        gap: 3vw;
        margin-right: 40px;
    }

    .aba-button{
        background-color: #1C1C1C;
        border: none;
        color: white;
        font-family: 'poppins';
        font-size: 14px;
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
    }

    .img-logo{
        width: 40%;
        min-width: 300px
    }

    .content-banner{
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


    .escrita-banner{
        flex-direction: column;
        font-family:'Poppins';
        text-align: center;
        font-style: bold;
        color: white;
        font-size: 4vw;
        width: 33%;
        .destaque{
            color:#EFC32F;
        }
    }

    .button_cardapio{
        width: 45%;
        height: 3.5vw;
        min-height: 50px;
        background-color: #E7B91F;
        border: none;
        outline: solid 3px white;
        outline-offset: -8px;
        border-radius: 10px;
        font-weight: bold;
        color: white;
        font-size: 1.5vw;
    }

    .judson{
        font-family: 'Judson';
        font-size: 20px;
    }

    @media screen and (max-width: 768px) {
        .low_content{
            flex-direction: column;
        }
        .escrita-header{
            display: none;
        }

        .button_cardapio{
            min-width: 144px;
            min-height: 44px;
            font-size: 15px;
        }

        .judson{
            display: none;
        }
    }
  
`;

export function BannerTop() {
    return (
        <>
            <DivHead>
                <div className='top'>
                    <div className="content-banner row">
                        <div className="header">
                            <img className='img-logo-header' src="images/padrela-logo.png" alt="" />
                            <span className="judson d-none d-lg-block">PADRELA</span>

                            <div className="abas">
                                <button  className="aba-button">Conhecer</button>
                                <button  className="aba-button">Cardápio</button>
                                <button  className="aba-button">Contato</button>
                            </div>
                            
                        </div>
                        <div className="low_content col-12">
                            <img className='img-logo col-12 col-md-6' src="images/padrela-logo.png" alt="" />
                            <div className="escrita-banner col-md-6">
                                <div className="escrita-header d-none d-md-block">
                                    <strong>Descubra <span className="destaque">Novos sabores</span></strong>
                                </div>
                                <button className="button_cardapio">Ver cardápio</button>
                            </div>
                        </div>
                    </div>
                </div>
            </DivHead>
        </>
    );
}
import styled from "styled-components";

const DivHead = styled.div`
    overflow: hidden;

    .cardapio-title{
        display: flex;
        font-family: 'Poppins';
        font-size: 4vw;
        font-weight: bold;
        background: linear-gradient(90deg, #EFC32F 27%, #D9A700 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        justify-content:center;
        align-items: center;
        padding: 54px 0px 45px 0px;
        height: 100%;
        overflow: hidden;
        gap: 2%;
    }

    .group-88-img{
        min-width: 2000px !important;
        height: 20px
    }

    .group-88-img1{
        min-width: 2000px;
        height: 20px;
        transform: rotate(180deg);
    }

    .buttons-menu {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        background-color: #1C1C1C;
        padding: 39px;
        gap: 20px;
    }

    .button-menu {
        flex: 1 1 200px;
        max-width: 250px;
        min-width: 120px;
        height: 70px;
        padding: 12px 20px;
        background-color: #E7B91F;
        border: none;
        outline: solid 2px white !important; 
        outline-offset: -10px;
        border-radius: 15px;
        font-weight: bold;
        color: white;
        font-size: 1rem; 
        text-align: center;
        cursor: pointer;
        transition: 0.3s;
    }

    .menu-class{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4vw;
        font-weight: bold;
        background: linear-gradient(90deg, #EFC32F 27%, #D9A700 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        gap: 2%;
        right: 20vw;
        padding: 40px;
    }

    
    .menu-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 100px;
        font-family: 'Poppins', sans-serif;
    }

    .menu-name {
        font-weight: bold;
        font-size: 16px;
        color: #3b2c1a;
        display: flex;
        align-items: center;
        width: 1000%;
    }

    .menu-name::after {
    content: "";
        flex: 1;
        border-bottom: 1px dashed #aaa;
        margin: 0 8px;
    }

    .menu-info {
        max-width: 70%;
    }

    .menu-info h3 {
        margin: 0;
        font-size: 16px;
        font-weight: bold;
        color: #3b2c1a;
    }

    .menu-info p {
        margin: 3px 0 0 0;
        font-size: 13px;
        color: #7a6f5a;
    }

    .menu-price {
        position: relative;
        font-size: 14px;
        font-weight: bold;
        color: #3b2c1a;
        white-space: nowrap;
        background-color: #FFF8E0;
        bottom: 10px;
        left: 100px;
        width: 300px;
    }
    
    @media screen and (max-width: 768px) {
        .cardapio-title{
            font-size: 40px;
        }

        .menu-class{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            right: 0;
        }

        .linhas-decoracao{
            gap: 220px;
        }
  }


`;

export function ContentCardapio() {
  return (
    <DivHead>
        <div className="cardapio-title">
            <img className="group-88-img1" src="images/Group 88.png" alt="" />
            Cardápio
            <img className="group-88-img" src="images/Group 88.png" alt="" />
        </div>
        <div className="buttons-menu">
            <button className="button-menu">Hamburguer</button>
            <button className="button-menu">Lanches</button>
            <button className="button-menu">Pães</button>
            <button className="button-menu">Pizzas</button>
            <button className="button-menu">Beirutes</button>
            <button className="button-menu">Doces</button>
            <button className="button-menu">Bebidas</button>
        </div>

        <div className="menu">
            <div className="menu-class">
                <img className="group-88-img1 d-none d-md-block" src="images/Group 88.png" alt="" />
                Hamburguer
                <img className="group-88-img d-none d-md-block" src="images/Group 88.png" alt="" />
            </div>
            <div className="menu-item">
                <div className="menu-info">
                    <div className="menu-name">Café Expresso</div>
                    <p>Café na hora com o gosto de saber expresso.</p>
                </div>
                <div className="menu-price">R$ 14,99</div>
            </div>
            <div className="menu-class">
                <img className="group-88-img1 d-none d-md-block" src="images/Group 88.png" alt="" />
                Lanches
                <img className="group-88-img d-none d-md-block" src="images/Group 88.png" alt="" />
            </div>
            <div className="content-menu">
                aaaaaaaaaaaaa
            </div>
                        <div className="menu-class">
                <img className="group-88-img1 d-none d-md-block" src="images/Group 88.png" alt="" />
                Pães
                <img className="group-88-img d-none d-md-block" src="images/Group 88.png" alt="" />
            </div>
            <div className="content-menu">
                aaaaaaaaaaaaa
            </div>
                        <div className="menu-class">
                <img className="group-88-img1 d-none d-md-block" src="images/Group 88.png" alt="" />
                Pizzas
                <img className="group-88-img d-none d-md-block" src="images/Group 88.png" alt="" />
            </div>
            <div className="content-menu">
                aaaaaaaaaaaaa
            </div>
                        <div className="menu-class">
                <img className="group-88-img1 d-none d-md-block" src="images/Group 88.png" alt="" />
                Beirutes
                <img className="group-88-img d-none d-md-block" src="images/Group 88.png" alt="" />
            </div>
            <div className="content-menu">
                aaaaaaaaaaaaa
            </div>
                        <div className="menu-class">
                <img className="group-88-img1 d-none d-md-block" src="images/Group 88.png" alt="" />
                Doces
                <img className="group-88-img d-none d-md-block" src="images/Group 88.png" alt="" />
            </div>
            <div className="content-menu">
                aaaaaaaaaaaaa
            </div>
                        <div className="menu-class">
                <img className="group-88-img1 d-none d-md-block" src="images/Group 88.png" alt="" />
                Bebidas
                <img className="group-88-img d-none d-md-block" src="images/Group 88.png" alt="" />
            </div>
            <div className="content-menu">
                aaaaaaaaaaaaa
            </div>
        </div>
    </DivHead>
  );
}

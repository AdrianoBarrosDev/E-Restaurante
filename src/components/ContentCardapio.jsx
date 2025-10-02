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
        background-color: #FFE9A2;
        padding: 39px;
        gap: 20px;
        border-radius: 30px;
    }

    .button-menu {
        flex: 1 1 200px;
        max-width: 320px;
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

    .button-menu:hover {
        transform: scale(1.1);
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

    .item-menu{
        display: flex;
        justify-content: start;
        align-items: start;
        flex-direction: column;
        width: 100%;
        padding: 0px 200px;
        color: #5B3F20;
        font-weight: bold;
    }

    .descricao{
        width: 90%;
        font-weight: normal;
        opacity: 0.4;
    }

    .dashed{
        border-bottom: 1px dashed #aaa;
        height: 1px; 
        flex-grow: 1;
        margin: 0 10px;
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
        margin-top: 100px;
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


        .menu-item {
            display: flex;
            align-items: center;
            font-family: 'Poppins', sans-serif;
            white-space:normal;
        }

        .menu-price {
            position: relative;
            bottom: 20px;
        }

        .item-menu {
            padding: 0px 20px;
        }

        .footer {
            padding-inline: 0 20px;
            border-radius: 30px 30px 0px 0px;
        }
    }

`;

export function ContentCardapio() {

  // Dados do cardápio
  const menuData = [
    {
      category: "Hambúrguer",
      items: [
        { name: "Classic Burger", price: "R$ 25,99", description: "Hambúrguer de carne bovina suculenta com alface, tomate e queijo cheddar." },
        { name: "Bacon Deluxe", price: "R$ 29,99", description: "Hambúrguer com bacon crocante, queijo prato, cebola caramelizada e molho especial." },
        { name: "Cheeseburger", price: "R$ 23,99", description: "Tradicional cheeseburger com queijo cheddar, alface e tomate fresco." },
        { name: "Veggie Burger", price: "R$ 21,99", description: "Hambúrguer de grão-de-bico e legumes, servido com molho especial e folhas verdes." },
      ]
    },
    {
      category: "Lanches",
      items: [
        { name: "X-Salada", price: "R$ 18,99", description: "Pão macio, hambúrguer suculento, queijo, alface, tomate e maionese especial." },
        { name: "X-Bacon", price: "R$ 20,99", description: "Hambúrguer com bacon crocante, queijo, molho especial e pão fresquinho." },
        { name: "Hot Dog Especial", price: "R$ 16,99", description: "Cachorro-quente com salsicha artesanal, queijo, ketchup, mostarda e maionese." },
        { name: "Mini Hambúrguer", price: "R$ 12,99", description: "Mini burger de carne com queijo, alface, tomate e molho da casa." },
      ]
    },
    {
      category: "Pães",
      items: [
        { name: "Pão Francês", price: "R$ 2,50", description: "Pão fresquinho, crocante por fora e macio por dentro, ideal para qualquer refeição." },
        { name: "Pão Integral", price: "R$ 3,50", description: "Pão saudável, feito com farinha integral e sementes, perfeito para sanduíches." },
        { name: "Pão de Queijo", price: "R$ 4,00", description: "Delicioso pão de queijo quentinho, feito com queijo Minas, perfeito para lanches." },
        { name: "Ciabatta", price: "R$ 5,00", description: "Pão italiano macio e aerado, ideal para acompanhar sanduíches gourmet." },
      ]
    },
    {
      category: "Pizzas",
      items: [
        { name: "Margherita", price: "R$ 32,99", description: "Molho de tomate fresco, queijo mussarela, manjericão e um toque de azeite." },
        { name: "Pepperoni", price: "R$ 38,99", description: "Mussarela, molho de tomate e fatias generosas de pepperoni picante." },
        { name: "Quatro Queijos", price: "R$ 42,99", description: "Mistura de mussarela, provolone, gorgonzola e parmesão, com molho especial." },
        { name: "Portuguesa", price: "R$ 39,99", description: "Mussarela, presunto, ovos, cebola, azeitonas e pimentão sobre molho de tomate." },
      ]
    },
    {
      category: "Beirutes",
      items: [
        { name: "Beirute Frango", price: "R$ 24,99", description: "Pão sírio recheado com frango grelhado, queijo, alface, tomate e maionese especial." },
        { name: "Beirute Carne", price: "R$ 26,99", description: "Pão sírio com carne grelhada, queijo, cebola caramelizada, alface e molho da casa." },
        { name: "Beirute Vegetariano", price: "R$ 22,99", description: "Pão sírio recheado com mix de vegetais grelhados, queijo, alface e molho especial." },
        { name: "Beirute Atum", price: "R$ 25,99", description: "Pão sírio com pasta de atum, queijo, alface, tomate e maionese temperada." },
      ]
    },
    {
      category: "Doces",
      items: [
        { name: "Brigadeiro", price: "R$ 3,50", description: "Docinho de chocolate tradicional brasileiro, macio e cremoso." },
        { name: "Beijinho", price: "R$ 3,50", description: "Docinho de coco com leite condensado, coberto com açúcar cristal." },
        { name: "Bolo de Cenoura", price: "R$ 8,99", description: "Bolo fofinho de cenoura com cobertura de chocolate cremoso." },
        { name: "Mousse de Maracujá", price: "R$ 9,50", description: "Mousse aerado de maracujá, doce e levemente azedinho, perfeito como sobremesa." },
      ]
    },
    {
      category: "Bebidas",
      items: [
        { name: "Refrigerante Lata", price: "R$ 5,00", description: "Refrigerante gelado em lata de 350ml, disponível nos sabores cola, guaraná e laranja." },
        { name: "Suco Natural", price: "R$ 7,50", description: "Suco fresco feito na hora, disponível nos sabores laranja, maracujá e abacaxi." },
        { name: "Água Mineral", price: "R$ 3,50", description: "Água mineral natural, ideal para se refrescar a qualquer hora." },
        { name: "Chá Gelado", price: "R$ 6,00", description: "Chá gelado saborizado, doce na medida certa, perfeito para o verão." },
      ]
    },
  ];

  const generateId = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "").toLowerCase();

  return (
    <DivHead>
      <div className="cardapio-title">
        <img className="group-88-img1" src="images/Group 88.png" alt="" />
        Cardápio
        <img className="group-88-img" src="images/Group 88.png" alt="" />
      </div>

      <div className="buttons-menu">
        {menuData.map((cat, idx) => (
          <button
            key={idx}
            className="button-menu"
            onClick={() => {
              const el = document.getElementById(generateId(cat.category));
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="menu">
        {menuData.map((cat, idx) => (
          <div key={idx}>
            <div className="menu-class px-5" id={generateId(cat.category)}>
              <img className="group-88-img1 d-block" src="images/Group 88.png" alt="" />
              {cat.category}
              <img className="group-88-img d-block" src="images/Group 88.png" alt="" />
            </div>

            {cat.items.map((item, idy) => (
              <div key={idy} className="item-menu">
                <div className="d-flex align-items-center w-100">
                  <p className="m-0">{item.name}</p>
                  <div className="dashed flex-grow-1 mx-2"></div>
                  <p className="m-0">{item.price}</p>
                </div>
                <p className="descricao">{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

        <div className="footer" >
            <img className='img-logo' src="images/padrela-logo.png" alt="" />
            <span className="judson">PADRELA</span>
            <img className="wport-logo" src="images/wport-logo.png" alt="" />
        </div>
    </DivHead>
  );
}
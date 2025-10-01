import styled from "styled-components";
import { BannerCardapio } from "../components/BannerCardapio";
import { ContentCardapio } from "../components/ContentCardapio";


const DivHead = styled.div`
`;

export function Cardapio() {
    return (
        <>
            <DivHead>
               <BannerCardapio/>
               <ContentCardapio/>
            </DivHead>
        </>
    );
}
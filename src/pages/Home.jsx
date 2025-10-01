import styled from "styled-components";
import { BannerTop } from "../componets/BannerTop";
import { ContentPadrela } from "../componets/ContentPadrela";
import { ContentServimos } from "../componets/ContentServimos";
import { InfoPadrela } from "../componets/InfoPadrela";

const DivHead = styled.div`
`;

export function Home() {
    return (
        <>
            <DivHead>
               <BannerTop/>
               <ContentPadrela/>
               <ContentServimos/>
               <InfoPadrela/>
            </DivHead>
        </>
    );
}
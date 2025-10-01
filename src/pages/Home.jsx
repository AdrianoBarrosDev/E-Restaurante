import styled from "styled-components";
import { BannerTop } from "../components/BannerTop";
import { ContentPadrela } from "../components/ContentPadrela";
import { ContentServimos } from "../components/ContentServimos";
import { InfoPadrela } from "../components/InfoPadrela";

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
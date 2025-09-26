import styled from "styled-components";
import { BannerTop } from "../componets/BannerTop";

const DivHead = styled.div`
`;

export function Home() {
    return (
        <>
            <DivHead>
               <BannerTop/>
            </DivHead>
        </>
    );
}
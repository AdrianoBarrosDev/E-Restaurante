import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cardapio } from "../pages/Cardapio";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cardapio' element={<Cardapio />}/>
        </Routes>
    );
}
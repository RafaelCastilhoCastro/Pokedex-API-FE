import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { PokemonDetails } from "./Pages/Detalhes/PokemonDetails";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Pokedex } from "./Pages/Pokedex"


export function RoutesComponent() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/pokedex" element={<Pokedex/>}/>
                <Route path="/pokemon_details/:name" element={<PokemonDetails/>} />
            </Routes>
        </BrowserRouter>
    )
}
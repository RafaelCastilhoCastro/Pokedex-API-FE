import React, {useContext} from "react";
import { Header } from "../../Header/Header";
import {BotoesPaginacao, PokeListContainer} from "./styled"
import { Card } from "../../Card/Card";
import { GlobalStateContext } from "../../../Global/GlobalStateContext";
import { goToPokedex  } from "../../Coordinator"
import { useNavigate } from "react-router-dom";
import { Botao } from "../../Header/Styled";
import {BiFirstPage} from "react-icons/bi"
import {BiLastPage} from "react-icons/bi"

export function HomePage() {
    const navigate = useNavigate()

    const {pokemons, nextPage, previousPage} = useContext(GlobalStateContext)
    
    return (
        <>
            <Header >
                <Botao onClick={()=>goToPokedex(navigate("/pokedex"))}> Pokedéx </Botao>
                Lista de Pokemons
            </Header>
            <BotoesPaginacao>
                <button onClick={previousPage}> <BiFirstPage size="35px" /> Anterior </button>
                <button onClick={nextPage}> Próximo <BiLastPage size="35px" /> </button>
            </BotoesPaginacao>
            <PokeListContainer> 
                {
                pokemons&&pokemons.map((poke)=>{
                    return <Card key={poke.name} pokemon={poke}/>
                })
                }   
            </PokeListContainer>
        </>
    )
}
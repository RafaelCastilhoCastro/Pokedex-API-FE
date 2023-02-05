import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { ButtonsContainer, PokeCardContainer, PokeImg, ImgContainer, BotaoIcones, BotaoTexto } from "./Styled"
import { goToDetails } from "../Coordinator"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import {RiAddFill} from 'react-icons/ri'
import {BsTrash} from 'react-icons/bs'


export function Card({pokemon}){
    const navigate = useNavigate()
    const { addOrRemoveFromPokedex, pokedex } = useContext(GlobalStateContext)
    const [onPokedex, setOnPokedex] = useState()

    const verificaPokedex = () => {
        setOnPokedex( pokedex.find( personagem => personagem.name === pokemon.name) )

    }
    useEffect(() => {
        verificaPokedex()
    }, [pokedex])

console.log(pokemon);
    return (
        <PokeCardContainer type={pokemon?.types[0].type.name}>
        <ImgContainer  type={pokemon?.types[0].type.name}>
            <PokeImg
                src={pokemon.sprites && pokemon.sprites.other.home.front_default}
                alt={pokemon.name}
                onClick={()=>goToDetails(navigate, pokemon.name)}
            />
        </ImgContainer>
        <ButtonsContainer>
            <BotaoIcones type={pokemon?.types[0].type.name} onClick={() => addOrRemoveFromPokedex(pokemon.name)}>
                {onPokedex?  <BsTrash size="30px" /> : <RiAddFill size="35px"/>}
            </BotaoIcones>
            <BotaoTexto type={pokemon?.types[0].type.name} onClick={()=>goToDetails(navigate, pokemon.name)}>
                Detalhes
            </BotaoTexto>
        </ButtonsContainer>
        </PokeCardContainer>)
}
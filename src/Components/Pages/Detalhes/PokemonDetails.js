import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { DivDados, DivDetalhes, DivImagemCostas, DivImagemFrontal, DivImagens,  DivMovimentos,  DivTipos } from "./Style"
import { BiArrowBack } from 'react-icons/bi'
import { Header } from "../../Header/Header";
import { Botao, ButtonIcones } from "../../Header/Styled"
import { GlobalStateContext } from "../../../Global/GlobalStateContext"

export const PokemonDetails=()=>{
    const navigate=useNavigate()
    const param=useParams()
    const [detalhes, setDetalhes]=useState()
    const { addOrRemoveFromPokedex, pokedex } = useContext(GlobalStateContext)
    const [onPokedex, setOnPokedex] = useState()

    useEffect(()=>{
        requisicaoDetalhes()
    }, [])

    useEffect(() => {
        verificaPokedex()
    }, [pokedex])


    const verificaPokedex = () => {
        setOnPokedex( pokedex.find( pokemon => pokemon.name === param.name) )
    }

    function requisicaoDetalhes(){
        const UrlPokemon= `https://pokeapi.co/api/v2/pokemon/${param.name}`

            axios.get(UrlPokemon).then((response)=>{
            setDetalhes(response.data)
            console.log(response.data)
        })
    }
    const voltar =()=>{
        navigate(-1)
    }

    return(
        <>
            <Header type={detalhes?.types[0].type.name}>
                <ButtonIcones 
                    type={detalhes?.types[0].type.name}
                    onClick={voltar}>
                <BiArrowBack size="40px" /></ButtonIcones>
                    {detalhes?.name[0].toUpperCase(0) + detalhes?.name.substr(1)} 
                <Botao 
                    type={detalhes?.types[0].type.name}
                    onClick={() => addOrRemoveFromPokedex(detalhes.name)}>
                    {!onPokedex ? "Adicionar" : "Remover"} da pokedex
                </Botao>
            </Header>
            <DivDetalhes type={detalhes?.types[0].type.name}>
                <DivImagens>
                    <DivImagemFrontal type={detalhes?.types[0].type.name}>
                        <h1>Imagem frontal:</h1>
                        <img src={detalhes?.sprites.other.home.front_default} alt={detalhes?.name} />
                    </DivImagemFrontal>
                    <DivImagemCostas type={detalhes?.types[0].type.name}>
                        <h1>  Imagem de costas: </h1>
                        <img src={detalhes?.sprites.back_default} alt={detalhes?.name}/>
                    </DivImagemCostas>
                </DivImagens>
                <DivDados type={detalhes?.types[0].type.name}>
                    <h1>Dados:</h1>
                    <p>Experiência: {detalhes?.base_experience}</p>   
                    <p>XP: {detalhes?.stats[0].base_stat}</p>
                    <p>Ataque: {detalhes?.stats[1].base_stat}</p>
                    <p>Defesa: {detalhes?.stats[2].base_stat}</p>
                    <p>Ataque especial: {detalhes?.stats[3].base_stat}</p>
                    <p>Defesa especial: {detalhes?.stats[4].base_stat}</p>
                    <p>Velocidade: {detalhes?.stats[5].base_stat}</p>
                </DivDados>
                <DivTipos type={detalhes?.types[0].type.name} >
                        {detalhes?.types.length > 0 ?
                        detalhes?.types.map((types, index)=>{
                            return(
                                <p key={index}> Tipo: {types.type.name}</p>
                            )
                        })
                        :
                        <p>O pokemon não possui imagens</p>
                    }

                </DivTipos>
                <DivMovimentos type={detalhes?.types[0].type.name}>
                    <h1>Movimentos: </h1>
                    {detalhes?.moves.length > 0 ?
                    detalhes?.moves.map((move, index)=>{
                        return(
                            <p key={index}> {move.move.name}</p>

                        )
                    })
                    :
                    <p>O pokemon não possui movimentos</p>
}
                </DivMovimentos>
            </DivDetalhes>
        </>
    )
}
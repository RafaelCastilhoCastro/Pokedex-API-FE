import axios from "axios"
import React, { useEffect, useState } from "react"
import { baseUrl } from "../Components/Constants"
import { GlobalStateContext } from "./GlobalStateContext"
import { toast } from 'react-toastify';

export const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pagination, setPagination] = useState(0)
    
    // Keep pokedex items after refreshing the browser
    const [pokedex, setPokedex] = useState(() => {
        const stored = localStorage.getItem('pokedex')
        const initialValue = JSON.parse(stored)
        return initialValue || []
    })
    useEffect(() =>{
        localStorage.setItem("pokedex", JSON.stringify(pokedex))
    }, [pokedex])

    // Pagination control
    useEffect(()=>{
        getPokemonNames()
    },[pagination])

    useEffect(()=>{
        const newList = []
        pokemonNames.forEach((item)=>{
            axios.get(`${baseUrl}${item.name}`)
            .then((response)=>{
                newList.push(response.data)
                if(newList.length === 30){
                    const orderedList = newList.sort((a, b) =>{
                        return a.id - b.id
                    })
                    setPokemons(orderedList)
                }
            })
            .catch((error)=> console.log(error.message))
        })
    },[pokemonNames])

    const getPokemonNames = ()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${pagination}`)
        .then((response)=> setPokemonNames(response.data.results))
        .catch((error)=> console.log(error.message))
    }

    const addOrRemoveFromPokedex = (name) => {
        let newPokemon = pokemons.find( pokemon => pokemon.name === name)
        let onPokedex = pokedex.find ( pokemon => newPokemon.name === pokemon.name )

        if (!onPokedex) {
            setPokedex([...pokedex, newPokemon])
            toast.success('Pokemon adicionado à Pokedéx!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }else{
            let newPokedex = pokedex.filter(e => e !== newPokemon)
            setPokedex(newPokedex)
            toast.warn('Pokemon removido da Pokedéx!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
        }
    }

    const nextPage = () => {
        setPagination(pagination+30)
    }

    const previousPage = () => {
        if (pagination > 0) {
            setPagination(pagination-30)
        }
    }

    const data = {pokemons, setPokemons, pokedex,
                setPokedex, addOrRemoveFromPokedex,
                nextPage, previousPage}
    
    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
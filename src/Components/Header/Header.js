import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { TagHeader } from "./Styled"

export const Header = (props)=>{


    const navigate = useNavigate()

    return (
        <TagHeader type={props.type} elementos={props.children}>
            {props.children[0]}
            <h1>{props.children[1]}</h1>
            {props.children[2]}
        </TagHeader>)
}
import styled from "styled-components";

export const Header=styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100vw;
    min-height: 11vh;

    h1 {
        font-family: 'Pokemon Solid', sans-serif;
        font-size: 40px;
        font-weight: 100;
        font-size: 35px;


        color: ${(props)=>{
        if(props.type === "electric"){
            return "#FFF700"
        }
        else if (props.type === "water"){
            return "#005570"
        }
        else if (props.type === "fire"){
            return "#ff5e20"
        }
        else if (props.type === "grass"){
            return "#104810"
        }
        else if (props.type === "fairy"){
            return "#e75e7c"
        }
        else if (props.type === "flying"){
            return "#7758d5"
        }
        else if (props.type === "fighting"){
            return "#600904"
        }
        else if (props.type === "poison"){
            return "#620562"
        }
        else if (props.type === "psychic"){
            return "#c1265f"
        }
        else if (props.type === "ice"){
            return "#0aa1a1"
        }
        else if (props.type === "dark"){
            return "#48250d"
        }
        else if (props.type === "dragon"){
            return "#3e1f89"
        }
        else if (props.type === "steel"){
            return "#7d7d93"
        }
        else if (props.type === "ghost"){
            return "#462d70"
        }
        else if (props.type === "ground"){
            return "#b59335"
        }
        else if (props.type === "bug"){
            return "#958d00"
        }
        else if (props.type === "rock"){
            return "#816902"
        }
        else if  (props.type === "normal") {
            return "#6456278a" 
        }
        else{
            return "white"
        }
    }}

    }

    background-color: ${(props)=>{
        if(props.type === "electric"){
            return "#F5CA00"
        }
        else if (props.type === "water"){
            return "#3aa4c7"
        }
        else if (props.type === "fire"){
            return "orange"
        }
        else if (props.type === "grass"){
            return "green"
        }
        else if (props.type === "fairy"){
            return "#EE99AC"
        }
        else if (props.type === "flying"){
            return "#A890F0"
        }
        else if (props.type === "fighting"){
            return "#b31d15"
        }
        else if (props.type === "poison"){
            return "#A040A0"
        }
        else if (props.type === "psychic"){
            return "#F85888"
        }
        else if (props.type === "ice"){
            return "#7ED9D9"
        }
        else if (props.type === "dark"){
            return "#62412a"
        }
        else if (props.type === "dragon"){
            return "#7445e5"
        }
        else if (props.type === "steel"){
            return "#B8B8D0"
        }
        else if (props.type === "ghost"){
            return "#705898"
        }
        else if (props.type === "ground"){
            return "#E0C068"
        }
        else if (props.type === "bug"){
            return "#c7c154"
        }
        else if (props.type === "rock"){
            return "#B8A038"
        }
        else if  (props.type === "normal") {
            return "#9f8f5bd1" 
        }
        else{
            return "#68A090"
        }
    }}

`

export const DivDetalhes=styled.div`
    display: flex;
    height: 89vh;
    max-width: 100vw;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: 280px) and (max-width: 899px){
        flex-direction: row;
        height: 100%;
    }

    background: ${(props)=>{
        if(props.type === "electric"){
            return "#fff20369"
        }
        else if (props.type === "water"){
            return "lightblue"
        }
        else if (props.type === "fire"){
            return "#ffc966"
        }
        else if (props.type === "grass"){
            return "#7ebf7e"
        }
        else if (props.type === "fairy"){
            return "pink"
        }
        else if (props.type === "flying"){
            return "#c9baf5"
        }
        else if (props.type === "fighting"){
            return "#e53a3a"
        }
        else if (props.type === "poison"){
            return "#C183C1"
        }
        else if (props.type === "psychic"){
            return "#FA92B2"
        }
        else if (props.type === "ice"){
            return "#BCE6E6"
        }
        else if (props.type === "dark"){
            return "#705848"
        }
        else if (props.type === "dragon"){
            return "#A27DFA"
        }
        else if (props.type === "steel"){
            return "#dddded"
        }
        else if (props.type === "ghost"){
            return "#8d74a1"
        }
        else if (props.type === "ground"){
            return "#EBD69D"
        }
        else if (props.type === "bug"){
            return "#c7c154c4"
        }
        else if (props.type === "rock"){
            return "#D1C17D"
        }
        else if  (props.type === "normal") {
            return "#9f8f5b8a" 
        }
        else{
            return "#white"
        }
    }}

`
export const DivImagens=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 85vh;
    width: 20%;
    margin: 1vh 0 0 8vw;
    @media (min-width: 900px) and (max-width: 1460px){
        margin-top: 10vh;
        margin-bottom: 3vh;
    }
    @media (min-width: 280px) and (max-width: 899px){
        width: 80%;
    }

    img{
         width: 30vh;
        -webkit-transform: scale(1);
        transform: scale(1);
        transition: .6s ease;
    
        :hover{
            color: black;
            -webkit-transform: scale(1.3);
            transform: scale(1.3);
            transition: .6s ease;
        }
        @media (min-width: 900px) and (max-width: 1460px){
            width: 20vw;
        }
        @media (min-width: 280px) and (max-width: 899px){
            max-width: 30vw;
        }
}

    h1{
        font-family: 'Rajdhani', sans-serif;
        color: white;
        margin-top: 2vh;
        @media (min-width: 900px) and (max-width: 1460px){
            font-size: 27px;
        }
        @media (min-width: 400px) and (max-width: 640px){
            font-size: 25px;
        }
        @media (min-width: 280px) and (max-width: 399px){
            font-size: 20px;
        }
    }
`

export const DivImagemFrontal=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 35vh;
    width: 100%;
    border: 2px solid white;
    margin-bottom: 2vh;
    border-radius: 15px;

    img{
        margin-bottom: 5vh;
        width: 25vh;
        :hover{
             transform: scale(1.3);
             transition: .6s ease;
        }
    }
    @media (min-width: 900px) and (max-width: 1460px){
        width: 25vw;
    }
    @media (min-width: 280px) and (max-width: 899px){
    }

    background-color: ${(props)=>{
        if(props.type === "electric"){
            return "#F5CA00"
        }
        else if (props.type === "water"){
            return "#3aa4c7"
        }
        else if (props.type === "fire"){
            return "orange"
        }
        else if (props.type === "grass"){
            return "green"
        }
        else if (props.type === "fairy"){
            return "#EE99AC"
        }
        else if (props.type === "flying"){
            return "#A890F0"
        }
        else if (props.type === "fighting"){
            return "#b31d15"
        }
        else if (props.type === "poison"){
            return "#A040A0"
        }
        else if (props.type === "psychic"){
            return "#F85888"
        }
        else if (props.type === "ice"){
            return "#7ED9D9"
        }
        else if (props.type === "dark"){
            return "#62412a"
        }
        else if (props.type === "dragon"){
            return "#7445e5"
        }
        else if (props.type === "steel"){
            return "#B8B8D0"
        }
        else if (props.type === "ghost"){
            return "#705898"
        }
        else if (props.type === "ground"){
            return "#E0C068"
        }
        else if (props.type === "bug"){
            return "#c7c154c4"
        }
        else if (props.type === "rock"){
            return "#B8A038"
        }
        else if  (props.type === "normal") {
            return "#9f8f5b8a" 
        }
        else{
            return "#white"
        }
    }}
`

export const DivImagemCostas=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 35vh;
    width: 100%;
    border: 2px solid white;
    margin-bottom: 2vh;
    border-radius: 15px;
    img{
        width: 30vh;

        :hover{
             transform: scale(1.2);
             transition: .6s ease;
        }
    }
    @media (min-width: 900px) and (max-width: 1460px){
        width: 25vw;
    }
    
    background-color: ${(props)=>{
        if(props.type === "electric"){
            return "#F5CA00"
        }
        else if (props.type === "water"){
            return "#3aa4c7"
        }
        else if (props.type === "fire"){
            return "orange"
        }
        else if (props.type === "grass"){
            return "green"
        }
        else if (props.type === "fairy"){
            return "#EE99AC"
        }
        else if (props.type === "flying"){
            return "#A890F0"
        }
        else if (props.type === "fighting"){
            return "#b31d15"
        }
        else if (props.type === "poison"){
            return "#A040A0"
        }
        else if (props.type === "psychic"){
            return "#F85888"
        }
        else if (props.type === "ice"){
            return "#7ED9D9"
        }
        else if (props.type === "dark"){
            return "#62412a"
        }
        else if (props.type === "dragon"){
            return "#7445e5"
        }
        else if (props.type === "steel"){
            return "#B8B8D0"
        }
        else if (props.type === "ghost"){
            return "#705898"
        }
        else if (props.type === "ground"){
            return "#E0C068"
        }
        else if (props.type === "bug"){
            return "#c7c154c4"
        }
        else if (props.type === "rock"){
            return "#B8A038"
        }
        else if  (props.type === "normal") {
            return "#9f8f5b8a" 
        }
        else{
            return "#68A090"
        }
    }}
`

export const DivDados=styled.div`
    display: flex;
    flex-direction: column;
    height: 58vh;
    width: 20%;
    border: 2px solid white;
    border-radius: 15px;
    @media (min-width: 900px) and (max-width: 1460px){
        width: 30%;
        margin-top: 10vh;
        margin-left: 2vh;
    }
    @media (min-width: 280px) and (max-width: 899px){
        width: 65%;
        margin-top: auto;
        margin-left: 5vh;
    }

    h1{
        font-family: 'Rajdhani', sans-serif;
        color: white;
        text-align: center;
        padding: 2vh 0 0.5vh 0;
        border-bottom: 1px dotted white;
    }

    p{
        font-family: 'Rajdhani', sans-serif;
        margin-left: 20px;
        font-size: 25px;
        color: white;
        padding-top: 3vh;
    }

    background-color: ${(props)=>{
        if(props.type === "electric"){
            return "#F5CA00"
        }
        else if (props.type === "water"){
            return "#3aa4c7"
        }
        else if (props.type === "fire"){
            return "orange"
        }
        else if (props.type === "grass"){
            return "green"
        }
        else if (props.type === "fairy"){
            return "#EE99AC"
        }
        else if (props.type === "flying"){
            return "#A890F0"
        }
        else if (props.type === "fighting"){
            return "#b31d15"
        }
        else if (props.type === "poison"){
            return "#A040A0"
        }
        else if (props.type === "psychic"){
            return "#F85888"
        }
        else if (props.type === "ice"){
            return "#7ED9D9"
        }
        else if (props.type === "dark"){
            return "#62412a"
        }
        else if (props.type === "dragon"){
            return "#7445e5"
        }
        else if (props.type === "steel"){
            return "#B8B8D0"
        }
        else if (props.type === "ghost"){
            return "#705898"
        }
        else if (props.type === "ground"){
            return "#E0C068"
        }
        else if (props.type === "bug"){
            return "#c7c154c4"
        }
        else if (props.type === "rock"){
            return "#B8A038"
        }
        else if  (props.type === "normal") {
            return "#9f8f5b8a" 
        }
        else{
            return "#68A090"
        }
    }}
    
`

export const DivTipos=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2vh;
    width: 20%;
    border: 2px solid white;
    border-radius: 15px;
    height: auto;
    margin: 8vh 0 1vh 0;


    @media (min-width: 900px) and (max-width: 1460px){
        width: 30%;
        height: 10vh;
        margin-top: 2vh;
        margin-left: 2vh;
    }
    @media (min-width: 280px) and (max-width: 899px){
        width: 65%;
        margin-top: 2vh;
        margin-left: 5vh;
    }

    p{
        margin-left: 1vw;
        font-family: 'Rajdhani', sans-serif;
        font-size: 25px;
        color: white;
        text-align: start;
    }

    background-color: ${(props)=>{
        if(props.type === "electric"){
            return "#F5CA00"
        }
        else if (props.type === "water"){
            return "#3aa4c7"
        }
        else if (props.type === "fire"){
            return "orange"
        }
        else if (props.type === "grass"){
            return "green"
        }
        else if (props.type === "fairy"){
            return "#EE99AC"
        }
        else if (props.type === "flying"){
            return "#A890F0"
        }
        else if (props.type === "fighting"){
            return "#b31d15"
        }
        else if (props.type === "poison"){
            return "#A040A0"
        }
        else if (props.type === "psychic"){
            return "#F85888"
        }
        else if (props.type === "ice"){
            return "#7ED9D9"
        }
        else if (props.type === "dark"){
            return "#62412a"
        }
        else if (props.type === "dragon"){
            return "#7445e5"
        }
        else if (props.type === "steel"){
            return "#B8B8D0"
        }
        else if (props.type === "ghost"){
            return "#705898"
        }
        else if (props.type === "ground"){
            return "#E0C068"
        }
        else if (props.type === "bug"){
            return "#c7c154c4"
        }
        else if (props.type === "rock"){
            return "#B8A038"
        }
        else if  (props.type === "normal") {
            return "#9f8f5b8a" 
        }
        else{
            return "#68A090"
        }
    }}
`

export const DivMovimentos=styled.div`
    display: flex;
    flex-direction: column;
    height: 72vh;
    width: 20%;
    border: 2px solid white;
    border-radius: 15px;
    overflow-y: auto;
    margin-bottom: 2vh;
    @media (min-width: 900px) and (max-width: 1460px){
        width: 30%;
        height: 70vh;
    }
    @media (min-width: 280px) and (max-width: 899px){
        width: 65%;
        margin-top: 2vh;
        margin-left: 5vh;
    }

    ::-webkit-scrollbar-thumb{
        border-radius: 5px;
        background-color: white;
    }
    ::-webkit-scrollbar{
        width: 10px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color:${(props)=>{
        if(props.type === "electric"){
            return "#ff9f0e"
        }
        else if (props.type === "water"){
            return "#005570"
        }
        else if (props.type === "fire"){
            return "#ff5e20"
        }
        else if (props.type === "grass"){
            return "#104810"
        }
        else if (props.type === "fairy"){
            return "#e75e7c"
        }
        else if (props.type === "flying"){
            return "#7758d5"
        }
        else if (props.type === "fighting"){
            return "#600904"
        }
        else if (props.type === "poison"){
            return "#620562"
        }
        else if (props.type === "psychic"){
            return "#c1265f"
        }
        else if (props.type === "ice"){
            return "#0aa1a1"
        }
        else if (props.type === "dark"){
            return "#48250d"
        }
        else if (props.type === "dragon"){
            return "#3e1f89"
        }
        else if (props.type === "steel"){
            return "#7d7d93"
        }
        else if (props.type === "ghost"){
            return "#462d70"
        }
        else if (props.type === "ground"){
            return "#b59335"
        }
        else if (props.type === "bug"){
            return "#958d00"
        }
        else if (props.type === "rock"){
            return "#816902"
        }
        else if  (props.type === "normal") {
            return "#6456278a" 
        }
        else{
            return "white"
        }
    }}
    }

    h1{
        font-family: 'Rajdhani', sans-serif;
        text-align: center;
        color: white;
        padding: 2vh 0 0.5vh 0;
        border-bottom: 1px dotted white;
    }
    p{
        font-family: 'Rajdhani', sans-serif;
        font-size: 25px;
        color: white;
        text-align: center;
        margin-top: 2vh;
    }

    background-color: ${(props)=>{
        if(props.type === "electric"){
            return "#F5CA00"
        }
        else if (props.type === "water"){
            return "#3aa4c7"
        }
        else if (props.type === "fire"){
            return "orange"
        }
        else if (props.type === "grass"){
            return "green"
        }
        else if (props.type === "fairy"){
            return "#EE99AC"
        }
        else if (props.type === "flying"){
            return "#A890F0"
        }
        else if (props.type === "fighting"){
            return "#b31d15"
        }
        else if (props.type === "poison"){
            return "#A040A0"
        }
        else if (props.type === "psychic"){
            return "#F85888"
        }
        else if (props.type === "ice"){
            return "#7ED9D9"
        }
        else if (props.type === "dark"){
            return "#62412a"
        }
        else if (props.type === "dragon"){
            return "#7445e5"
        }
        else if (props.type === "steel"){
            return "#B8B8D0"
        }
        else if (props.type === "ghost"){
            return "#705898"
        }
        else if (props.type === "ground"){
            return "#E0C068"
        }
        else if (props.type === "bug"){
            return "#c7c154c4"
        }
        else if (props.type === "rock"){
            return "#B8A038"
        }
        else if  (props.type === "normal") {
            return "#9f8f5b8a" 
        }
        else{
            return "#68A090"
        }
    }}
`

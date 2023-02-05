import styled from "styled-components";

export const PokeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 10vw;
    min-height: 35vh;
    box-shadow: 0px 3px 17px 5px rgba(0,0,0,0.5);
    margin: 35px 5px 8px 5px;
    border-radius: 20px;
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
            return "#9f8f5b" 
        }
        else{
            return "#white"
        }
    }};

    @media (min-width: 1100px) and (max-width: 600px){
        width: 15vw;
        min-height: 35vh;
    }

    @media (min-width: 880px) and (max-width: 1099px){
        width: 20vw;
        height: 10vh;
    }
    @media (min-width: 630px) and (max-width: 879px){
        min-width: 40vw;
    }
    @media (min-width: 260px) and (max-width: 630px){
        width: 70vw;
    }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const PokeImg = styled.img`
  min-width: 15vw;
  height: 18vw;
  @media (min-width: 900px) and (max-width: 1460px){
        width: 15vw;
        height: 18vw;
    }
    @media (min-width: 880px) and (max-width: 1099px){
        width: 20vw;
        height: 23vw;
    }
    @media (min-width: 630px) and (max-width: 879px){
        width: 35vw;
        height: 38vw;
    }
    @media (min-width: 260px) and (max-width: 630px){
        width: 60vw;
        height: 65vw;
    }
    :hover{
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        transition: .6s ease;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
`;

export const BotaoIcones=styled.button`
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;

    @media (min-width: 200px) and (max-width: 699px){
        margin-bottom: 5vh;
    }

    :hover{
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
    }};
        transition: .5s ease-in;
    }

`

export const BotaoTexto=styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-family: 'Rajdhani', sans-serif;
  font-size: 22px;
  color: white;
  padding: 0 1vh;
  border-radius: 10px;
  @media (min-width: 200px) and (max-width: 699px){
        margin-bottom: 5vh;
    }


    :hover{
      border-radius: 10px;
      padding: 0 1vh;
      color: white;
      transition: .5s ease-in;
      background-color: ${(props)=>{
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
    }};

    }

`
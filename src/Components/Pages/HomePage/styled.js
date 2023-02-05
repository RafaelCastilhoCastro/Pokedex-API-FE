import styled from "styled-components";

export const PokeListContainer = styled.main`
    display: flex;
    width: 100%;
    min-height: 92vh;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #90baee6e;

    P{
        font-family: 'Rajdhani', sans-serif;
        font-size: 30px;
        color: #1165bd;
    }
`;

export const BotoesPaginacao =styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: #90baee6e;
    padding-top: 30px;

    button{
        font-family: 'Rajdhani', sans-serif;
        font-size: 20px;
        background-color: transparent;
        border: none;
        margin-right: 120px;
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #004287;
        :nth-child(1){
            margin-right: 2vh;
        }

        :hover{
            color: #1165bd;
        }
   }

`


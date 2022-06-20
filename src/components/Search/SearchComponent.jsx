/* eslint-disable no-throw-literal */
import { useEffect, useState } from "react"
import styled from "styled-components"
import search from "../../assets/icons/icon-search.svg"

export const BoxContainer = styled.div `
    max-width: 700px;
    margin: auto;
    display: flex;
    background-color: #2b3b66 ;
    border-radius: 15px;
    padding: 10px;
    input{
        background-color: transparent;
        border: 0;
        width: 100%;
        outline: none;
        color: #FFF;
        font-size: 20px;
    }
    img{
        padding: 10px;
        cursor: pointer;
    }
    button{
        display: block;
        margin-right: 5px;
        border-radius: 5px;
        cursor: pointer;
        background-color: #0078FE;
        color: #FFF;
        padding: 0 15px;
        border: 0;
        transition: 0.4s all ease-in;
        ::before{
            content: "Procurar";
            font-size: 1.2em;
        }
        :hover{
            background-color: #045dc4;
        }
    }
    @media screen and (max-width: 768px){
         max-width: 600px;
         margin: auto 20px;
        img{
            width: 40px;
        }
         input::placeholder{
            font-size: 16px;
         }
         button{
            font-size: 12px;
            padding: 0 15px;
         }
    }
    @media screen and (max-width: 400px){
        input{
            font-size: 15px;
        }
        button{
            font-size: 10px;
            padding: 0 10px;
            margin-right: 0;
         }
    }
`
const SearchComponent = ({onAdd}) =>{
    const [user, setUser] = useState('octocat');

    useEffect(()=>{
        handleClickSearch();
        setUser('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleInput = (e) =>{
        return setUser(e.target.value)
    }

    const handleClickSearch =  () =>{
        if(user){
            onAdd(user);
        }
        else{
            onAdd('')
            alert('Digite algo.')
        }       
    }

    return(
        <BoxContainer>
            <img src={search} alt="procurar" />
            <input type="text" onChange={handleInput} placeholder="Digite um usuário"/>
            <button onClick={handleClickSearch}></button> 
        </BoxContainer>
    )
}
export default SearchComponent;
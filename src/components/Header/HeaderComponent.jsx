import React, { useState } from 'react'
import styled from "styled-components";

export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    color: #fff;
`
export const ThemeContainer = styled.div `
    display: flex;
    align-items: center;
    span{
        font-size: 1.2em;
        font-family:Arial, Helvetica, sans-serif;
    }
` 
export const Logo = styled.div `
    padding: 10px;
    font-size: 1.3em;
    font-family: Arial, Helvetica, sans-serif;
`
export const Button = styled.button `
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 15px;
`
 const HeaderComponent = () =>{
    const [theme, setTheme] = useState(true);
    const [lightDark, setLightDark] = useState('LIGHT');

    const handleClickTheme = () =>{
       if(theme){
            setTheme(false)
            setLightDark('DARK')
       }else{
            setTheme(true)
            setLightDark('LIGHT')
       }
    }

    return(
        <Header>
            <Logo>DevFind</Logo>
            <ThemeContainer>
                <span>{lightDark}</span>
                <Button onClick={handleClickTheme}></Button>
            </ThemeContainer>
        </Header>
    )
}

export default HeaderComponent;
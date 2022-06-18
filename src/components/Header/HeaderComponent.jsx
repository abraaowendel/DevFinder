import styled from "styled-components";

export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    color: #fff;
`

export const Logo = styled.div `
    padding: 10px;
    font-size: 1.6em;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
   
`
 const HeaderComponent = () =>{
    return(
        <Header>
            <Logo>DevFinder</Logo>
        </Header>
    )
}

export default HeaderComponent;
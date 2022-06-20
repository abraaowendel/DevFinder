import styled from "styled-components";

export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    max-width: 1140px;
    margin: auto;
    color: #fff;
`

export const Logo = styled.div `
    padding: 0;
    font-size: 1.6em;
    font-weight: 400;   
`
 const HeaderComponent = () =>{
    return(
        <Header>
            <Logo>devFinder</Logo>
        </Header>
    )
}

export default HeaderComponent;
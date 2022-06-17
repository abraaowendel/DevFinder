import styled from "styled-components";
import Company from "../../assets/icons/icon-company.svg";
import Twitter from "../../assets/icons/icon-twitter.svg";
import WebSite from "../../assets/icons/icon-website.svg";
import Location from "../../assets/icons/icon-company.svg";

export const Container = styled.div `
    display: flex;
    min-height: 380px;
    max-width: 600px;
    margin: auto;
    padding: 30px 35px;
    margin: 20px auto;
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: #1F2A48;
    font-family: Arial, Helvetica, sans-serif;
`
export const LeftSide = styled.div `
    width: 117px;
    height: 117px;
    margin-right: 30px;
    img{
        width: 100%;
        border-radius: 50%;
    }
`
export const RightSide = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const Info = styled.div `
    display: flex;
    justify-content: space-between;
    color: #fff;
    h2{
        font-size: 24px;
    }
    a{
        display: block;
        color: #0078FE;
        font-size: 1em;
        letter-spacing: 2px;
        text-decoration: none;
        margin: 10px 0 15px;
        :hover{
            text-decoration: underline;
        }
    }
    p{
        margin-bottom: 20px;
    }
`
export const Repositories = styled.div `
    display: flex;
    justify-content: space-between;
    background-color: #141C2F;
    padding: 10px 20px;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 20px;
    h4{
        color: #cece;
        font-weight: 100;
        margin: 10px 0;
    }
    p{
        color: #fff;
        font-weight: 600;
        font-size: 1.1em;
    }
`
export const Social = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`
export const SocialSides = styled.div `
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        align-items: center;
        margin: 5px 0;
    }
     p{
        letter-spacing: 2px;
        color: #fff;
        margin-left: 10px;
        font-size: 0.875em;
     }
`

const CardComponent = ({data}) =>{

    return(
        <Container>
           <LeftSide>
                <img src={data.avatar_url} alt="" />
           </LeftSide>
           <RightSide>
                <Info>
                    <div>
                        <h2>{data.name}</h2>
                        <a href={data.html_url}>@{data.login}</a>
                        <p>{data.bio}</p>
                    </div>
                    <div>
                        Entrou em 25 Jan 2021
                    </div>
                </Info>
                <Repositories>
                    <div>
                        <h4>Repositórios</h4>
                        <p>{data.public_repos}</p>
                    </div>      
                    <div>
                        <h4>Seguidores</h4>
                        <p>{data.followers}</p>
                    </div>
                    <div>
                        <h4>Seguindo</h4>
                        <p>{data.following}</p>
                    </div>
                </Repositories>
                <Social>
                    <SocialSides>
                        <div>
                          <img src={Location} alt="" />
                          <p>{data.location}</p>  
                        </div>
                        <div>
                          <img src={WebSite} alt="" />
                          <p>{data.blog}</p>  
                        </div> 
                    </SocialSides>
                    <SocialSides>
                        <div>
                          <img src={Twitter} alt="" />
                          <p>{data.twitter_username}</p>  
                        </div>
                        <div>
                          <img src={Company} alt="" />
                          <p>{data.company}</p>  
                        </div>
                    </SocialSides>
                </Social>   
           </RightSide>
        </Container>
    )
}


export default CardComponent;
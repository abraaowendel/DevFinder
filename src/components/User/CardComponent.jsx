import styled from "styled-components";
import Company from "../../assets/icons/icon-company.svg";
import Twitter from "../../assets/icons/icon-twitter.svg";
import WebSite from "../../assets/icons/icon-website.svg";
import Location from "../../assets/icons/icon-location.svg";
import React from "react";

export const Main = styled.main `
    padding: 0 20px;
`
export const Container = styled.div`
    display: grid;
    grid-template-areas: "avatar info info info"
    "avatar bio bio bio"
    "avatar repo repo repo"
    "avatar social social social";
    max-width: 700px;
    margin: 20px auto;
    padding: 45px 40px;
    background-color: #2b3b66;
    border-radius: 20px;
    overflow-x: hidden;
    min-height: 420px;
    @media screen and (max-width: 768px){
        grid-template-areas: "avatar info"
        "bio bio"
        "repo repo"
        "social social";
    }
    @media screen and (max-width: 520px){
        padding: 25px;
    }
    @media screen and (max-width: 380px){
        padding: 30px 0px 20px;
        background-color: transparent;
        grid-template-areas: "avatar"
        "info "
        "bio"
        "repo "
        "social";
    }
`

export const Avatar  = styled.div`
    grid-area: avatar;
    margin-right: 30px;
    width: 110px;
    img{
        width: 100%;
        border-radius: 50%;
    }
    @media screen and (max-width: 520px){
        width: 90px;
    }
    @media screen and (max-width: 380px){
        margin: 0 auto 20px;
    }
        
`

export const Info = styled.div `
    color: #fff;
    grid-area: info;
    display: grid;
    align-items: center;
    grid-template-areas: "nick joined"
                        "link link"
                        ;
    min-width: 400px;
    h2{
        grid-area: nick;
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 22px;
    }
    h5{
        grid-area: joined;
        text-align: end;
        color: #89919E;
    }
   
    a{
        margin: 2px 0 10px;
        grid: link;
        color: #0664df;
        text-decoration: none;
        letter-spacing: 1px;
        &:hover{
            text-decoration: underline;
        }
    }
    @media screen and (max-width: 768px){
        grid-template-areas: "nick "
                        "link"
                        "joined"
                      ;
        min-width: 250px;
 
        h5{
            text-align: start;
        }
    }
    @media screen and (max-width: 480px){
        min-width: 100px;
    }
    @media screen and (max-width: 400px){
        min-width: 0;
        h2{
            font-size: 18px;
            text-align: center;
        }
        h5{
            text-align: center;
        }
        a{
            text-align: center;
            font-size: 14px;
        }
    }
`
export const Desc = styled.div `
    grid-area: bio;

     p{
        color: #89919E;
    }
    @media screen and (max-width: 768px){
      margin-top: 30px;
      p{
        color: #fff;
      }
    }
    @media screen and (max-width: 400px){
        margin-top: 15px;
        p{
            font-size: 0.9em;
        }
    }
`
export const Repositories = styled.div `
    grid-area: repo;
    display: flex;
    justify-content: space-between;
    padding:12px 20px;
    border-radius: 10px;
    background-color: #1F2A48;
    text-align: center;
    margin: 30px 0;
    h4{
        color: #cece;
        font-weight: 400;
        font-size: 0.9em;
    }
    p{
        color: #fff;
        font-size: 1.3em;
        font-weight: 700;
    }
    @media screen and (max-width: 380px){
        padding:12px 10px;
        justify-content: space-between;
        border: 1px solid #fff;
        h4{
       
            font-size: 0.75em;
        }
        p{
            font-size: 1em;
        }
    }
`

export const Social = styled.div `
       grid-area: social;
       display: flex;
       flex-direction: column;  
       div{
            flex: 1;
            display: flex;   
            align-items: center;
            margin-bottom: 3px;
       }
       p{
        color: #fff;
        font-size: 0.875em;
        line-height: 30px;
       }
       span{
         min-width: 20px;
         margin-right: 5px;
       }
       @media screen and (max-width: 520px){
            div{
                justify-content: center;
                align-items: flex-start;
            }   
            p{
                font-size: 0.9em;
            }       
        }
`
const SocialSides = styled.div `
    @media screen and (max-width: 520px){
        display: flex;
        flex-direction: column;    
        div{
            align-items: end;
            margin-bottom: 15px;
        } 
    }
`


export const HasErro = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    color: #fff;
`

const CardComponent = ({data}) =>{
     const formatDate =  (date) =>{
        const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Maio','Jun','Jul','Ago','Set','Out','Nov','Dez'] 

        let newDate = new Date(date);
        let formattedData = newDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

        let day = formattedData.slice(0,2);
        let month = parseInt(formattedData.slice(3,5));
        let year = formattedData.slice(6,10);
        
        const formatMonth = (m) => months[m - 1];
        
        return `Entrou em ${day} ${formatMonth(month)} ${year}` 
    } 

    return(
       <Main>
            {data && 
            
            <Container>
                <Avatar>
                     <img src={data.avatar_url} alt="" />
                </Avatar>
                <Info>    
                    <h2>{data.name}</h2>
                    <h5>{formatDate(data.created_at)}</h5>
                    <a href={data.html_url}>@{data.login}</a>
                </Info>
                <Desc>
                     <p>{data.bio?data.bio:'Esse perfil não tem bio'}</p>
                </Desc>
                <Repositories>
                    <div>
                        <h4>Repositórios</h4>
                        <p>{data.public_repos}</p>
                    </div>      
                    <div>
                        <h4>Seguidores</h4>
                        <p>{data.followers} </p>
                    </div>
                    <div>
                        <h4>Seguindo</h4>
                        <p>{data.following} </p>
                    </div>
                </Repositories>
                <Social>
                    <SocialSides>
                        <div>
                            <span><img src={Location} alt="" /></span>
                            <p>{data.location?data.location:'Não disponível'}</p>  
                        </div>
                        <div>
                            <span><img src={WebSite} alt="" /></span> 
                            <p>{data.blog?data.blog:'Não disponível'}</p>  
                        </div> 
                    </SocialSides>
                    <SocialSides>
                        <div>
                            <span><img src={Twitter} alt="" /></span>
                            <p>{data.twitter_username?data.twitter_username:'Não disponível'}</p>  
                        </div>
                        <div>
                            <span><img src={Company} alt=""/></span>
                            <p>{data.company?data.company:'Não disponível'}</p>  
                        </div>
                    </SocialSides>
                </Social> 
        </Container>
        }
       

        {!data && 
            <HasErro>
                <h2>Usúario não encontrado.</h2>
            </HasErro>
        }
      </Main>
    )
}


export default CardComponent;
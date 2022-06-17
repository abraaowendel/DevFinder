import styled from "styled-components";
import { useState } from "react";
import Company from "../../assets/icons/icon-company.svg";
import Twitter from "../../assets/icons/icon-twitter.svg";
import WebSite from "../../assets/icons/icon-website.svg";
import Location from "../../assets/icons/icon-location.svg";
import React from "react";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 380px;
    max-width: 700px;
    margin: auto;
    padding: 30px;
    margin: 20px auto;
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: #1F2A48;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
`

export const LeftSide = styled.div `
    div{
        position: relative;
        margin-right: 30px;
        width: 117px;
        height: 296px;
        img{
            position: absolute;

            width: 100%;
            left: 0;
            top: ;
            border-radius: 50%;
        }
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
        color: #cece;
    }
    h5{
        font-weight: 400;
    }
`
export const Repositories = styled.div `
    display: flex;
    justify-content: space-between;
    background-color: #141C2F;
    padding: 15px 20px;
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
        letter-spacing: 1px;
        color: #fff;
        font-size: 0.85em;
     }
     span{
        min-width: 20px;
        margin-right: 10px;
     }
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
        <Container>
          {data && 
            <>
            <LeftSide>
                <div>
                    <img src={data.avatar_url} alt="" />
                </div>
            </LeftSide>
            <RightSide>
                    <Info>
                        <div>
                            <h2>{data.name}</h2>
                            <a href={data.html_url}>@{data.login}</a>
                            <p>{data.bio?data.bio:'Esse perfil não tem bio'}</p>
                        </div>
                        <div>
                            <h5>{formatDate(data.created_at)}</h5>
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
            </RightSide>
        </>
        }

        {!data && 
            <div>
                <h2>Usúario não encontrado.</h2>
            </div>
        }
        </Container>
    )
}


export default CardComponent;
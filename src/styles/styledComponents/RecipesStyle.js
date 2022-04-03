import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const Img = styled.img`
    height: 300px;
    width: 350px;
    margin: auto;
    margin-top: 1rem;
`
export const ColReceta = styled.div`
    margin: auto;
    border: 1px solid blue;
    width: max-content;
    height: max-content;
`
export const TitleRecetas = styled.h1`
    text-align: center;
    margin-bottom: 15px;
    margin-top: 15px;
    font-size: 10px;
    background-color: #F19C79;
    text-shadow: white 0 -1px;
`
export const SubTitleRecetas = styled.h2`
    margin-top: 0;
    
    text-align: center;
    padding: 0.25rem;
    text-shadow: white 0 -1px;
    background-color: #F19C79;
`
export const DivCard = styled.div`
    border: 1px solid red;
    background-color: #D9ED92;
    padding: 0.5rem;
`
export const CardChef = styled.div`
    border: 1px solid purple;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #D9ED92;
    @media only screen and (min-width: 630px) {
        flex-direction: row;
    }
`
export const ContainerChef = styled.div`
    border: 1px solid green;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 2rem;
`
export const ImgChefReceta = styled.img`
    height: 200px;
    width: 200px;
`
export const ImgChef = styled.img`
    height: 300px;
    margin-right: auto;
    margin-left: auto;
`
export const ContainerTitleChef = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const NavContainer = styled.div`
    background-color: #C4C4C4;
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const ContainerSeccionChef = styled.div`
    @media only screen and (max-width: 330px) {
        width: 100vh;
        margin: auto;
    }
`
export const ImgZonaSocial = styled.img`
    height: 400px;
    width: 400px;
`
export const CardZonaSocial = styled.div`
    background-color: #FCAC5D;
    width: max-content;
    margin: auto;
    margin-top: 2rem;
    text-align: center;
`
export const ImgUsuario = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 50%;
`
export const CardText = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const TextoReceta = styled.h3`
    font-size: 20px;
    text-align: center;
`
export const ContainerTextoReceta = styled.div`
    width: 300px;
`
export const ButtonModal = styled.button`
    position: absolute;
    top: 50%;
    padding: 50%;
`
export const ContainerRecetaPP = styled.div`
    display: flex; 
    justify-content: space-around;
    align-items: center;
`
export const CardRecetas = styled.div`
    height: 160px;
    padding: 0.75rem;
    padding-bottom: 0;
    margin-bottom: 0;
    text-align: center;
    .card-text {
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
export const ImgReceta = styled.img`
    padding: 0.25rem;
    width: 85px;
    height: 85px;
    border-radius: 50%;
    border: 2.5px solid #27A857;
`
export const ButtonParaModal = styled.button`
    background-color: none;
    &:focus {
        transform:scale(1.15);
        border-color: #ffc600;
        box-shadow: 0 0 10px #ffc600;
    }
`

export const ModalIngredientes = styled(Modal)`
    background-color:red;
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0 0 0 / 20%)!important;
}

`

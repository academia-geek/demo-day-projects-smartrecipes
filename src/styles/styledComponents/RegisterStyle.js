import styled from "styled-components";
import { VerdeLima } from "./ColoresEstilos";

export const DivRegister = styled.div`
    background-color: ${VerdeLima};

    .form-check-input {
        display: inline-block;
    }
    .form-check-input[type=checkbox] {
        border-radius: 0.25em;
        background-color: #f9f2f2;
    }
    .form-check-input:checked {
        background-color: #FF5757;
        border-color: #FF5757;
    }
    .form-check-input:focus {
        border-color: #FF5757;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(255 87 87 / 25%);
    }
    .checkAsk {
        display: flex;
        justify-content: space-evenly;
    }

    .checkAlerg {   
        display: flex;
        justify-content: space-between;
    }




    input[type=checkbox] {
        border-radius: 0.25em;
        background-color: red;
    }
   /*  input[type=checkbox]:checked {
        background-color: pink;
        border-color: violet;
    } */
    input:checked {
        background-color: #FF5757;
        border-color: #FF5757;
    }
    input:focus {
        border-color: blue;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(255 87 87 / 25%);
        border-radius: 6px;
    }



`
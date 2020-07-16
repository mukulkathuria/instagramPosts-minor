import styled from 'styled-components';

export const Inputs = styled.input`
    width:90%;
    padding:5px;
    border:0.2px solid;
    border-radius:8px;
    margin:0.7rem 0;
    :focus{
        outline:1.2px solid blue;
        border:none;
    }
`;

export const SendBtn = styled.button`
    border:none;
    background-color:inherit;
    cursor:pointer;
    padding:4px;
    svg{
        font-size:1.2em;
    }
`;
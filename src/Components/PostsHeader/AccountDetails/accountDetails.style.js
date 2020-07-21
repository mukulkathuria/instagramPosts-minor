import styled from 'styled-components';


export const AccDetails = styled.div`
    position:absolute;
    z-index:15;
    right:0;
    width:160px;
    background-color:white;
    font-size:0.8em;
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    border-radius:5px;
    line-height:2;
`;
export const User = styled.div`
    background-color:#f1f1f1;
    cursor:default !important;
`;

export const SignedAs = styled.div`
    font-size:8px;
`;
export const Logout = styled.div`
    &:hover{
        background-color:blue;
        border-radius:5px;
        color:white;
    }
`;
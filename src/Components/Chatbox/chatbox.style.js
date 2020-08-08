import styled from "styled-components";

export const MainDiv = styled.div`
    position:relative;
    background-color:rgba(var(--b3f,250,250,250),1);
    display:flex;
`;
export const DivContainer = styled.div`
    width:70%;
    margin:1% 15%;
    background-color:#ffff;
    display:flex;
    height:86vh;
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);   
`;
export const LeftContainer = styled.div`
    width:35%;
    border-right: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;
export const RightContainer = styled.div`
    display:flex;
    align-items:center;
    flex:auto;
    justify-content:center;
    div{
        text-align:center;
        margin:1.4rem 0;
    }
    .litbig{
        font-size:1.2em;
    }
    .grey{
        color:grey;
    }
    svg{
        font-size:3rem;
        font-weight:300;
    }
    button{
        background-color:rgba(var(--d69,0,149,246),1);
        padding:8px;
        color:white;
        font-weight:600;
        border:none;
        border-radius:3px;
        cursor:pointer;
    }
`;
export const DirectM = styled.div`
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:space-between;
    border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    height:4rem;
    div{
        font-weight:600;
    }
    svg{
        font-size:1.5rem;
        margin-right:8px;
        cursor:pointer;
    }
`;
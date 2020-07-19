import styled from 'styled-components';

export const AsideMain = styled.div`
    position:fixed;
    width:20rem;
    z-index:1;
    top:15%;
    right:15%;
    margin:2rem 0;
    div{
        margin:0.2em 0;
    }
`;
export const UserDiv = styled.div`
    display:flex;
    img{
        height:35px;
        width:35px;
        margin-right:8px;
    }
`;
export const SuggestDiv = styled.div`
    display:flex;
    flex-direction:column;
    .suggest{
        display:flex;
        justify-content:space-between;
        font-weight:600;
        color:grey;
        font-size:0.8em;
    }
    ul{
        list-style:none;
    }
    li{
        line-height:1.6;
    }
`;
export const TermsAndCond = styled.div`
    font-size:0.7em;
    color:grey;
    text-align:center;
    width:100%;
    a{
        text-decoration:none;
        color:inherit;
        font-weight:600;
        margin: 0 2px;
        &:hover{
            color:blue;
        }
    }
`;
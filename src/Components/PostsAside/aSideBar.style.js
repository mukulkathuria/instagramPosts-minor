import styled from 'styled-components';

export const AsideMain = styled.div`
    position:fixed;
    max-width:20rem;
    height:100%;
    z-index:1;
    top:7rem;
    right:15%;
    div{
        margin:0.2em 0;
    }
`;
export const UserDiv = styled.div`
    display:flex;
    img{
        height:50px;
        width:50px;
        margin-right:8px;
    }
`;
export const UserDetail = styled.div`
    display:flex;
    flex-direction:column;
    margin:0;
    padding:0;
    line-height:1.2;
    font-size:0.93em;
    .username{
        font-weight:600;
        &:hover{
            color:blue;
        }
    }
    .name{
        font-size:0.9em;
        color:grey;
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
        padding:10px;
    }
    li{
        line-height:1.6;
    }
`;
export const TermsAndCond = styled.div`
    font-size:0.7em;
    color:grey;
    text-align:center;
    word-wrap:break-word;
    width:100%;
    a{
        text-decoration:none;
        color:inherit;
        font-weight:600;
        margin: 0 5px;
        &:hover{
            color:blue;
        }
    }
`;
import styled from 'styled-components';

export const RecentComments = styled.div`
 display:flex;
 flex-direction:column;
`;
export const Comments = styled.div`
 a{
     text-decoration:none;
     color:inherit;
     margin-right:8px;
     font-weight:600;
     &:hover{
         color:blue;
     }
 }
`;
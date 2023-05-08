import styled from "styled-components";

 export const Container = styled.div `
   background: red ;
   height: 90px;
 `;

 export const ListIten =styled.li <{active: boolean}> ` // tipamos porque mudamos o arquivo Js para Ts
 list-style: none;
 color: ${(props)=> props.active? '#fff' : '#333' };
 font-weight: bold;
 font-size: 19px;
 cursor: pointer;
 `;
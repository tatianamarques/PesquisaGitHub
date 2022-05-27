import styled from 'styled-components';

export const HomeContainer = styled.div`
background-color: #ffddaa;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;

`;

export const Content = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`;

export const Input = styled.input`
border: 1px solid #ddd;
height: 1.5rem;
padding: 0 .5rem;
border-radius: .25rem 0 0 .25rem;

&:focus,
&:active {
    outline: none;
    box-shadow: none;
}
`;

export const Button = styled.button`
height: 1.5rem;
border: 1px solid #000;
background: #000;
color: #fff;
border-radius: 0 .25rem .25rem 0;

&:focus,
&:active {
    outline: none;
    box-shadow: none;
}
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.80rem;
  padding: 0.5rem;
  background-color: red;
  color: #fff;
  font-weight: 600;
  margin-top: 1rem;
`;

export const h1 = styled.h1 `
font-size: 30px;
margin: 0 auto;
padding-bottom: 20px;
`;



export const p = styled.p `
font-size: 15px;
padding-top: 300px;




`;
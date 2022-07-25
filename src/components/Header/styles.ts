import styled from 'styled-components';


export const Container = styled.header`
background: var(--blue);
` 


export const Content = styled.div`

max-width: 1120px;
//utilizado para centralizar a div.
margin: 0 auto;

padding: 2rem 1rem 12rem;
//rem equivale ao tamanho do font size do nosso root. Ou seja, 16 px e 160px.

display: flex;
align-items: center;
justify-content: space-between;


button {
font-size: 1rem;
color: #fff;
background: var(--blue-light);
border: 0;
padding: 0 2rem;
border-radius:  0.25rem;
height: 3rem;
//definimos a transição para durar do hover em 0.2s;
transition: filter 0.2s;

//aplicamos hover para aplicar mudança sobre o botao
&:hover {
    filter: brightness(0.9)
}

}
` 
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

// declaramos variaveis para aplicar as cores em nossos elementos.
:root{
    --background: #F0F2F5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #F0F2F5;
    --shape: #FFFFFF;
}
* {
    margin : 0;
    padding: 0;
    box-sizing: border-box;
}

//Diminuimos as fontes baseado no tamanho do dispositivo do usuario.
//font-size padrão para desktop : 16px
html {
@media (max-width:1080px){
    font-size: 93.75%; // 15 px
}

@media (max-width:720px){
    font-size: 87.5%; //14 px
}
}

// usando REM = 1rem = 16px


body {
    // aqui usamos uma propriedade do css onde declaramos na linha 5
    //uma variavel com uma estilização.
    background:  var(--background);
    // um hack usado para que as fontes fiquem mais detalhadas no chrome, e nitidas.
    -webkit-font-smoothing: antialiased;

}
// Aqui definimos onde utilizaremos a fonte que importamos, que é a Poppins.
body, input, textarea , strong button {
font-family: 'Poppins', sans-serif;
font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong {
    font-weight: 600;
}
// mudamos o cursor sobre botao
button {
    cursor:pointer ;
}

// estilos para tags com disabled
[disabled] {
opacity: 0.6;
cursor: not-allowed;
}
`;

import styled from "styled-components";

export const Container = styled.div`
  // para 3 itens do mesmo tamanho um do lado do outro usar grid.
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //espacamento entre os itens do gri
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500px;
      line-height: 3rem;
    }
    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`;

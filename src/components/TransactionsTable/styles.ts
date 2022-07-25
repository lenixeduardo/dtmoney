import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  table {
    width: 100%;
    //usado para espaçamento na table
    border-spacing: 0 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400px;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;
      //aqui declaramos que quando o td for o primeiro item, ou seja, primeiro filho aplicar:
      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green)
      }
      &.withdraw {
        color: var(--red)
    }
  };
};


`;

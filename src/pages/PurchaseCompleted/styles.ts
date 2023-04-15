import styled from 'styled-components'

export const PurchaseCompletedContainer = styled.div`
  padding: 2.5rem 10rem;

  display: flex;
  justify-content: space-around;
  align-items: end;

  img {
    width: 100%;
    max-width: 30.75rem;
  }

  & > div {
    width: auto;
    display: flex;
    flex-direction: column;

    h1 {
      font-weight: 800;
      font-size: 2rem;
      color: ${(props) => props.theme['yellow-dark']};
      margin-bottom: 0.25rem;
    }
    h3 {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
      font-stretch: 100;
      margin-bottom: 2.5rem;
    }

    & > div {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 32.875rem;
      padding: 2.5rem;
      background: linear-gradient(white, white) padding-box,
        linear-gradient(
            to right,
            ${(props) => props.theme.yellow},
            ${(props) => props.theme.purple}
          )
          border-box;
      border-radius: 6px 36px;
      border: 1px solid transparent;

      & > div {
        flex: 1;
        display: flex;
        gap: 0.75rem;
        align-items: center;

        span {
          font-size: 1rem;
        }
      }
    }
  }

  @media (max-width: 992px) {
    padding: 1rem 2rem;
  }
`

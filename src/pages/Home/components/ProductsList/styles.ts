import styled from 'styled-components'

export const ProductsListContainer = styled.div`
  padding: 0 10rem;
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  gap: 3.375rem;

  h2 {
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`

import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px 36px;

  background-color: ${(props) => props.theme['base-card']};

  img {
    margin-top: -2.25rem;
    margin-bottom: 0.75rem;
    max-width: 7.5rem;
  }

  & > h1 {
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  & > span {
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin-bottom: 2rem;
  }
`

export const ProductCategoriesContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 0.25rem;

  & > span {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    padding: 0.5rem;
    border-radius: 100px;
  }
`

export const ProductDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  & > div:first-child {
    color: ${(props) => props.theme['base-text']};
    & > span {
      font-family: 'Baloo 2', cursive;
      font-size: 1.5rem;
      font-weight: 800;
    }
  }
`

export const PurchaseDetailsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-title']};

  & > button {
    padding: 0.5rem;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};
    border: none;
    border-radius: 6px;
  }

  div {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1rem;

    gap: 0.25rem;

    background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;

    button {
      color: ${(props) => props.theme.purple};
      background-color: ${(props) => props.theme['base-button']};
      border: none;
    }
  }
`

export const ButtonWithIcon = styled.button`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

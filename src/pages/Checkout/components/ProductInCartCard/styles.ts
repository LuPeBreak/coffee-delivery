import styled from 'styled-components'

export const ProductInCartCardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  width: 100%;

  display: flex;
  align-items: center;
  padding: 0.5rem 0.25rem 1rem 0.25rem;

  img {
    margin-right: 1.25rem;
    max-width: 4rem;
  }

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > div:first-of-type {
      display: flex;
      justify-content: space-between;

      & > span {
        font-size: 1rem;

        &:first-child {
          color: ${(props) => props.theme['base-subtitle']};
        }
        &:last-child {
          font-weight: 700;
        }
      }
    }
    & > div:last-of-type {
      display: flex;
      gap: 0.5rem;

      & > button {
        background-color: ${(props) => props.theme['base-button']};
        padding: 0.5rem;
        display: flex;
        gap: 0.25rem;
        color: ${(props) => props.theme['base-text']};
        border-radius: 6px;
        transition: background-color 0.2s;

        &:hover {
          color: ${(props) => props.theme['base-subtitle']};
          background: ${(props) => props.theme['base-hover']};
        }

        svg {
          color: ${(props) => props.theme.purple};
        }
      }
    }
  }
`

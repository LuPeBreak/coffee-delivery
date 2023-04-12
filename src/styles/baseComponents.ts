import styled from 'styled-components'

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  border: none;

  &:hover {
    cursor: pointer;
  }
`

export const CounterContainer = styled.div`
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

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

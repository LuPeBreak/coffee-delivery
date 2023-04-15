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

interface RoundIconContainerProps {
  backgroundColor?: string
}
export const RoundIconContainer = styled.div<RoundIconContainerProps>`
  color: ${(props) => props.theme.background};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.purple};
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
`

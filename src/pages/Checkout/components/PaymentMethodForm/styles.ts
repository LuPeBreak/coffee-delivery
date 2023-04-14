import styled from 'styled-components'

export const PaymentMethodFormContainer = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr 1fr 1fr;
`

export const CardOptionContainer = styled.label`
  flex-grow: 1;

  input {
    display: none;
  }

  & > div {
    background-color: ${(props) => props.theme['base-button']};
    padding: 1rem;
    display: flex;
    gap: 0.75rem;
    border-radius: 6px;
    transition: color, background-color 0.2s;

    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme['base-hover']};
      color: ${(props) => props.theme['base-subtitle']};
    }

    svg {
      color: ${(props) => props.theme.purple};
    }

    span {
      font-size: 0.75rem;
      line-height: 160%;
      text-transform: uppercase;
    }
  }

  input:checked + div {
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['base-text']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`

import styled from 'styled-components'

export const AdressFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

const BaseInputDiv = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.75rem;
  height: 2.625rem;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  &:focus-within {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-style: italic;
    font-size: 0.75rem;
    flex-grow: 0;
  }

  input {
    height: 100%;
    max-width: 100%;
    flex-grow: 1;
    background-color: ${(props) => props.theme['base-input']};
    border: none;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-family: 'Roboto', sans-serif;
    }
  }
`

export const FlexFillInputDiv = styled(BaseInputDiv)`
  flex-grow: 1;
`

export const LargeInputDiv = styled(BaseInputDiv)`
  width: 35rem;
`

export const MediumInputDiv = styled(BaseInputDiv)`
  width: 12.5rem;
`

export const SmallInputDiv = styled(BaseInputDiv)`
  width: 3.75rem;
`

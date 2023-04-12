import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  padding: 2.5rem 10rem 0rem;

  form {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 992px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (max-width: 992px) {
    padding: 2.5rem 2rem 0rem;
  }
`
export const BaseGrayBgInsideDiv = styled.div`
  & > h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
  & > div {
    background-color: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
    width: 100%;
    border-radius: 6px;
  }

  & > div + div {
    margin-top: 0.75rem;
  }
`

export const FormContainer = styled(BaseGrayBgInsideDiv)`
  display: flex;
  flex-direction: column;
  width: 40rem;
`

export const ProductSumamaryContainer = styled(BaseGrayBgInsideDiv)`
  width: 28rem;
  & > div {
    border-radius: 6px 44px;
  }
`
export const ProductSumamaryInfoContainer = styled.div`
  div {
    display: flex;
    justify-content: space-between;

    & + div {
      margin-top: 0.75rem;
    }

    &:last-child {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: 800;
    }
  }
`

export const ButtonLabel = styled.button`
  border: none;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  margin-top: 1.5rem;
  width: 100%;
  padding: 0.75rem 7.25rem;
  transition: background-color 0.2s;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 160%;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
export const Separator = styled.div`
  display: flex;
  margin: 1.5rem 0;

  &::after {
    content: '';
    width: 100%;
    border: 1px solid ${(props) => props.theme['base-button']};
  }
`

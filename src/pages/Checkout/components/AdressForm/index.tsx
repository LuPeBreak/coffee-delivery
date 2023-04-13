// import { useFormContext } from 'react-hook-form'
import {
  AdressFormContainer,
  FlexFillInputDiv,
  LargeInputDiv,
  MediumInputDiv,
  SmallInputDiv,
} from './styles'

export function AdressForm() {
  // const {} = useFormContext()

  return (
    <AdressFormContainer>
      <MediumInputDiv>
        <input type="text" placeholder="CEP" />
      </MediumInputDiv>
      <LargeInputDiv>
        <input type="text" placeholder="Rua" />
      </LargeInputDiv>
      <MediumInputDiv>
        <input type="text" placeholder="Número" />
      </MediumInputDiv>
      <FlexFillInputDiv>
        <input type="text" placeholder="Complemento" />
        <span>Opcional</span>
      </FlexFillInputDiv>
      <MediumInputDiv>
        <input type="text" placeholder="Bairro" />
      </MediumInputDiv>
      <FlexFillInputDiv>
        <input type="text" placeholder="Cidade" />
      </FlexFillInputDiv>
      <SmallInputDiv>
        <input type="text" placeholder="UF" maxLength={2} />
      </SmallInputDiv>
    </AdressFormContainer>
  )
}

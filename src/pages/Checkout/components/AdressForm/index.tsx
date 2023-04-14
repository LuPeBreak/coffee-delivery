import { useFormContext } from 'react-hook-form'
import {
  AdressFormContainer,
  FlexFillInputDiv,
  LargeInputDiv,
  MediumInputDiv,
  SmallInputDiv,
} from './styles'

export function AdressForm() {
  const { register } = useFormContext()

  return (
    <AdressFormContainer>
      <MediumInputDiv>
        <input
          type="text"
          placeholder="CEP"
          maxLength={8}
          {...register('cep')}
        />
      </MediumInputDiv>
      <LargeInputDiv>
        <input type="text" placeholder="Rua" {...register('street')} />
      </LargeInputDiv>
      <MediumInputDiv>
        <input type="text" placeholder="Número" {...register('number')} />
      </MediumInputDiv>
      <FlexFillInputDiv>
        <input
          type="text"
          placeholder="Complemento"
          {...register('complement')}
        />
        <span>Opcional</span>
      </FlexFillInputDiv>
      <MediumInputDiv>
        <input type="text" placeholder="Bairro" {...register('neighborhood')} />
      </MediumInputDiv>
      <FlexFillInputDiv>
        <input type="text" placeholder="Cidade" {...register('city')} />
      </FlexFillInputDiv>
      <SmallInputDiv>
        <input type="text" placeholder="UF" maxLength={2} {...register('uf')} />
      </SmallInputDiv>
    </AdressFormContainer>
  )
}

import { ReactNode } from 'react'
import { TitleWithIconContainer } from './styles'

interface TitleWithIconProps {
  title: string
  subTitle: string
  icon: ReactNode
}

export function TitleWithIcon({ title, subTitle, icon }: TitleWithIconProps) {
  return (
    <TitleWithIconContainer>
      <div>{icon}</div>
      <div>
        <h2>{title}</h2>
        <span>{subTitle}</span>
      </div>
    </TitleWithIconContainer>
  )
}

import styled from 'styled-components'

export const TitleWithIconContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  margin-bottom: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    h2 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }
  }
`

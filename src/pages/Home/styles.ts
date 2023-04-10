import styled from 'styled-components'
import homePresentationBackground from '../../assets/home-presentation-background.svg'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`

export const HomePresentationContainer = styled.div`
  max-width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 5.75rem 10rem;

  width: 100vw;
  background-image: url(${homePresentationBackground});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;

  img {
    width: 29.75rem;
  }

  @media (max-width: 992px) {
    flex-wrap: wrap;

    padding: 1rem 2rem 2rem;

    justify-content: center;

    div:nth-child(1) {
      order: 1;
    }

    img {
      width: 100%;
    }
  }
`

export const HomeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36.75rem;
  gap: 1rem;

  header {
    h1 {
      font-size: 3rem;
      font-weight: 800;
      color: ${(props) => props.theme['base-title']};
    }
    h2 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      margin-top: 1rem;
    }

    margin-bottom: 4.125rem;
  }

  & > div {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1.25rem;

    & > span {
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;

      svg {
        border-radius: 50%;
        padding: 0.5rem;
        align-self: start;
        color: ${(props) => props.theme.background};
      }

      &:nth-child(1) svg {
        background-color: ${(props) => props.theme['yellow-dark']};
      }
      &:nth-child(2) svg {
        background-color: ${(props) => props.theme['base-text']};
      }
      &:nth-child(3) svg {
        background-color: ${(props) => props.theme.yellow};
      }
      &:nth-child(4) svg {
        background-color: ${(props) => props.theme.purple};
      }
    }
  }
`

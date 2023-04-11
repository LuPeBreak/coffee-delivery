import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus{
    outline: 0;
    /* box-shadow: 0 0 0 2px red; */
  }
  body{
    background:${({ theme }) => theme.background};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing:antialiased;
  }
  body,input,textarea,button{
    color: ${({ theme }) => theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 130%;
    font-size: 0.875rem;
  }

  h1,h2,h3,h4,h5{
    font-family: 'Baloo 2', cursive;
    font-weight: 700 ;
    line-height: 130%;
    font-size: 1.125rem ;
  }
`

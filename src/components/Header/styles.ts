import styled from "styled-components";



export const HeaderContainer = styled.header`
  display:flex;
  justify-content:space-between;
  padding: 2rem 0;

  nav{
    display: flex;
    align-items:center;
    justify-content:center;
    gap: 0.75rem;
    
    div{
      background: ${props => props.theme["purple-light"]};
      width: 9rem;
      height: 2.375rem;

      padding: 0.5rem;
      display: flex;
      gap:0.25rem
      align-items:center;
      justify-content:center;

      span{
        padding: 0.20rem 0;
      }

      
    }

    a{
      width: 2.375rem;
      height: 2.375rem;

      padding: 0.5rem;
      
      display: flex;
      justify-content: center;
      align-items: center;
      

      background: ${(props) => props.theme["yellow-light"]};

      text-decoration:none;
      color: ${props => props.theme["yellow-dark"]};
      
      position: relative;
      span{
        position:absolute;
        top:-0.5rem;
        right:-0.25rem;
        background: ${props => props.theme["yellow-dark"]};
        color: ${props => props.theme.white};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.25rem;
        height: 1.25rem;
        border-radius:50%;
      }
      
    }
  }
`
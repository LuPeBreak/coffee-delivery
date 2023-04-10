import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
  display:flex;
  flex-direction:column;
  padding:0 10rem; 
  gap:2.5rem;

  @media (max-width: 768px) {
    padding:0 2rem; 
  }
`
// Dependencies
import styled from 'styled-components'

// Styles
export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100;  // Bigger than leaflet
  top: var(--medium);
  right: var(--medium);
  color: var(--white);
  cursor: pointer;
  
  svg {
    font-size: 2rem;
    transform: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`
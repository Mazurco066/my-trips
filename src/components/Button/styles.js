// Dependencies
import styled from 'styled-components'

// Styles
export const Button = styled.button`
  height: 40px;
  border-radius: 8px;
  font-size: 1rem;
  text-transform: uppercase;
  outline: none;
  border: none;
  background-color: ${props => `var(--${props.status})`};
  color: #ffffff;
  margin-bottom: 1rem;
  &:hover {
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: 0.75;
  }
`
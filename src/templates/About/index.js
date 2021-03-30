// SSR Components
import LinkWrapper from 'components/LinkWrapper'
import { FaTimes } from 'react-icons/fa'

// Styles
import * as S from './styles'

// Component
export default function AboutTemplate() {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <FaTimes />
      </LinkWrapper>
      <S.Heading>My Trips</S.Heading>
      <S.Body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </S.Body>
    </S.Content>
  )
}
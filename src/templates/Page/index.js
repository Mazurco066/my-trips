// Dependencies
import PropTypes from 'prop-types'

// SSR Components
import LinkWrapper from 'components/LinkWrapper'
import { FaTimes } from 'react-icons/fa'

// Styles
import * as S from './styles'

// Component
export default function AboutTemplate({ heading, body }) {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <FaTimes />
      </LinkWrapper>
      <S.Heading>{heading}</S.Heading>
      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Content>
  )
}

// Prop Types
AboutTemplate.defaultProps = {
  heading: '',
  body: ''
}

AboutTemplate.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string
}
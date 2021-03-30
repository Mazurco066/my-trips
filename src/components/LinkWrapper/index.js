// Dependencies
import Link from 'next/link'
import PropTypes from 'prop-types'
import * as S from './styles'

// Component
export default function LinkWrapper({ href, children }) {
  
  // Jsx
  return (
    <S.Wrapper>
      <Link href={href} >
        <div>
          {children}
        </div>
      </Link>
    </S.Wrapper>
  )
}

// Prop Types
LinkWrapper.defaultProps = {
  href: '#'
}

LinkWrapper.propTypes = {
  href: PropTypes.string,
  children: PropTypes.element
}
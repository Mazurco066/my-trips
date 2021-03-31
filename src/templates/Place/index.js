// Dependencies
import PropTypes from 'prop-types'
import Image from 'next/image'

// SSR Components
import LinkWrapper from 'components/LinkWrapper'
import { FaTimes } from 'react-icons/fa'

// Styles
import * as S from './styles'

// Component
export default function PlaceTemplate({ place: { name, galery, description } }) {
  
  // Jsx
  return (
    <>
      <LinkWrapper href="/">
        <FaTimes />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{name}</S.Heading>
          <S.Body dangerouslySetInnerHTML={{ __html: description?.html }} />
          <S.Galery>
          {
            galery.map(({ url }, i) => (
              <Image
                key={i}
                width={1000}
                height={600}
                quality={75}
                src={url}
                alt={name}
              />
            ))
          }
          </S.Galery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

// Prop Types
PlaceTemplate.defaultProps = {
  place: {}
}

PlaceTemplate.propTypes = {
  place: PropTypes.object
}

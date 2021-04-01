// Dependencies
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { graphqlClient } from 'api'
import { GET_PAGE_BY_SLUG, GET_PAGES } from 'api/queries'

// Template
import { PageTemplate } from 'templates'

/*
  * Basic usages
  - getStaticPaths => Generate urls in build time. examples: /about, /trip/place
  - getStaticProps => Add page props in build time. usage: Static pages
  - getServerSideProps => Add page props in runtime. usage: SSR.
  - getInitialProps => Add page props in run time. usage: SSR and SPA.
*/

// Component
export default function Page({ heading, body }) {
  
  // Hooks
  const router = useRouter()

  // Return 404 if not created
  if (router.isFallback) return null

  // Jsx
  return (
    <PageTemplate heading={heading} body={body} />
  )
}

// Generate static pages using slug
export async function getStaticPaths() {
  const { pages } = await graphqlClient.request(GET_PAGES, { first: 3 })
  const paths = pages.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: true }
}

// Get data from current page
export async function getStaticProps({ params }) {
  const { page } = await graphqlClient.request(GET_PAGE_BY_SLUG, { slug: `${params?.slug}` })
  if (!page) return { notFound: true }
  return {
    props: {
      heading: page.heading,
      body: page.body.html,
    }
  }
}

// Prop Types
Page.defaultProps = {
  heading: '',
  body: ''
}

Page.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string
}
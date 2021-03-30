// Template
import { AboutTemplate } from 'templates'
import { graphqlClient } from 'helpers'
import { gql } from 'graphql-request'

/*
  * Basic usages
  - getStaticPaths => Generate urls in build time. examples: /about, /trip/place
  - getStaticProps => Add page props in build time. usage: Static pages
  - getServerSideProps => Add page props in runtime. usage: SSR.
  - getInitialProps => Add page props in run time. usage: SSR and SPA.
*/

// Component
export default function AboutPage() {
  return (
    <AboutTemplate />
  )
}

// Add static props
export const getStaticProps = async () => {
  const { pages } = await graphqlClient.request(gql`
    query getPages {
      pages: {
        id
        heading
        slug
        body {
          html
        }
      }
    }
  `)
  console.log('[DATA] pages', pages)
  return {
    props: {}
  }
}
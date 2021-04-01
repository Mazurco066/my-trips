// Next dependencies
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'

// App styles
import GlobalStyles from 'styles/global'
import 'react-toastify/dist/ReactToastify.css'

// SEO Component
import SEO from '../../next-seo.config'
import { DefaultSeo } from 'next-seo'

// App Function
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"/>
        <meta name="theme-color" content="#e20e8d" />
      </Head>
      <DefaultSeo  {...SEO}/>
      <GlobalStyles />
      <NextNprogress
        color="#e20e8d"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
      <ToastContainer position="bottom-right"/>
    </>
  )
}

// Prop Types
App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}
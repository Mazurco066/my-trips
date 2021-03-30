// Next dependencies
import Head from 'next/head'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'

// App styles
import GlobalStyles from 'styles/global'
import 'react-toastify/dist/ReactToastify.css'

// App Function
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Trips</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"/>
        <meta name="theme-color" content="#bb86fc" />
        <meta name="description" content="Nextjs styled boilerplate" />
      </Head>
      <GlobalStyles />
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
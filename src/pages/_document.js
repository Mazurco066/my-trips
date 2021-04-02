// Dependencies
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// Overwrite Document
export default class MyDocument extends Document {

  // Apply styles when get props
  static getInitialProps({ renderPage }) {
    
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }

  // Render method
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* Local fonts styles  */}
          <link href="/fonts/fonts.css" rel="stylesheet"/>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Layout from '@layouts';
import GlobalStyle from '@styles/global'
import { theme } from '@styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle/>
      </Layout>
    </ThemeProvider>
  )
}

import type { AppProps } from 'next/app'

import MainProvider from '@contexts';
import Layout from '@layouts';
import GlobalStyle from '@styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle/>
      </Layout>
    </MainProvider>
  )
}

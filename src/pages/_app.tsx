import { AppProps } from 'next/app'
import Script from 'next/script'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

import { Header, Footer, Theme } from '@/components'
import { config } from '@/site.config'
import { GA_TRACKING_ID } from '@/utils'
import '@/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const title = config.siteMeta.title
  const pageUrl = config.baseUrl
  const description = config.siteMeta.description

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site" content={title} />
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="color-scheme" content="light dark" />
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
        integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
        crossOrigin="anonymous"
      />

      <div className="wrapper">
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

const MyAppWrapper = (props: AppProps) => (
  <RecoilRoot>
    <Theme>
      <MyApp {...props} />
    </Theme>
  </RecoilRoot>
)

export default MyAppWrapper

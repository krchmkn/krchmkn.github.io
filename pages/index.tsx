import Head from 'next/head'

import HeadStat from '@/components/HeadStat'
import Header from '@/components/Header'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <HeadStat />
        <title>Dmitrii Korchemkin</title>
        <meta name="author" content="Dmitrii Korchemkin" />
        <meta name="description" content="Dmitrii Korchemkin's website" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="grid">
        <header className="grid-item header">
          <Header />
        </header>

        <main className="grid-item main">
          <Content />
        </main>

        <footer className="grid-item footer">
          <Footer />
        </footer>
      </div>
    </>
  )
}

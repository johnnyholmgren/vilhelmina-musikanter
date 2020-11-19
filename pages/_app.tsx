import '../src/css/tailwind.css'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { StackedLayout } from '../src/components/AppShell/stackedLayout'

function MyApp({ Component, pageProps }) {
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    function handleEscape(event) {
      if (!menu) return

      if (event.key === 'Escape') {
        setMenu(false)
      }
    }

    document.addEventListener('keyup', handleEscape)
    return () => document.removeEventListener('keyup', handleEscape)
  }, [menu])

  return (
    <>
      <Head>
        <meta name="Description" content="Din guide till musikanter i Vilhelmina." />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <title>Vilhelmina musikanter</title>
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <StackedLayout menu={menu} setMenu={setMenu}>
        <Component {...pageProps} />
      </StackedLayout>
    </>
  )
}

export default MyApp

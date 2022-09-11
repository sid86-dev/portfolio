import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className='body'>
      <Head>
        <title>Sid86</title>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
              crossOrigin="anonymous"></Script>
    <Navbar />
    </div>
  )
}

export default Home

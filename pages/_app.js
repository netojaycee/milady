import Preloader from '@/components/Preloader';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {

  return (
  <>
  <Preloader />
  <div className='green d-flex flex-column justify-content-center align-items-center '><h1>LET&apos;S $OMF</h1>
        <h2><a href=''>Join $OMF TELEGRAM</a></h2>
        <h2><a href=''>Follow $OMF on TWITTER</a></h2>
        </div>
  <Component {...pageProps} />
  </>
  )
}

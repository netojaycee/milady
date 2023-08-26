import About from '@/components/About';
import Picture from '@/components/Picture';
import Preloader from '@/components/Preloader';
import '@/styles/globals.css';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';



export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const spinner = document.getElementById('spinner');
    if (spinner) {
      setTimeout(() => {
        spinner.style.display = 'none';
        setLoading(false);
      }, 2000);
    }
  }, []);

  return (
    
    <div>
      {loading ? (
        <div id='spinner' className='containerr'>
          <Image
            className='loading'
            src="/images/preloader.png"
            width={223}
            height={126}
          />
        </div>
      ) : (
  <>
  
  <div className='green d-flex flex-column justify-content-center align-items-center '><h1>LET&apos;S $OMF</h1>
        <h2><a href=''>Join $OMF TELEGRAM</a></h2>
        <h2><a href=''>Follow $OMF on TWITTER</a></h2>
        </div>
  <Component {...pageProps} />
      
<About />
        

<Picture />
 </>
)}
</div> 
  );
};

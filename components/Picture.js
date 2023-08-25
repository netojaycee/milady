import React, { Component } from 'react';
import styles from '/styles/Postcard.module.css';
import Image from 'next/image';

class Picture extends Component {
    render() {
        return (
          <Image
          src="/images/banner.jpg"
          sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={1280}
      height={426}
          quality={100}
          alt="Photo"
          
        />
        );
    }
}

export default Picture;
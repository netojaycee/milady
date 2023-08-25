import React, { Component } from 'react';
import styles from '/styles/Postcard.module.css';
import Image from 'next/image';

class Picture extends Component {
    render() {
        return (
            <div
  style={{
    backgroundImage: "url('/images/background.jpg')", // Assuming the image is in /public/images/
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "auto"
  }}
>


            <div className={styles["profile-photo"]}>
            </div>
            
          </div>
        );
    }
}

export default Picture;
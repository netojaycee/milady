import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '/styles/Postcard.module.css';
import Image from 'next/image';


const PostCardImage = ({ profileImage, coverPhoto, username, name }) => {
        return (
            <>
            <div className={styles["profile-cont"]} style={{ backgroundImage: `url(${coverPhoto})` }}>
            <div className={styles["profile-photo"]}>
              <Image src={profileImage} width={40} height={40} alt="Profile Photo" />
            </div>
            <div className={styles["profile-info"]}>
              <div className={styles["profile-name"]}>{name}</div>
              <div className={styles["profile-username"]}>{username}</div>
            
            </div>
          </div>
          </>
        );
    }


PostCardImage.propTypes = {
    profileImage: PropTypes.string.isRequired,
    coverPhoto: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default PostCardImage;
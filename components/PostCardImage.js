import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '/styles/Postcard.module.css';
import style from '/styles/RightSideBar.module.css';
import Image from 'next/image';


const PostCardImage = ({ profileImage, coverPhoto, username, name }) => {
        return (
            <>
          <Image src={coverPhoto} sizes="100vw"
      style={{
        width: '50%',
        height: 'auto',
        margin: '30px 120px',
      }}
      width={200}
      height={200} quality={100} alt="Photo" />
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
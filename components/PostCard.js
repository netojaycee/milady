import React from 'react';
import styles from '/styles/Postcard.module.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import PropTypes from 'prop-types';


const PostCard = ({ coverPhoto, videoLink }) => {
  return (
    <Container className="d-flex justify-content-center align-items-center m-0">
      <div className={styles.postCard}>
        <video autoPlay muted loop width="90%" height="auto">
          <source src={videoLink} type="video/mp4" />
        </video>

        <Image
          src={coverPhoto}
          width={100}
          height={100}
          quality={100}
          alt="Photo"
          className={styles.coverPhoto}
        />

       
      </div>
    </Container>
  );
};


PostCard.propTypes = {
  profileImage: PropTypes.string.isRequired,
  coverPhoto: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  videoLink: PropTypes.string.isRequired,
};

export default PostCard;



import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '/styles/Postcard.module.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import PropTypes from 'prop-types';
import * as Icon from 'react-bootstrap-icons';

const PostCard = ({ profileImage, coverPhoto, username, name, content, likes, videoLink }) => {
  return (
    <>
   
      <Container>
      {/* <div className={styles['header-container']}>
    <div className={styles['logo']}>
      <Image src="/images/logo.png" alt="Logo" className={styles['logo-image']} />
    </div>
    <div className={styles['header-content']}>
      <div className={styles['upper-text']}>
        <div className={styles['main-text']}>MiladyFans</div>
        <div className={styles['secondary-text']}>@miladyfans</div>
      </div>
      <div className={styles['date-icon']}>
        <div className={styles['date']}>Aug 20</div>
        <div className={styles['icon']}><Icon.ThreeDotsVertical /></div>
      </div>
    </div>
  </div> */}
      {/* <div className={styles.content}><p>{content}</p></div> */}


<div style={{ width: '100%', maxWidth: '600px', margin: '5px' }}>
      <video autoPlay muted loop width="100%" height="100%">
        <source src={videoLink} type="video/mp4" />
      </video>
    </div>

  


    <div className={styles["profile-cont"]} style={{ backgroundImage: `url(${coverPhoto})`, backgroundPosition: "center", backgroundSize:"cover", backgroundRepeat: "no-repeat" }}>
            <div className={styles["profile-photo"]}>
              <Image src={profileImage} width={40} height={40} alt="Profile Photo" />
              
            </div>
            <div className={styles["profile-info"]}>
              <div className={styles["profile-name"]}>{name}</div>
              <div className={styles["profile-username"]}>{username}</div>
            
            </div>
          </div>

  {/* <Row className='text-white'>
    <Col xs={1}><Icon.Heart /></Col>
    <Col xs={1}><Icon.Chat /></Col>
    <Col xs={3}><div><span><Icon.CurrencyDollar /></span>send Tip</div></Col>
    <Col xs={7} className='text-end'><Icon.Bookmark /></Col>
  </Row> */}

  {/* <div className={styles['likes-count']}>
        <span className='text-white'>{likes} Likes</span>
         </div> */}
         <hr/>

         
      </Container>
  
    
    
    </>
    
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



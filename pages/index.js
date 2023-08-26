import React, { useState, useEffect } from 'react';
import PostCard from '/components/PostCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSideBar from '../components/LeftSideBar';
import styles from '/styles/Postcard.module.css';
import ButtonLink from '@/components/ButtonLink';
import Image from 'next/image';
import About from '@/components/About';
import Picture from '@/components/Picture';

const Home = () => {
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
        <Container fluid className='site'>
          <Row>
        <Col xs={0} sm={2} md={2} xl={2} className='d-none d-sm-block d-flex p-16 l-header'>
          <LeftSideBar />
        </Col>
        <Col xs={12} sm={10} md={10} xl={10} className='border-start border-secondary px-0 py-16  d-flex flex-column justify-content-center align-items-center'>
       
        <div className='middle-column d-flex flex-column justify-content-center align-items-center'>
        <hr/>
        <PostCard
              profileImage="/images/2.jpg"
              coverPhoto="/images/pic-1.jpg"
              videoLink="/videos/vid-1.mp4"
        />
    
        <ButtonLink />

        
        
     

<PostCard
                profileImage="/images/3.jpg"
                coverPhoto="/images/pic-2.jpg"
              videoLink="/videos/vid-2.mp4"
        />
 
        <ButtonLink />
        
{/* <PostCard
                profileImage="/images/2.jpg"
                coverPhoto="/images/pic-3.jpg"
               
              videoLink="/videos/vid-3.mp4"
        /> */}
         <Image
          src="/images/pic-3.jpg"
          width={1080}
          height={1080}
          quality={100}
          alt="Photo"
          className={styles.coverPhoto}
          
        />
            <Image
          src="/images/pic-11.jpg"
          width={850}
          height={850}
          quality={100}
          alt="Photo"
          className={styles.coverPhoto}
          
        />
        <ButtonLink />
        
        <Image
          src="/images/pic-4.jpg"
          width={1086}
          height={1066}
          quality={100}
          alt="Photo"
          className={styles.coverPhoto}
          
        />
            <Image
          src="/images/pic-10.jpg"
          width={1080}
          height={1080}
          quality={100}
          alt="Photo"
          className={styles.coverPhoto}
          
        />
        {/* <PostCard
                profileImage="/images/3.jpg"
                coverPhoto="/images/pic-4.jpg"
               
              videoLink="/videos/vid-4.mp4"
        /> */}
        <ButtonLink />

        <Image
          src="/images/pic-5.jpg"
          width={1066}
          height={1071}
          quality={100}
          alt="Photo"
          className={styles.coverPhoto}
          
        />
            <Image
          src="/images/pic-14.jpg"
          width={500}
          height={500}
          quality={100}
          alt="Photo"
          className={styles.coverPhoto}
          
        />
        
{/* 
        <PostCard
                profileImage="/images/1.jpg"
                coverPhoto="/images/pic-5.jpg"
               
              videoLink="/videos/vid-5.mp4"
        /> */}
        <ButtonLink />
        

        </div>
    
<About />
         <hr />

<Picture />
      

        </Col>
        
        </Row>
        </Container>
      )}
    </div>
  );
};

export default Home;

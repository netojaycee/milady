import React from 'react';
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
  return (
    <>
        <Container fluid className='site'>


      <Row>
        <Col sm={2} md={2} xl={2} className='d-none d-sm-block d-flex p-16 l-header'>
          <LeftSideBar />
        </Col>
        <Col xs={12} sm={10} md={10} xl={10} className='border-start border-end border-secondary px-0 py-16 middle-column d-flex flex-column justify-content-center align-items-center'>
        <div className='text-success d-flex flex-column justify-content-center align-items-center mt-3'><h1>LET&apos;S $OMF</h1>
        <h3><a href=''>Join $OMF TELEGRAM</a></h3>
        <h3><a href=''>Follow $OMF on TWITTER</a></h3>
        </div>
        <hr/>
        <PostCard
              profileImage="/images/2.jpg"
              coverPhoto="/images/pic-1.jpg"
              videoLink="/videos/vid-1.mp4"
        />
    
        <ButtonLink />

        <Image
          src='/images/pic-13.jpg'
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={1000}
          height={700}
              quality={100}
              alt="Photo"
          className={styles.coverPhoto}
        />
        
     

<PostCard
                profileImage="/images/3.jpg"
                coverPhoto="/images/pic-2.jpg"
              videoLink="/videos/vid-2.mp4"
        />
 
        <ButtonLink />
        
<PostCard
                profileImage="/images/2.jpg"
                coverPhoto="/images/pic-3.jpg"
               
              videoLink="/videos/vid-3.mp4"
        />
     
        <ButtonLink />
        

        <PostCard
                profileImage="/images/3.jpg"
                coverPhoto="/images/pic-4.jpg"
               
              videoLink="/videos/vid-4.mp4"
        />
         <hr/>
        <ButtonLink />
        

        <PostCard
                profileImage="/images/1.jpg"
                coverPhoto="/images/pic-5.jpg"
               
              videoLink="/videos/vid-5.mp4"
        />
         <hr/>
        <ButtonLink />
        


    
<About />
         <hr />

<Picture />
      

        </Col>
       
      </Row>

    
      </Container>
    </>
  );
};

export default Home;


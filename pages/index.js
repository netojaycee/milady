import React from 'react';
import PostCard from '/components/PostCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSideBar from '../components/LeftSideBar';
import RightSideBar from '@/components/RightSideBar';
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
        <Col xs={12} sm={10} md={7} xl={6} className='border-start border-end border-secondary px-0 py-16 middle-column'>
       
        <PostCard
              profileImage="/images/2.jpg"
              coverPhoto="/images/pic-1.jpg"
              username="@lmonroe"
              name="Lana Monroe"
              content=" Proin nec vehicula ligula. Quisque vitae purus nec est sollicitudin
              laoreet. Morbi malesuada ligula ac mauris placerat, eu gravida arcu
              iaculis. Nunc a enim sed tortor luctus fermentum. Sed ut tristique
              nisl, a blandit tellus. Nullam tincidunt urna vel metus dapibus
              posuere."
              likes={10}
              videoLink="/videos/vid-1.mp4"
        />
        <hr/>
        <ButtonLink />
        
        <hr/>

<PostCard
                profileImage="/images/3.jpg"
                coverPhoto="/images/pic-2.jpg"
                username="@rebeca"
                name="Rebeca Vega"
              content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
              aliquam malesuada. Duis vitae convallis orci. Vestibulum fringilla
              ante nec nibh cursus, vel fringilla metus ultricies. Nulla nec est
              scelerisque, bibendum urna sit amet, facilisis libero."
              likes={108}
              videoLink="/videos/vid-2.mp4"
        />
 <hr/>
        <ButtonLink />
        
        <hr/>
<PostCard
                profileImage="/images/2.jpg"
                coverPhoto="/images/pic-3.jpg"
                username="@melrose"
                name="MelRose"
              content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
              aliquam malesuada. Duis vitae convallis orci. Vestibulum fringilla
              ante nec nibh cursus, vel fringilla metus ultricies. Nulla nec est
              scelerisque, bibendum urna sit amet, facilisis libero."
              likes={108}
              videoLink="/videos/vid-3.mp4"
        />
         <hr/>
        <ButtonLink />
        
        <hr/>

        <PostCard
                profileImage="/images/3.jpg"
                coverPhoto="/images/pic-4.jpg"
                username="@tillytoy"
                name="Tilly Toy"
              content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
              aliquam malesuada. Duis vitae convallis orci. Vestibulum fringilla
              ante nec nibh cursus, vel fringilla metus ultricies. Nulla nec est
              scelerisque, bibendum urna sit amet, facilisis libero."
              likes={108}
              videoLink="/videos/vid-4.mp4"
        />
         <hr/>
        <ButtonLink />
        
        <hr/>

        <PostCard
                profileImage="/images/1.jpg"
                coverPhoto="/images/pic-5.jpg"
                username="@mthorne"
                name="Mia Thorne"
              content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
              aliquam malesuada. Duis vitae convallis orci. Vestibulum fringilla
              ante nec nibh cursus, vel fringilla metus ultricies. Nulla nec est
              scelerisque, bibendum urna sit amet, facilisis libero."
              likes={108}
              videoLink="/videos/vid-5.mp4"
        />
         <hr/>
        <ButtonLink />
        
        <hr/>


        {/* <PostCard
                profileImage="/images/1.jpg"
                coverPhoto="/images/r.jpg"
                username="@bbumzy"
                name="Bella Bumzy"
              content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
              aliquam malesuada. Duis vitae convallis orci. Vestibulum fringilla
              ante nec nibh cursus, vel fringilla metus ultricies. Nulla nec est
              scelerisque, bibendum urna sit amet, facilisis libero."
              likes={108}
              videoLink="/videos/6.mp4"
        /> */}
         {/* <hr/> */}
<About />
         <hr />

<Picture />
      
        <hr/>

        </Col>
        <Col  md={3} xl={4} className='d-none d-md-block p-16 r-header'>
        <RightSideBar />
        </Col>
      </Row>

    
      </Container>
    </>
  );
};

export default Home;


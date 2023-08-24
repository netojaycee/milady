import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import style from '/styles/RightSideBar.module.css';
import * as Icon from 'react-bootstrap-icons';
import PostCardImage from './PostCardImage';


class RightSideBar extends Component {
    render() {
        return (
            <div>
                <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2 mt-3 mb-3"
            />
   <div className={style["suggestions-container"]}>
  <div className={style["suggestions"]}>SUGGESTIONS</div>
  <div className={style["i-icons"]}>
    <div><Icon.Coin /></div><div><Icon.ArrowClockwise/></div><div><Icon.ChevronLeft /></div><div><Icon.ChevronRight /></div>
  </div>
 

  
</div>

{/* image card start */}
<PostCardImage 
                profileImage="/images/1.jpg"
                coverPhoto="/images/pic.png"
                username="@User2"
                name="Sebastein Clarks" 
/>

<PostCardImage 
                profileImage="/images/3.jpg"
                coverPhoto="/images/pic.png"
                username="@User2"
                name="Sebastein Clarks" 
/>

<PostCardImage 
                profileImage="/images/2.jpg"
                coverPhoto="/images/pic.png"
                username="@User2"
                name="Sebastein Clarks" 
/>

<PostCardImage 
                profileImage="/images/1.jpg"
                coverPhoto="/images/pic.png"
                username="@User2"
                name="Sebastein Clarks" 
/>
{/* image card end */}

            
            </div>
        );
    }
}

export default RightSideBar;
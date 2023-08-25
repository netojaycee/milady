
import React from 'react';
import Link from 'next/link';
import styles from '/styles/LeftSideBar.module.css';
import {LeftSideBarData} from "./LeftSideBarData"; 
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

const LeftSideBar = () => {
  
  return (
   
    
    
    <div>
        
        <div>
         <button className={styles["l-button"]}>Ja</button>
         </div>
         

        <ul className={styles["l-list"]}>
            {LeftSideBarData.map((val, key)=> {
        return <li key={key} className={styles['l-row']} onClick={() => {
            window.location.pathname = val.link;
        }}>
            <div id={styles["icon"]}>{val.icon}</div>
            <div id={styles["title"]}>{val.title}</div>
          
        </li>;


        })}
 <div className=''>
                <Button href="https://twitter.com/OnlyMiladyFans" className={styles["l-button-big"]}>Cum sea mi hir</Button>
                
                </div>
        </ul>
         
      
            </div>
               
                  
              
    
  );
};

export default LeftSideBar;











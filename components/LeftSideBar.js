
import React from 'react';
import Link from 'next/link';
import styles from '/styles/LeftSideBar.module.css';
import {LeftSideBarData} from "./LeftSideBarData"; 
import * as Icon from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';

const LeftSideBar = () => {
  
  return (
   
    
    
    <div>
        
        {/* <div>
         <button className={styles["l-button"]}></button>
         </div> */}

         <div className='m-3'>
            <Image src='/images/logo.png' width={48} height={48} quality={100} alt='logo' />
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
 <div className="d-grid gap-2 mt-3 primarys">
 <Button href="https://twitter.com/OnlyMiladyFans" variant="" size="sm">
        <span className='primaryss'>Cum sea mi hir</span>
      </Button>
                
                </div>
        </ul>
         
      
            </div>
               
                  
              
    
  );
};

export default LeftSideBar;











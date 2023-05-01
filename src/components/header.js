import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { useState } from 'react'
import {HiOutlineBars3BottomRight} from 'react-icons/hi2'
import {IoCloseOutline} from 'react-icons/io5'
import { IconContext } from "react-icons";

export default function Header() {
  const [navbar, setNavbar] = useState(false)
  const showNavbar = () => setNavbar(!navbar)




  return (
    <div className={styles.container}>
      <Link href="/" ><img src="./brand.png" className={styles.logo}></img></Link>
      Life Path
      {!navbar && 
      <button  onClick={showNavbar} className={styles.hammenu}>
       <HiOutlineBars3BottomRight size={30} />
      </button>
      }
      
      {navbar && 
      <nav>
        <button onClick={showNavbar} className={styles.hammenu}> 
          <IoCloseOutline size={20}/></button>
      </nav>
      }
      
    </div>
     
  
  )
}

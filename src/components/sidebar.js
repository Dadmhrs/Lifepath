import styles from '../styles/Sidebar.module.css'
import Column from '../components/column'
import Header from './header'
import {IoMdArrowDropdown} from 'react-icons/io'
import { useState } from 'react'
import { data } from 'autoprefixer'



export default function Sidebar() {

  return (
    <div className={styles.layout}>
      <Header/>
      <div className={styles.dropdown}>
      <label className={styles.dropbtn}>
        <span className={styles.droptxt}>Field<IoMdArrowDropdown size={20} className={styles.dropdi}/></span>
        </label>          
       <div className={styles.dropco}>
             <button className={styles.hbtn}>
                   <a>IT</a>
                   <a href="##">Electric</a>
                   <a href="###">Sport</a>
              </button>
         </div>

      </div>

    </div>
  )
}

import styles from '../styles/Sidebar.module.css'
import Header from './header'
import {IoMdArrowDropdown} from 'react-icons/io'

export default function Sidebar() {
  return (
    <div className={styles.layout}>
      <Header/>
      <div className={styles.dropdown}>
      <label className={styles.dropbtn}>
        <span className={styles.droptxt}>Field<IoMdArrowDropdown size={20} className={styles.dropdi}/></span>
        </label>          
       <div className={styles.dropco}>
    <a href="#">IT</a>
    <a href="#">Electric</a>
    <a href="#">Sport</a>
  </div>
      </div>

    </div>
  )
}
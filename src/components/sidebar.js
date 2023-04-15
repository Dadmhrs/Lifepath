import styles from '../styles/Sidebar.module.css'
import Header from './header'

export default function Sidebar() {
  return (
    <div className={styles.layout}>
      <Header/>
    </div>
  )
}

import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <div className={styles.container}>
      <Link href="/" ><img src="./brand.png" className={styles.logo}></img></Link>
      Life Path
    </div>
  )
}

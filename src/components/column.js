import styles from '../styles/Column.module.css'
import Link from 'next/link'

export default function Column(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.container}> {props.title} </div>
      {props.options.map(option =>
        <div className={styles.option} key={option}>
           <a href={option} key={option}> {option} </a>
        </div>
      )}
    </div>
  )
}

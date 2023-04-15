import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/sidebar'
import Column from '../components/column'
import styles from '../styles/Home.module.css'
import Header from '../components/header'

const data = [
  "Software Engineering",
  "Computer Science",
  "Computer Engineering",
  "Computer Information Systems",
  "Accounting",
  "Data Science, Statistics",
  "Information Systems",
  "Applied Computer Science ",
  "Media Informatics",
  "Medical Informatics",
  "Practical Computer Science",
  "Theoretical Computer Science",
  "Information Systems and Management ",
  "Engineering Informatics",
  "Information Technology",
  "Media Technology"
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>LifePath</title>
        <meta name="description" content="Help people to find the right path in life, studying and carrier" />
        <link rel="icon" href="./brand.png" />
      </Head>

      <Header />
      <main className={styles.wrapper}>
        {/* <Sidebar></Sidebar> */}
        <Column title="Bachelor Degree" options={data} />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a></footer> */}
    </div>
  )
}

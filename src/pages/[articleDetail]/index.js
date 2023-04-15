import { useRouter } from 'next/router'
import Header from '../../components/header'
import styles from '../../styles/Article.module.css'

function detail() {
  const router = useRouter()

  return <div>
    <Header> </Header>
    {/* <h1 className=''>{articleDetail}</h1> */}
  </div>
}

export default detail
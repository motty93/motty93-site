import { NextPage, InferGetStaticPropsType } from 'next'
import styles from '@/styles/Home.module.scss'
import { getAllPosts } from '@/utils/api'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.description}>まだなんも書いてないっす </p>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'createdAt', 'tags', 'categories'])

  return {
    props: { allPosts },
  }
}

export default Home

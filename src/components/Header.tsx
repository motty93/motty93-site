import styles from '@/styles/Header.module.scss'

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>ようこそ！</h1>
        <h2 className={styles.content}>もてぃのサイトへ</h2>
      </header>
    </>
  )
}

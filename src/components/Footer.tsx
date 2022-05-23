import styles from '@/styles/Footer.module.scss'

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        ©Copyright 2022
        <a href="https://twitter.com/smo_t93" target="_blank" rel="noopener noreferrer">
          もてぃ{' '}
        </a>
        All Rights Reserved.
      </footer>
    </>
  )
}

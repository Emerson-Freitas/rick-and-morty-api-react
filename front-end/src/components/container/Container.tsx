import React, { ReactNode } from 'react'
import styles from './Container.module.css'
const Container = ({ children }: { children : ReactNode}) => {
  return (
    <section className={styles.container}>
        {children}
    </section>
  )
}

export default Container
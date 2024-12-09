import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Adel</h1>
        <p className={styles.description}> I'm a Computer Science Engineer from Manipal Institute of technology, Manipal.
        I'm an aspiring web developer and software engineer with a strong foundation in front-end technologies.
            Reach out if you'd like to connect with me.
        </p>
        <a className={styles.contactBtn} href="mailto:adeldsouza8@gmail.com">Contact Me</a>
    </div>
    <img className={styles.heroImg}
    src={getImageUrl("hero/heroImage.jpg")} alt="Hero image of me" />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>

  </section>
  )
}

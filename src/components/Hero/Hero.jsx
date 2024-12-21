import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hey! I'm Adel
        </h1>
        <p className={styles.description}>
        I’m currently studying Computer Science at MIT Manipal.
         I’m always looking for new challenges and love exploring ways to turn ideas into real, working solutions.
          I believe in continuous learning, and whether it’s through building projects or connecting with others,
           I’m always growing and evolving.
         I’m excited to see where this journey takes me and would love to connect 
         with others who are equally passionate about tech, learning, and making an impact.

        </p>
        <p className={styles.description}>Feel free to reach out if you want to share ideas and collaborate!</p>
        <a className={styles.contactBtn} href="mailto:adeldsouza8@gmail.com">Contact Me</a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/heroImage.jpg")} alt="Hero image of me" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

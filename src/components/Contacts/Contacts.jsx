import React from "react";
import styles from "./Contacts.module.css";
import { getImageUrl } from "../../utils";

export const Contacts = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:adeldsouza8@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/adel-dsouza-6a654b305/"><img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          /></a>
        </li>
        <li className={styles.link}>
          <a href="https://www.github.com/Addysd">
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
        </li>
        <li className={styles.link}>
          <a href="https://www.instagram.com/_adelsd_/">
          <img src={getImageUrl("contact/insta-logo.png")} alt="Instagram icon" /></a>
        </li>
      </ul>
    </footer>
  );
};

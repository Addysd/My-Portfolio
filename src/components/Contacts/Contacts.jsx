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
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:adeldsouza8@gmail.com">adeldsouza8@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/adel-dsouza-6a654b305/">linkedin.com/Adel-Dsouza</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Addysd">github.com/Addysd</a>
        </li>
      </ul>
    </footer>
  );
};
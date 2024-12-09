import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
  return(
    <section className={styles.blackbox} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.container}>
        <img 
        className={styles.aboutImage}
        src={getImageUrl("/about/aboutImage.png")} alt="My about image" />
        <ul className={styles.aboutList}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("/about/cursorIcon.png")} alt="cursor icon" />
                    <div>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with experience in HTML, JavaScript, React.js and Tailwind CSS</p>
                    </div>
                </li>
                
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("/about/serverIcon.png")} alt="cursor icon" />
                    <div>
                    <h3>Backend Developer</h3>
                    <p>I'm currently diving into the world of backend to familiarise myself with the MERN Stack.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("/about/uiIcon.png")} alt="cursor icon" />
                    <div>
                    <h3>Competitive programmer</h3>
                    <p>With a strong foundation in data structures and algorithms, I enjoy tackling complex problems on Leetcode</p>
                    </div>
                </li>
               
            </ul>
        </div>
            
        
    </section>
  
);
};

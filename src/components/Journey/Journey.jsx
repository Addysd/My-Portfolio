import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Journey.module.css';

export const Journey = () => {
  return (
    <section className={styles.blackbox} id="journey">
      <h2 className={styles.title}>My Journey</h2>
      <div className={styles.container}>
        <ul className={styles.journeyList}>
          <li className={styles.journeyItem}>
            <img src={getImageUrl('/journey/mitlogo.png')} alt="Manipal logo" />
            <div>
              <h3>Manipal Institute of Technology</h3>
              <p>
                I'm currently pursuing my B.Tech in Computer Science & Engineering with a CGPA of 9.36.
              </p>
              <p>
              Awarded the Scholar scholarship every year in recognition of my academic performance.
              </p>
            </div>
          </li>

          <li className={styles.journeyItem}>
            <img src={getImageUrl('/journey/Cfalogo.png')} alt="CFA logo" />
            <div>
              <h3>Centre for Advanced Learning</h3>
              <p>
                Scored 96.2% in my 12th boards, a proud moment for me and my family!
              </p>
              <p>
                Secured All India Rank of 11,629 in JEE and a KCET Rank of 442. Those late-night study sessions sure paid off!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

import React from 'react';
import styles from "./ProjectCard.module.css";
import PropTypes from "prop-types"; 

export const ProjectCard = ({
  project: { title, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {demo && (
          <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
        <a href={source} target="_blank" rel="noopener noreferrer" className={styles.githubButton}>
          <img 
            src="/assets/projects/github.png" 
            alt="GitHub Repository" 
            className={styles.githubLogo}
          />
          <span className={styles.buttonText}>Explore</span>
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string, // Now not required
    source: PropTypes.string.isRequired,
  }).isRequired,
};

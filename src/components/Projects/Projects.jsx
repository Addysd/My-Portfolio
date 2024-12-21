import React, { useState } from 'react';
import styles from './Projects.module.css';
import { Link } from 'react-router-dom';
import projects from '../../data/projects.json';
import { ProjectCard } from './ProjectCard';


export const Projects = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.container} id="projects">
      
      <h2 className={styles.title}>Recent Projects</h2>
      <div className={styles.carousel}>
      <button onClick={prevProject} className={styles.arrow}>
          &larr;
        </button>
        <ProjectCard project={projects[currentIndex]} />
        <button onClick={nextProject} className={styles.arrow}>
          &rarr;
        </button>
      </div>
      <Link to="/all-projects" className={styles.allProjectsButton}>
        View All Projects 
      </Link>
    </section>
  )
}

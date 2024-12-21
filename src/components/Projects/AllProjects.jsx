import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AllProjects.module.css';
import projects from '../../data/projects.json';
import { ProjectCard } from '../Projects/ProjectCard';
import LottieAnimation from './LottieAnimation';

export const AllProjects = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.Wrap}>
          <h2 className={styles.title}>My Projects</h2>
          <div className={styles.lottieWrapper}>
            <LottieAnimation /> {/* Lottie animation beside the title */}
          </div>
        </div>
        
        <div 
          className={styles.backOption} 
          onClick={() => navigate('/')}
        >
          <img 
            src="/assets/projects/arrow.png" 
            alt="Back" 
            className={styles.arrowIcon}
          />
          <span className={styles.backText}>Back</span>
        </div>
      </div>
      <p className={styles.description}>
        Welcome to my Projects showcase! Here are all the projects I've worked on, showcasing my skills and creativity. Feel free to explore them in detail!
      </p>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

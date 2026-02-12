import styles from './About.module.css'
import Layouts from '../../components/Layout/Layouts.jsx';
import aboutIllustration from '../../assets/about-illustration.svg';

import React from 'react'

const About = () => {
  return (
   <Layouts>
    <section className={styles.about}>
      <div className={styles.content}>
        <h1 className={styles.title}>About This Blog</h1>
        <p className={styles.description}>
          This project is a simple blogging app built for learning and sharing ideas.
          Write posts, browse community stories, and manage your content easily.
        </p>
        <p className={styles.description}>
          Built with React, Zustand for state, and a lightweight API. The design
          emphasizes readability and quick content creation.
        </p>
      </div>

      <div className={styles.imageWrap}>
        <img src={aboutIllustration} alt="About illustration" className={styles.image} />
      </div>
    </section>
   </Layouts>
  )
}

export default About
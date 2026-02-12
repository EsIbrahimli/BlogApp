
import Layouts from '../../components/Layout/Layouts.jsx';
import styles from './Home.module.css';
import Button from '../../components/Button/Button.jsx';
import { Link } from 'react-router-dom';
import { Router } from '../../Router/Router.js';
import { useBlogStore } from '../../store/useBlogStore.js';
import React from 'react';

const Home = () => {
  const { blogs } = useBlogStore();
  const latest = blogs?.slice(0, 3) ?? [];

  return (
    <Layouts>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>Welcome to Your Blog</h1>
          <p className={styles.subtitle}>Write, share and discover great stories from our community.</p>
          <div className={styles.ctaRow}>
            <Link to={Router.Blogs}>
              <Button variant="success">Browse Blogs</Button>
            </Link>
            <Link to={Router.Blogs}>
              <Button variant="secondary">Create a Post</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h3>Easy Writing</h3>
          <p>Compose posts quickly with simple editor and publish instantly.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Share Ideas</h3>
          <p>Reach readers and get feedback from the community.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Manage Posts</h3>
          <p>Edit or delete posts anytime from your dashboard.</p>
        </div>
      </section>

      <section className={styles.latest}>
        <h2>Latest Posts</h2>
        <div className={styles.latestList}>
          {latest.length === 0 ? (
            <div className={styles.empty}>No posts yet — be the first!</div>
          ) : (
            latest.map((b) => (
              <article key={b.id} className={styles.postCard}>
                <h4>{b.title}</h4>
                <p>{b.body?.slice(0, 110)}{b.body && b.body.length > 110 ? '...' : ''}</p>
                <Link to={Router.BlogDetail.replace(':id', b.id)} className={styles.readMore}>Read more</Link>
              </article>
            ))
          )}
        </div>
      </section>
    </Layouts>
  );
};

export default Home;
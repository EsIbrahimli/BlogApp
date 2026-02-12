
import styles from './NotFound.module.css';
import Layouts from '../../components/Layout/Layouts.jsx';
import React from 'react';
import notfoundIcon from '../../assets/notfound-icon.svg';

const NotFound = () => {
  return (
    <Layouts>
    <div className={styles.notFound}>
      <img src={notfoundIcon} alt="Not Found Icon" className={styles.icon} />
      <h1 className={styles.title}>404 - Səhifə tapılmadı</h1>
      <p className={styles.text}>Üzr istəyirik, axtardığınız səhifə mövcud deyil.</p>
    </div>
    </Layouts>
  );
}

export default NotFound
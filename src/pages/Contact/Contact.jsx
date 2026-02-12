import React from 'react'
import Layouts from '../../components/Layout/Layouts.jsx'
import styles from './Contact.module.css'
import Button from '../../components/Button/Button.jsx';

const Contact = () => {
  return (
    <Layouts>
      <section className={styles.contact}>
        <div className={styles.card}>
          <h1 className={styles.title}>Get in touch</h1>
          <p className={styles.subtitle}>Have questions or ideas? Send a message and we'll respond shortly.</p>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <label className={styles.label}>
              Name
              <input className={styles.input} type="text" name="name" placeholder="Your name" />
            </label>

            <label className={styles.label}>
              Email
              <input className={styles.input} type="email" name="email" placeholder="you@example.com" />
            </label>

            <label className={styles.label}>
              Message
              <textarea className={styles.textarea} name="message" placeholder="Write your message" rows="6" />
            </label>

            <div className={styles.actions}>
               <Button variant="success" type="submit">Send message</Button>
            </div>
          </form>
        </div>
      </section>
    </Layouts>
  )
}

export default Contact


import React from 'react';
import styles from '../Modal/Modal.module.css';
import { Button } from 'antd';

const ConfirmModal = ({ visible, onClose, onConfirm, message = 'Are you sure?' , confirmText = 'Delete' }) => {
  if (!visible) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>Confirm</h3>
          <button className={styles.close} onClick={onClose}>×</button>
        </div>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <div className={styles.footer}>
            <Button className={styles.secondary} onClick={onClose}>Cancel</Button>
            <Button className={styles.primary} onClick={onConfirm}>{confirmText}</Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

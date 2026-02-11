import React, {useState, useEffect} from 'react';
import styles from './Modal.module.css';
import { Button } from 'antd';

const Modal = ({ visible, onClose, onSave, defaultValues = { title: '', body: '' }, modalTitle = 'Create New Blog' }) => {
  const [title, setTitle] = useState(defaultValues.title);
  const [body, setBody] = useState(defaultValues.body);


  useEffect(() => {
    if (visible) {
      setTitle(defaultValues?.title ?? '');
      setBody(defaultValues?.body ?? '');
    }
  }, [visible]);

  if (!visible) return null;

  const handleSave = () => {
    onSave({ title: title.trim(), body: body.trim() });
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>{modalTitle}</h3>
          <button className={styles.close} onClick={onClose}>×</button>
        </div>
        <div className={styles.content}>
          <label>
            Title
            <input type="text" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            Body
            <textarea rows={6} value={body} onChange={(e) => setBody(e.target.value)} />
          </label>
        </div>
        <div className={styles.footer}>
            <Button className={styles.secondary} onClick={onClose}>Cancel</Button>
            <Button className={styles.primary} onClick={handleSave}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

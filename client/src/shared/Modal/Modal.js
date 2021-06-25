import styles from './Modal.module.css'
import { createPortal } from 'react-dom';
const Modal = ({ children }) => {
  const modal = document.getElementById('modal')
  return createPortal(
    <div className={styles.backdrop}>
      <div className={styles.content}>{children}</div>
    </div>,modal);
}
 
export default Modal;
import Modal from "../../../shared/Modal/Modal";
import styles from './ModalContent.module.css'
const ModalContent = ({ data, closeModal }) => {
  const [stock] = data
  const {ticker,price,change,change_percent,dividend,yield:yild,last_trade_time} = stock
  return (
    <Modal>
      <div>
      <button onClick={closeModal}>x</button>
      <ul className={styles.list}>
        <li>Name: {ticker}</li>
        <li>Price: {price}</li>
        <li>Change: {change}</li>
        <li>Change percent: {change_percent}</li>
        <li>Dividend: {dividend}</li>
        <li>Yield: {yild}</li>
        <li>Trade time :{last_trade_time}</li>
        </ul>
        </div>
    </Modal>
   );
}
 
export default ModalContent;
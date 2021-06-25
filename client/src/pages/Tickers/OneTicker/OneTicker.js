import styles from './OneTicker.module.css'
import { ReactComponent as ArrowDown } from '../../../images/arrow-down.svg'
import {ReactComponent as ArrowUp} from '../../../images/arrow-up.svg'
const OneTicker = ({ item: { ticker,  price, change}, setName}) => {
  const differ = (price - change).toFixed(2)
  const numberPrice = Number(differ)
  return (
    <li className={styles.elem} onClick={() =>setName(ticker)} >
      <p className={styles.data}>{ticker}</p>
      <p className={styles.data}>{price}</p>
      <p className={numberPrice > 0 ? styles.datagreen : styles.datared}>{differ}</p>
      {numberPrice > 0 ? <ArrowUp className={styles.arrowup}/> : <ArrowDown className={styles.arrowdown}/>}
    </li>
   );
}
 
export default OneTicker;
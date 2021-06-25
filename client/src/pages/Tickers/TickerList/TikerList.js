import OneTicker from '../OneTicker/OneTicker.js'
import { v4 } from 'uuid'
import styles from './TikerList.module.css'
const TickerList = ({ tickers,setName }) => {
  const render = tickers.map(item => < OneTicker setName={setName} key={v4()} item={item} />)
  return (
    <ul className={styles.list}>
      {render}
      </ul>
   );
}
 
export default TickerList;
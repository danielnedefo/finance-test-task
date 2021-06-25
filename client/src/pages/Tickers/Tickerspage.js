import { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux'
import tickersSelector from '../../redux/tickers/selector'
import TickerList from './TickerList/TikerList';
import ModalContent from './ModalContent/ModalContent';
const Tickerspage = () => {
  const ticker = useSelector(tickersSelector, shallowEqual)
  const [showModal, setshowModal] = useState(false)
  const [showinModal, setNameToModal] = useState()
  const [data, setdata] = useState()
  console.log(ticker)
  const setName = (name) => {
    setNameToModal(name)
    setshowModal(true)
    if (showinModal) {
      const tickerForModal = ticker.filter(elem => elem.ticker === showinModal)
      setdata(tickerForModal)
    }
  }
  const closeModal = () => {
    setshowModal(false)
  }
  console.log(data)
  return (
    <>
      {showModal && data && <ModalContent closeModal={closeModal} data={data}/>}
      {ticker.length > 0 ? <TickerList setName={setName} tickers={ticker} /> : <p>Loading...</p>}
      <div style={{textAlign:"center"}}>
        {ticker.length > 0 && <p>Click any ticker to see more information</p>}
        </div>
      </>
   );
}
 
export default Tickerspage;
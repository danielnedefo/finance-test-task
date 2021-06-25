import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { useDispatch } from 'react-redux'
import Tickerspage from './pages/Tickers/Tickerspage';
import tickersAction from './redux/tickers/actions'
function App() {
  const [ticker, setTicker] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
   const timer = setTimeout(() => {
  const socket = io.connect('http://localhost:4000');
  socket.emit('start');
  socket.on('ticker', function (response) {
    setTicker(response)
    dispatch(tickersAction.refreshData(response))
  })
   }, 5000);
    return () => clearInterval(timer)
  },[ticker])
  return (
    <>
        <Tickerspage />
      </>
  );
}

export default App;

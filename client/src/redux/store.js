import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import tickerReducer from './tickers/reducer'
const middleware = [...getDefaultMiddleware()]

const store = configureStore({
  reducer: {
    tickers:tickerReducer
  },
  middleware
})
export default store
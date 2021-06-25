import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tikersActions from './actions'
const tickers = createReducer({},{
   [tikersActions.refreshData]:(_,{payload}) => payload
})



export default tickers
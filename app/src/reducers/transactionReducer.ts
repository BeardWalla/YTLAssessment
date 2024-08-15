import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITransactionRecord, ITransactionState } from '../types'


const initialState: ITransactionState = {
  transactions: [],
  transactionInfo: {},
}

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    saveTransaction: (state, action) => {
      state.transactions = [...action?.payload]
    },
    getTransactionById: (state, action) => {
      state.transactionInfo = state.transactions?.filter((trs: ITransactionRecord) => {
        return trs?._id === action?.payload?._id
      }
      )
    }
  },
})

const { actions, reducer } = transactionSlice;
export const { saveTransaction, getTransactionById } = actions;
export default reducer;
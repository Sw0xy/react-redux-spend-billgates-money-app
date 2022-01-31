
import { createSlice } from '@reduxjs/toolkit';

export const moneySlice = createSlice({
    name: 'money',
    initialState: {
        amount: 100000000000,
        error: "",
    },
    reducers: {
        buyProduct: (state, action) => {
            state.amount = state.amount - action.payload;
            if(state.amount === 0){
                state.error = "You don't have enough money!";
            }
        },
        sellProduct: (state, action) => {
            state.amount = state.amount + action.payload;
        },
    },
});
export const moneySelector = state => state.money.amount;

export const errorSelector = state => state.money.error;

export const { buyProduct, sellProduct } = moneySlice.actions;

export default moneySlice.reducer;
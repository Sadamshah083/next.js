"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
    value: number
}
const initialState:CounterState = {
    value:0
}
export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.value -= action.payload
        },
        reset: (state) => {
            state.value = 0;
        }
        
    }
})

export const { increment,decrement,reset} = CounterSlice.actions
export default CounterSlice.reducer
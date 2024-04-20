import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    numOfTests: 5
}

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        ordered: state => {
            state.numOfTests--
        },
        restocked: (state, action) =>{
            state.numOfTests += action.payload
        }
    }
})

export default testSlice.reducer
export const {ordered, restocked} = testSlice.actions 
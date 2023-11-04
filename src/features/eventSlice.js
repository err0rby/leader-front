import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    events: []
}

export const fetchEvent = createAsyncThunk(
    'fetch/event',
    async (_, thunkAPI) => {
        try {
            const data = await fetch('http://localhost:3030/event')
            return data.json()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })

const eventSlice = createSlice({
    name: 'eventSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvent.fulfilled, (state, action) => {
                state.events = action.payload
            })
    }
})

export default eventSlice.reducer;
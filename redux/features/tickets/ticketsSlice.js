'use client'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (_, { getState }) => {
    const accessToken = Cookies.get('authToken')
    // if (!accessToken) {
    //   throw new Error('Access token not found')
    // }
    const response = await axios.get(
      'https://api.ebsalar.com/api/v1/front/ticket/',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    return response.data
  }
)

// Register ticket functionality start
export const registerTicketOnsite = createAsyncThunk(
  'tickets/registerTicketOnsite',
  async (ticketData, { rejectWithValue }) => {
    const accessToken = Cookies.get('authToken')
    if (!accessToken) {
      return rejectWithValue('Access token not found')
    }
    try {
      const response = await axios.post(
        `https://api.ebsalar.com/api/v1/front/ticket/`,
        ticketData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      )
      return response.data // Assuming API returns the newly created ticket data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
// Register ticket functionality finish

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    entities: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.entities = action.payload.results
        state.isLoading = false
        state.isError = false
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.entities = []
        state.isLoading = false
        state.isError = true
      })
      .addCase(fetchTickets.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerTicketOnsite.fulfilled, (state, action) => {
        state.entities.push(action.payload)
      })
      .addCase(registerTicketOnsite.rejected, (state, action) => {
        state.isError = true
        console.log(action.payload)
      })
  },
})
export default ticketsSlice.reducer

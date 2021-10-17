import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DashboardState {
  loggedIn: boolean
  address: string 
}


const initialState: DashboardState = {
  loggedIn: false,
  address:'',
  
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateAccountAddress: (
      state,
      action: PayloadAction<any>
    ) => {state.address = action.payload.address},
    updateLoggin: (state) => {
      state.loggedIn = true
    } 
  },
  
})

export const { updateAccountAddress, updateLoggin } = dashboardSlice.actions
export default dashboardSlice.reducer

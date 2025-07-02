import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/features/userSlice'

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

// const initialState = {
//   user: null
// }

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload
//     },
//     clearUser: (state) => {
//       state.user = null
//     }
//   }
// })

// export const { setUser, clearUser } = userSlice.actions

// const store = configureStore({
//   reducer: {
//     user: userSlice.reducer
//   }
// })

export default store

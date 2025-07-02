import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: undefined,
  email: undefined,
  email_verified: undefined,
  picture: undefined
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { name, email, email_verified, picture } = action.payload
      state.name = name
      state.email = email
      state.email_verified = email_verified
      state.picture = picture
    },
    updatePhoto: (state, action) => {
      state.picture = action.payload
    },
    clearUser: () => initialState,
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const { setUser, updatePhoto, clearUser, setLoading, setError } = userSlice.actions
export default userSlice.reducer

export const selectUser = (state) => state.user
export const selectUserPhoto = (state) => state.user.picture

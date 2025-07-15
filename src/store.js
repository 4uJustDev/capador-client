import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 }))
}))

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      setUser: (userData) =>
        set({
          user: {
            id: userData.sub,
            name: userData.name,
            email: userData.email,
            picture: userData.picture
          },
          isAuthenticated: true
        }),

      clearUser: () => set({ user: null, isAuthenticated: false })
    }),
    {
      name: 'user-storage'
    }
  )
)

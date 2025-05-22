import { create } from 'zustand'

const useStore = create((set) => ({
  location: '',
  input: '',
  data: null,
  setData: (data) => set(() => ({ data })),
  setInput: (input) => set(() => ({ input })),
  setLocation: (location) => set(() => ({ location })),
}))

export default useStore

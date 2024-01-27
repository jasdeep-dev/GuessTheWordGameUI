import { createSlice } from '@reduxjs/toolkit'

const colors = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'stone',
  'neutral',
  'zinc',
  'gray',
  'slate'
]

export const colorSlice = createSlice({
  name: 'color',
  initialState: {
    value: 'pink-100',
  },
  reducers: {
    setTheColor: (state, action) => {
      state.value = action.payload
    },
  },
})
export const { setTheColor } = colorSlice.actions

export const changeColor = (state) => state.color.value

export default colorSlice.reducer
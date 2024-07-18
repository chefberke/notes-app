import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { notesState } from './types/notesState'
import { dataState } from './types/dataState'

const initialState: notesState  = {
  data: [],
  filteredData: ""
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state: notesState, action: PayloadAction<dataState>) =>  {
      state.data = [...state.data, action.payload]
    },
    search: (state: notesState, action: PayloadAction<string>) => {
      if (state.data && state.data.length > 0) {
       if(action.payload == "") {
        state.filteredData = ""
        return;
       }
       const lowerText = action.payload.toLowerCase();
       const match = state.data.filter(
         (item: any) => item.title.toLowerCase().includes(lowerText) || item.content.toLowerCase().includes(lowerText)
       );
       state.filteredData = match
      }
    },
    deleteNote: (state: notesState, action: PayloadAction<number>) => {
      state.data = [...state.data.filter((item:any) => item.id !== action.payload)]
    },
    editNote: (state: notesState, action: PayloadAction<dataState>) => {
      state.data = [...state.data.map((item:any) => item.id !== action.payload.id ? item : action.payload)]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addNote, search, deleteNote, editNote } = notesSlice.actions

export default notesSlice.reducer
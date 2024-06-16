import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

export interface ImageState {
  images: any[]
  tag: string | null
  status: "idle" | "loading" | "failed"
  page: number
}

const initialState: ImageState = {
  images: [],
  tag: null,
  status: "idle",
  page: 1
}

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setTag: (state, action) => {
        state.tag = action.payload
    },
    incrementPage: (state) => {
      state.page += 1
    }
  }
})

export const { setTag, incrementPage } = imageSlice.actions

export const selectImages = (state: RootState) => state.image.images
export const selectPage = (state: RootState) => state.image.page
export const selectStatus = (state: RootState) => state.image.status
export const selectTag = (state: RootState) => state.image.tag

export default imageSlice.reducer

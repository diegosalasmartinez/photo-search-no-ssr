import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { UnsplashImage } from "@/lib/interfaces/UnsplashImage"
import { createAppSlice } from "../appSlice"
import { fetchImages } from "../api/imageApi"

export interface ImageState {
  images: UnsplashImage[]
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

export const imageSlice = createAppSlice({
  name: "image",
  initialState,
  reducers: (create) => ({
    setTag: create.reducer((state, action: PayloadAction<string>) => {
      state.tag = action.payload
    }),
    incrementPage: create.reducer((state) => {
      state.page += 1
    }),
    getImages: create.asyncThunk(
      async (page: number) => {
        const response = await fetchImages(page)
        return response
      },
      {
        pending: (state) => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.images = action.payload
        },
        rejected: (state) => {
          state.status = "failed"
        }
      }
    )
  }),
  selectors: {
    selectImages: (state) => state.images,
    selectPage: (state) => state.page,
    selectStatus: (state) => state.status,
    selectTag: (state) => state.tag
  }
})

export const { setTag, incrementPage, getImages } = imageSlice.actions

export const { selectImages, selectPage, selectStatus, selectTag } =
  imageSlice.selectors

export default imageSlice.reducer

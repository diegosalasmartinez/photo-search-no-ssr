import { PayloadAction } from "@reduxjs/toolkit"
import { UnsplashImage } from "@/lib/interfaces/UnsplashImage"
import { createAppSlice } from "../appSlice"
import { fetchImages } from "../api/imageApi"

export interface ImageState {
  images: UnsplashImage[]
  imageSelected: number | null
  tag: string | null
  showResults: boolean
  status: "idle" | "loading" | "failed"
  page: number
}

const initialState: ImageState = {
  images: [],
  imageSelected: null,
  tag: null,
  showResults: false,
  status: "idle",
  page: 1
}

export const imageSlice = createAppSlice({
  name: "image",
  initialState,
  reducers: (create) => ({
    clearImages: create.reducer(() => initialState),
    setTag: create.reducer((state, action: PayloadAction<string | null>) => {
      state.tag = action.payload
      state.images = []
      state.showResults = false
      state.page = 1
    }),
    setImageSelected: create.reducer(
      (state, action: PayloadAction<number | null>) => {
        state.imageSelected = action.payload
      }
    ),
    incrementPage: create.reducer((state) => {
      state.page += 1
    }),
    getImages: create.asyncThunk(
      async (data: { tag: string | null; page: number }) => {
        const response = await fetchImages(data.tag, data.page)
        return response
      },
      {
        pending: (state) => {
          state.status = "loading"
          state.showResults = false
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.images = state.images.concat(action.payload)
          state.showResults = true
        },
        rejected: (state) => {
          state.status = "failed"
          state.showResults = false
        }
      }
    )
  }),
  selectors: {
    selectImageSelected: (state) => state.imageSelected,
    selectShowResults: (state) => state.showResults,
    selectImages: (state) => state.images,
    selectStatus: (state) => state.status,
    selectPage: (state) => state.page,
    selectTag: (state) => state.tag
  }
})

export const {
  setImageSelected,
  incrementPage,
  clearImages,
  getImages,
  setTag
} = imageSlice.actions

export const {
  selectImageSelected,
  selectShowResults,
  selectStatus,
  selectImages,
  selectPage,
  selectTag
} = imageSlice.selectors

export default imageSlice.reducer

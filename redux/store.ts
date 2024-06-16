import {
  Action,
  ThunkAction,
  combineSlices,
  configureStore
} from "@reduxjs/toolkit"
import { imageSlice } from "./features/imageSlice"

const rootReducer = combineSlices(imageSlice)
export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
  }
})

// export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>

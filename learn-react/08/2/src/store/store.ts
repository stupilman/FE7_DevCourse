import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice'
import configureSlice from "./slice/configureSlice.ts";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    configure: configureSlice,

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
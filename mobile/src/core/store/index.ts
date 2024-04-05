import { configureStore } from '@reduxjs/toolkit'
import LoadingReducer from './reducers/LoadingReducer'

const store = configureStore({
  reducer: {
    LoadingReducer,
  },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
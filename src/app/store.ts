import { configureStore } from '@reduxjs/toolkit'
import mobileMenuOpenReducer from '../features/mobileMenuOpen'
import mainContentDisplayReducer from '../features/mainContentDisplay'
import newsCountReducer from '../features/newsCount'

export const store = configureStore({
  reducer: {
    mobileMenuOpen: mobileMenuOpenReducer,
    mainContentDisplay: mainContentDisplayReducer,
    newsCount: newsCountReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
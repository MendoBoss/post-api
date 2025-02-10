import { configureStore } from '@reduxjs/toolkit'
import counter from "./redux/counterSlice"
import stagiaire from "./redux/stagiaireSlice"

	export const store = configureStore({
	  reducer: {
        counter : counter,
        stagiaire : stagiaire,
      },
	})

	// Infer the `RootState` and `AppDispatch` types from the store itself
	export type RootState = ReturnType<typeof store.getState>
	// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
	export type AppDispatch = typeof store.dispatch
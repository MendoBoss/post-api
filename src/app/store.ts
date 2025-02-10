import { configureStore } from '@reduxjs/toolkit'
import counter from "./redux/counterSlice"
import stagiaire from "./redux/stagiaireSlice"
import user from './redux/userSlice'

	export const store = configureStore({
	  reducer: {
        counter : counter,
        stagiaire : stagiaire,
		user : user,
      },
	})

	// Infer the `RootState` and `AppDispatch` types from the store itself
	export type RootState = ReturnType<typeof store.getState>
	// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
	export type AppDispatch = typeof store.dispatch
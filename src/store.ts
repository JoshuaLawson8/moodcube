import { combineReducers, configureStore } from '@reduxjs/toolkit'
import pointsListSlice from './features/pointsList/pointsListSlice'
const rootReducer = combineReducers({
    pointsListSlice
})

export default configureStore({
    reducer: rootReducer,
})
export type RootState = ReturnType<typeof rootReducer>


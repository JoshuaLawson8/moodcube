import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import pointsListSlice from './features/pointsList/pointsListSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})

const rootReducer = combineReducers({
    pointsListSlice
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: customizedMiddleware

})
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof rootReducer>


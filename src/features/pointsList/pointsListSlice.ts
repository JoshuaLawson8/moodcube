import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CubePoint } from '../../types'

interface pointsListState {
    pointsList: CubePoint[]
}

const initialState: pointsListState = {
    pointsList: []
}

export const pointsListSlice = createSlice({
    name: 'pointsList',
    initialState: initialState,
    reducers: {
        addPoint: (state, action: PayloadAction<CubePoint>) => {
            return { pointsList: [...state.pointsList, action.payload] }
        },
        deletePoint: (state, action: PayloadAction<string>) => {
            return { pointsList: state.pointsList.filter((point) => point.uuid !== action.payload) }
        },
        clearList: (state) => {
            return { pointsList: [] }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addPoint, deletePoint, clearList } = pointsListSlice.actions

export default pointsListSlice.reducer
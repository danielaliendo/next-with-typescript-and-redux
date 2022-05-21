import {types} from "../types/types";

export interface UiReducer {
    message: string
}

const initialState: UiReducer = {
    message: 'No logged...'
}

interface Action {
    type: string,
    payload: any
}

export const uiReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case types.startLogin:
            return {
                ...state,
                message: action.payload
            }
        default: return state
    }
}
import {types} from "../types/types";

export const startLogin = (value: any) => ({
    type: types.startLogin,
    payload: value
})
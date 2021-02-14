import {SET_AUTH_TOKEN} from './authActionType'

export const setAuthToken = (item) =>({
    type: SET_AUTH_TOKEN,
    payload: item
})
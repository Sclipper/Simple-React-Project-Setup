import { SET_AUTH } from './constants'
import { MainContextDispatch, SetAuthActionPayload } from './types'

export const actions = (dispatch: MainContextDispatch) => ({
  setAuth: (payload: SetAuthActionPayload) => dispatch({ type: SET_AUTH, payload }),
  setTheme: (theme: 'dark' | 'light') => dispatch({ type: 'SET_THEME', payload: theme }),
})

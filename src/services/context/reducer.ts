import { MainContextAction, MainContextState } from './types'
import { SET_AUTH, SET_THEME } from './constants'

/**
 * 1. Name with capital
 * 2. Tab
 * 3. Name with lowercase
 */

export function mainContextReducer(
  state: MainContextState,
  { type, payload }: MainContextAction,
): MainContextState {
  switch (type) {
    case SET_AUTH: {
      return {
        ...state,
        auth: {
          ...state.auth,
          [payload.dataKey]: payload.dataValue,
        },
      }
    }
    case SET_THEME: {
      return {
        ...state,
        theme: payload,
      }
    }
    default: {
      throw new Error('Unhandled type: type')
    }
  }
}

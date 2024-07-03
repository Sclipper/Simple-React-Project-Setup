import { SET_AUTH, SET_THEME } from './constants'

export type User = {
  id: string
  email: string
  name: string
}

export type AuthType = {
  isAuthenticated: boolean
  user: User | null
}

export type MainContextState = {
  auth: AuthType
  theme: 'dark' | 'light' | null
}

export type SetAuthActionPayload = { dataKey: keyof AuthType; dataValue: AuthType[keyof AuthType] }
export type SetThemeActionPayload = 'dark' | 'light'

// The is union of all possible actions
export type MainContextAction =
  | {
      type: typeof SET_AUTH
      payload: SetAuthActionPayload
    }
  | {
      type: typeof SET_THEME
      payload: SetThemeActionPayload
    }

export type MainContextDispatch = (action: MainContextAction) => void

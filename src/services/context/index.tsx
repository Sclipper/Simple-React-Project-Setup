import * as React from 'react'

import { actions } from './actions'
import { mainContextReducer } from './reducer'
import { MainContextState, MainContextDispatch } from './types'

const checkIfAuthenticated = () => false

export type StateType = {
  state: MainContextState
  dispatch: MainContextDispatch
  actions: ReturnType<typeof actions>
}
export const MainContextStateContext = React.createContext<
  | {
      state: MainContextState
      dispatch: MainContextDispatch
      actions: ReturnType<typeof actions>
    }
  | undefined
>(undefined)

export const mainContextDefaultState = {
  auth: {
    isAuthenticated: checkIfAuthenticated(),
    user: null,
  },
  theme: null,
} as const

function MainContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(mainContextReducer, mainContextDefaultState)

  const value = React.useMemo(
    () => ({
      state,
      actions: actions(dispatch),
      dispatch,
    }),
    [state, dispatch],
  )

  return (
    <MainContextStateContext.Provider value={value}>{children}</MainContextStateContext.Provider>
  )
}

function useMainContext() {
  const context = React.useContext(MainContextStateContext)
  if (context === undefined) {
    throw new Error('useMainContext must be used within a MainContextProvider')
  }
  return context
}

export { MainContextProvider, useMainContext }

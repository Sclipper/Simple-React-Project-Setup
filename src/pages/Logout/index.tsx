import * as React from 'react'

import { useNavigate } from '@tanstack/react-router'
import { useMainContext } from '../../services/context'
import { SET_AUTH } from '../../services/context/constants'

function Logout() {
  const { state, dispatch } = useMainContext()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (state.auth.isAuthenticated === true) {
      dispatch({ type: SET_AUTH, payload: { dataKey: 'isAuthenticated', dataValue: false } })

      navigate({
        to: '/',
      })
    }
  }, [dispatch, navigate, state.auth.isAuthenticated])

  return (
    <div>
      <p>Logged out</p>
    </div>
  )
}

export default Logout

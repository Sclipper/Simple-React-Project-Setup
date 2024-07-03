import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext } from '@tanstack/react-router'

// import Root from '../pages/Root'
import Root from '../pages/Root'
import { StateType } from '../services/context'

type RootContext = {
  queryClient: QueryClient
  mainContext: StateType
}

export const Route = createRootRouteWithContext<RootContext>()({
  component: () => <Root />,
})

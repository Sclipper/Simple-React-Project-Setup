import { Flex, Tabs } from '@radix-ui/themes'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Link, Outlet } from '@tanstack/react-router'

import { useMainContext } from '../../services/context'
import Login from '../Login'
import './Root.styles.css'

function Root() {
  const { state: mainContextState } = useMainContext()
  if (!mainContextState.auth.isAuthenticated) {
    return <Login />
  }

  return (
    <Flex flexGrow="1" overflow="hidden" direction="column" m="5">
      <Tabs.Root style={{ content: 'none' }} defaultValue="all-tools">
        <Tabs.List>
          <Link to="/">
            <Tabs.Trigger value="all-tools">Any tools if necessary</Tabs.Trigger>
          </Link>
        </Tabs.List>
      </Tabs.Root>
      <Outlet />
      <ReactQueryDevtools />
      {/* <TanStackRouterDevtools /> */}
    </Flex>
  )
}

export default Root

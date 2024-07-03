import * as React from 'react'
import '@radix-ui/themes/styles.css'
import './globalStyles.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// eslint-disable-next-line
// Import the generated route tree
import { Flex, Spinner, Theme } from '@radix-ui/themes'
import { routeTree } from './routeTree.gen'
import { MainContextProvider, mainContextDefaultState, useMainContext } from './services/context'
import { actions } from './services/context/actions'

export const queryClient = new QueryClient()

// Create a new router instance
export const router = createRouter({
  routeTree,
  defaultPendingComponent: () => (
    <Spinner
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  ),
  defaultErrorComponent: ({ error }) => {
    console.log('Error rendering a component: ', error)
    return <div>Something went wrong</div>
  },
  context: {
    mainContext: {
      state: mainContextDefaultState,
      dispatch: () => {},
      actions: actions(() => {}),
    },
    queryClient,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// eslint-disable-next-line react-refresh/only-export-components
function InnerApp() {
  const mainContext = useMainContext()
  const [mode, setMode] = React.useState<'dark' | 'light'>(() => {
    const storedMode = localStorage.getItem('mode')

    return storedMode === 'dark' ? 'dark' : 'light'
  })

  const handleSetMode = (updatedMode: 'dark' | 'light') => {
    localStorage.setItem('mode', updatedMode)
    setMode(updatedMode)
  }

  return (
    <Theme appearance={mode} accentColor="purple">
      <Flex
        style={{ height: '100vh', overflow: 'hidden', boxSizing: 'border-box' }}
        direction="row"
      >
        <RouterProvider router={router} context={{ mainContext }} />
      </Flex>
    </Theme>
  )
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <MainContextProvider>
        <QueryClientProvider client={queryClient}>
          <InnerApp />
        </QueryClientProvider>
      </MainContextProvider>
    </StrictMode>,
  )
}

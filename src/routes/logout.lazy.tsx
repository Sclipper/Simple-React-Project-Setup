import { createLazyFileRoute } from '@tanstack/react-router'

import Logout from '../pages/Logout'

export const Route = createLazyFileRoute('/logout')({
  component: () => <Logout />,
})

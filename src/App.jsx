import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useDarkMode } from './hooks/theme/useDarkMode.js'
import DashboardPage from './pages/Dashboard.jsx'
import ProtectedRoute from './components/nav/ProtectedRoute.jsx'
import LandingPage from './pages/Landing.jsx'
import AuthPage from './pages/Auth.jsx'
import NotFoundPage from './pages/404.jsx'
import { Toaster } from 'react-hot-toast'
import { Progress } from '@nextui-org/react'
import { useUser } from './hooks/react-query/user/useUser.js'
import ListDetailsPage from './pages/ListDetailsPage.jsx'
import OnboardingPage from './pages/Onboarding.jsx'
import { useState } from 'react'
import CurrentWorkspaceContext from './context/currentWorkspace.js'

function App() {
  const { isLoading } = useUser()
  const [darkMode] = useDarkMode()
  const [currentWorkspace, setCurrentWorkspace] = useState(null)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/login',
      element: <AuthPage authMode="login" />,
    },
    {
      path: '/signup',
      element: <AuthPage authMode="signup" />,
    },
    {
      path: '/dashboard',
      element: (
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      ),
    },
    {
      path: '/onboarding',
      element: (
        <ProtectedRoute>
          <OnboardingPage />
        </ProtectedRoute>
      ),
    },
    {
      path: '/lists/:id', // Dynamic route with "id" as the parameter
      element: (
        <ProtectedRoute>
          <ListDetailsPage />
        </ProtectedRoute>
      ),
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ])

  return (
    <main className={`${darkMode ? 'dark' : ''} text-foreground bg-background`}>
      <CurrentWorkspaceContext.Provider
        value={[currentWorkspace, setCurrentWorkspace]}
      >
        {isLoading && <Progress size="sm" isIndeterminate />}
        <RouterProvider router={router} />
        <Toaster position="bottom-center" />
      </CurrentWorkspaceContext.Provider>
    </main>
  )
}

export default App

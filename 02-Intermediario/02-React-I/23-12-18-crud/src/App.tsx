import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, themes } from './styles'
import { Home, About, Layout } from './pages'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'a',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
    errorElement: <div>Erro</div>,
  },
])

function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </ThemeProvider>
  )
}

export default App

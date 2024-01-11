import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles'
import { Home, About, Layout } from './pages'
import { useTheme } from './contexts/ThemeContext'
import { ShowBooks } from './pages/show-books'
import { BooksProvider } from './contexts/BooksContext'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'books',
        element: <ShowBooks />,
      },
    ],
    errorElement: <div>Erro</div>,
  },
])

function App() {
  const themeContext = useTheme()

  return (
    <ThemeProvider theme={themeContext.theme}>
      <BooksProvider>
        <RouterProvider router={routes} />
        <GlobalStyles />
      </BooksProvider>
    </ThemeProvider>
  )
}

export default App

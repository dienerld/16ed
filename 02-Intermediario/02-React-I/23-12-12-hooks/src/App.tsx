import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Home, About, Layout } from './pages';

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
        path: '/about',
        element: <About />,
      },
    ],
    errorElement: <div>Erro</div>,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

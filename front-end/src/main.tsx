import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Characters from './routes/Characters.tsx'
import Episodes from './routes/Episodes.tsx'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Characters/>
      },
      {
        path: "/characters",
        element: <Characters/>
      },
      {
        path: "/episodes",
        element: <Episodes/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

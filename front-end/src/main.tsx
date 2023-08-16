import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Characters from './routes/characters/Characters.tsx'
import Episodes from './routes/episodes/Episodes.tsx'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Locations from './routes/locations/Locations.tsx'

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
      },
      {
        path: "/locations",
        element: <Locations/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

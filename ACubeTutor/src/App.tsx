
import './App.css'
import Login from './assets/Login/Login.tsx'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Home from './assets/Home/Home.tsx'

const router = createBrowserRouter([
  {
    path : "/",
    element:<Login/>
  },
   {
    path : "/Home",
    element:<Home/>
  }
])
function App() {
  return (
  
    <RouterProvider router={router}/>
  
  )
}

export default App

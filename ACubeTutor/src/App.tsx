
import './App.css'
import Login from './assets/Components/Login/Login.tsx'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Home from './assets/Components/Home/Home.tsx'
import Statistics from './assets/Components/Statistics/Statistics.tsx'
import Addmision from './assets/Components/Addmision/Addmision.tsx'
import Students from './assets/Components/Students/Students.tsx'
import Teachers from './assets/Components/Teachers/Teachers.tsx'
import FeesManagement from './assets/Components/FeesManagement/FeesManagement.tsx'
import Attendance from './assets/Components/Attendance/Attendance.tsx'

const router = createBrowserRouter([
  {
    path : "/",
    element:<Login/>
  },
   {
    path : "/Home",
    element:<Home/>
  },
  {
    path : "/statistics",
    element:<Statistics/>
  },
  {
    path : '/addmision',
    element:<Addmision/>
  },
  {
    path : '/teachers',
    element:<Teachers/>
  },
  {
    path : '/students',
    element:<Students/>
  },
  {
    path : "/feesmanagement",
    element:<FeesManagement/>
  },{
    path : "/attendance",
    element:<Attendance/>
  }
])
function App() {
  return (
  
    <RouterProvider router={router}/>
  
  )
}

export default App

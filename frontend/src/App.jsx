import React from 'react'
import {RouterProvider} from "react-router";
import {router} from "./routes/Route"


const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
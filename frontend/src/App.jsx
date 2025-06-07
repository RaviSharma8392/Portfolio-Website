import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './appLayout/AppLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import CustomCursor from './appLayout/Cursor'

const App = () => {
  return (
    <div className=''><CustomCursor/>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
        <Route index element={<Home/>}/>
                  <Route path='#about' element={<About />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
import React from 'react'
import Signup from './pages/Signup'
import {Routes,Route} from 'react-router-dom'
import {Toaster} from 'sonner';
function App() {
  return (
    <div>
    <Routes>
      <Route path="/register" element={<Signup/>}/>
    </Routes>
    <Toaster position='bottom-right'/>
    </div>
  )
}

export default App

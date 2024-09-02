// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import React from 'react'
import Product from './component/Product'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'
import Services from './pages/Services'
import Input from './component/Input'
import Parent from './component/Parents'
function App() {
 
  return (
    <>
 <Parent/>
     <Navbar/>
     <Input/>
   <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path="/services" element={<Services/>} />
    <Route path='/product' element= {<Product/>}/>
   </Routes>
   </>
  )
}

export default App

//NOTE import BrowserRouter component in the main.jsx file and wrap the <App/> component in it
//NOTE Go to the App.jsx file import the Routes , Route component 
//NOTE call the Routes at top level then render Route component for each route you have to create it accept the path and element prop in path you have to pass the path where the component is going to show and in the element you have to pass which component is going to show on the screen.
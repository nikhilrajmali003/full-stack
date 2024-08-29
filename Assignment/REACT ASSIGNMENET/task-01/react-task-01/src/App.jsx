import { useState } from 'react'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex'>
    <Card heading={'card1'} discription={'discription for card 1'}/>
    <Card heading={'card2'} discription={'discription for card 2'}/>
    <Card heading={"card3"} discription={'discription for card 3'}/>
    <Card heading={'card4'} discription={'discription for card 4'}/>

    </div>
    
    </>
  )
}

export default App

import './App.css'
import htmlimg from './assets/html.png'
import Card from './components/card'
import cssimg from './assets/css.png'
import jsimg from './assets/js.jpeg'
function App(){
  return(
    <>
    <button text='click'/>
      <button text='submit'/>
      <div className='flex justify-center'>
        <Card img={htmlimg} text='HTML'/>
        <Card img ={cssimg} text='CSS'/>
        <Card img ={jsimg} text='javascript'/>
      </div>
      </>
  )
}

export default App ;
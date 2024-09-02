// function App(){
//   return(
//     <>
//     <button text='click'/>
//       <button text='submit'/>
//       <div className='flex justify-center'>
//         {/* <Card img={htmlimg} text='HTML'/>
//         <Card img ={cssimg} text='CSS'/>
//         <Card img ={jsimg} text='javascript'/> */}
//       </div>
//       </>
//   )
// }


function App() {

  //NOTE creating state for the data which changes in our application so that react rerender our application to show the updated content
const [product, setProduct] = useState('tv')
 const[firstName , setFirstName]= useState('ritesh')
 const [username,setUsername]=useState(' ');
    const [password,setPassword]=useState(' '); 
 //NOTE Handling the events
 const handleClick = () => {
 setProduct('mobile')
 setFirstName('abc')
 }

 const cardData = [
  {id :1,img : htmlimg , text:'HTML'},
  {id :2,img:cssimg , text:'CSS'},
  {id :3,img:jsimg,text:'javascript'}
 ]

 const emojiArray = ['❌','✅','🚀','🍿']

  return (
    <>
    <button className="px-6 py-2 bg-red-500 rounded-sm m-4 text-white" onClick={handleClick} >Click</button>
   <Userlist username={username} password={password}/>
   <Form username={username} setUsername ={setUsername} password={password} setPassword={setPassword}/>
   {/* rendering a list in react */}
   {emojiArray.map((el)=>(
    <div>{el}</div>
   ))}
 
    <p className='text-3xl m-3'>{firstName}</p>
      <div className='flex justify-center'>
      {cardData.map((el)=>(
        <Card img={el.img} text={el.text}/>
      ))}
      </div>
    </>

  );
}
export default App ;

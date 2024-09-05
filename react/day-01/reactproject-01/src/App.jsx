// import React, { useEffect , useState } from 'react'
// import Product from './components/Product';

// function App() {
//   const [count ,setCount] = useState(0);
  
// //NOTE without dependency array
//   useEffect(()=>{
//     console.log('this will run every time')
//   })

//   //NOTE with empty dependency array
//   useEffect(()=>{
//     console.log("this will run one time when page refresh")
//   },[])

//   //note this will run when dependency changes or updated
//   useEffect(()=>{
//     console.log('this will run when count increase')
//   },[count])


//   return (
//     <div>
//       <p>{count}</p>
//     <button onClick={()=>{setCount(count+1)}}>increase</button>
//     <Product/>
//     </div>
//   )
// }

// export default App


// // useEffect(callback ,dependeny array) ;



import React, { useEffect , useState } from 'react'
import Product from './component/Product';
import Description from './component/Description';
import Profile from './component/Profile';
import Reducer from './component/Reducer';

// function App() {
//   const [count ,setCount] = useState(0);

// //NOTE without dependency array
//   useEffect(()=>{
//     console.log('this will run every time')
//   })

//   //NOTE with empty dependency array
//   useEffect(()=>{
//     console.log("this will run one time when page refresh")
//   },[])

//   //note this will run when dependency changes or updated
//   useEffect(()=>{
//     console.log('this will run when count increase')
//   },[count])

//   const data = {
//     user : 'ritesh'
//   }
 

//   return (
    
//     <div>
//        <Reducer/>
//       {/* <p>{count}</p>
//     <button onClick={()=>{setCount(count+1)}}>increase</button> */}

   
//     <Description user={data}/>
//     <Profile user={data}/>
//     </div>
//   )
// }

// export default App


// useEffect(callback ,dependeny array) ;




import React from 'react'
import Reducer from './components/Reducer'
function App() {
  return (
    <div>
      <Reducer/>
    </div>
  )
}

export default App
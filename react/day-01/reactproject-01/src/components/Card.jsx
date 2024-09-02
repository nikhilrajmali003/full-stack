import React from "react";
 const Card=({img,text})=>{
    return(
        <div className="h-96 w-64">
            <div>
               <img className='w-full' src={img}/>
               <h1 className="text-3xl font-bold text-blue-500 p-4 text-center">
                {text}
               </h1>
            </div>
        </div>
    )
}

export default Card;
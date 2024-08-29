import React from 'react'

function Userlist() {
    const users=['ritesh','ranjeet','nikhil','kushal'];

  return (
    <div>
      <ul>
        {
            users.map((listitem,index)=>(
                <li key={listitem}>{listitem}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Userlist
// rfce=for normal function component
// rafce=for arrow function component
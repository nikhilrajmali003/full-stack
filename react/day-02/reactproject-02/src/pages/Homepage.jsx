import React , {useState , useCallback} from 'react'
import TodoList from '../component/TodoList'
import HocMemo from '../component/HocMemo'

function Homepage() {
  const [items,setItems] = useState([], )

  const addItem = useCallback((value) => {
    setItems([...items , value])
  },[])

  return (
    <div>
   <TodoList items={items} addItem={addItem} />
   <HocMemo/>
    </div>
  )
}

export default Homepage
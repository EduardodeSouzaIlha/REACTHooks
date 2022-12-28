import { useState,useEffect } from "react"

const List = ({getItems}) => {
    const [myItems, setMyItems] = useState([]);

    useEffect(()=>{
        console.log('Search itens in DB')
        setMyItems(getItems())
    }, [getItems])
  return (
    <div>
        {myItems.map((Item)=>(
            <p key={Item}>{Item}</p>
        ))}
    </div>
  )
}

export default List;
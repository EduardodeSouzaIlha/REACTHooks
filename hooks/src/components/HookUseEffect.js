import {useEffect, useState} from 'react'

const HookUseEffect = () => {
 //Use Effect without dependencies
    useEffect(()=>{
        console.log("hello i'm running")
    })
    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number+1)
    }

    //Array of dependencies empty
    useEffect(()=>{
        console.log("hello i'm running ONLY ONE TURN")
    },[])

    //Itens in the array of dependencies
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() =>{
        if(anotherNumber!==0){
            console.log("When the another number change i change too")

        }
    }, [anotherNumber])

    //cleanup do useEffect

    useEffect(()=>{
        const timer = setTimeout(()=>{
            console.log("hello")
            setAnotherNumber(anotherNumber+1)
        }, 2000)
        return function(){
            clearTimeout(timer)
        }
    },[anotherNumber])
  return (
    <div>
        <h2>UseEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Change</button>

        <p>I am a number {anotherNumber}</p>
        <button onClick={()=>setAnotherNumber(anotherNumber+1)}>More 1</button>
        <hr/>
    </div>
  )
}

export default HookUseEffect
import {useState, useEffect, useMemo} from 'react'

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)
    // const premiumNumber = ["0", "100", "200", "300"]
    const premiumNumber = useMemo(()=>{
        return ["0", "100", "200", "300"]
    }, [])
    useEffect(() =>{
        console.log("Premium number has changed")
    }, [premiumNumber])
  return (
    <div>
        <h2>useMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)}/>
        {premiumNumber.includes(number) ? <p>You write the rigth answer</p> : ""}
        <hr/>
    </div>
  )
}

export default HookUseMemo
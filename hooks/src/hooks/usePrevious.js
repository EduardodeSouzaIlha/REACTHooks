import {useEffect, useRef, useDebugValue} from 'react'

export const usePrevious =(value)=>{
    const raf =useRef

    useDebugValue("--CUSTOM HOOK--")
    useDebugValue("THE LAST NUMBER WAS " + value)

    useEffect(()=>{
        raf.current = value
    })
    return raf.current
}

export default usePrevious
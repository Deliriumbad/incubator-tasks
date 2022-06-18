import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample');

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
        //api.getUsers().then('')
        //setInterval()
        //indexedDB
        //document.getElementId
        //document.title = "User"
    })

    useEffect(() => {
        console.log("useEffect render only first time (componentDidMount)")
        document.title = counter.toString()
        //api.getUsers().then('')
        //setInterval()
        //indexedDB
        //document.getElementId
        //document.title = "User"
    }, [])

    useEffect(() => {
        console.log("useEffect render first time and every times when counter will change")
        document.title = counter.toString()
        //api.getUsers().then('')
        //setInterval()
        //indexedDB
        //document.getElementId
        //document.title = "User"
    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>

}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('SetTimeoutExample');

    /*useEffect(()=>{

       setTimeout(()=>{
           console.log("useEffect every render")
           document.title = counter.toString()
       }, 1000);
    },[counter])*/

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log('tick' + counter)
            setCounter(state => state + 1)
        }, 1000);
        return ()=> {
            clearInterval(intervalId)
        }
    }, [])

    return <>Hello, counter: {counter}</>

}
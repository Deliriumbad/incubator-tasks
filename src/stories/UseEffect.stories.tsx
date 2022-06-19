import React, {useEffect, useState} from "react";
import {clearInterval} from "timers";

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

/*export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('SetTimeoutExample');

    /!*useEffect(()=>{

       setTimeout(()=>{
           console.log("useEffect every render")
           document.title = counter.toString()
       }, 1000);
    },[counter])*!/

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
}*/

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component render with' + counter)

    useEffect(() => {
        console.log('Effect occurred' + counter)

        return ()=> {
            console.log('RESET EFFECT' + counter)
        }

    }, [])

    const increase = () => {setCounter(counter+1)}

    return <>
        Hello, counter: {counter}<button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component render with' + text)

    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)

        return ()=> {
            window.removeEventListener('keypress', handler)//обязательно нужно зачищать.
        }

    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample1 = () => {
    const [text, setText] = useState('')

    console.log('Component render with' + text)

    useEffect(() => {
        const timeoutId = setTimeout(()=> {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)
        return ()=> {
            clearTimeout(timeoutId)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}
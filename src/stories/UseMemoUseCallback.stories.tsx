import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo',
}

export const DifficultCountingExample = () => {//первый сценарий исользования - избежать перезагрузки системы, чтобы не повторять сложное вычисление, если результат его не менялся.

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    for (let i = 1; i <= a; i++) {//вычисление факториала
        resultA = resultA * i;
    }

    /*for (let i = 1; i <= b; i++) {//вычисление факториала, но нужно сделать так, чтобы процесс грузил систему.
        resultB = resultB * i;
    }*/

    resultB = useMemo(() => {
        let tempResultB = 1;
        for (let i = 1; i <= b; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultB = tempResultB * i
        }
        return tempResultB
    }, [b])

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Bob', 'Alex', 'Fred'])


    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('e') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Elena' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    /*const addBook = () => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }

    const memoizedAddBook = useMemo(()=>{//вместо useCallback, но пишем поотдельности, чтобы так не делать - пример ниже
        return addBook
    }, [books])*/

    const memoizedAddBook = useMemo(() => {//вместо useCallback, но пишем сразу, ниже пример с useCallback
        return () => {
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)

    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}

type BookSecretPropsType = {
    addBook: () => void
}

const BooksSecret: React.FC<BookSecretPropsType> = (props) => {
    const {addBook} = props;
    console.log('Books')
    return <div>
        <button onClick={() => addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)






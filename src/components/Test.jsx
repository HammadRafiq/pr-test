import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const Test = () => {
    const [searchParams] = useSearchParams()
    console.log("searchParams: ", searchParams.get("partnerId"))

    async function promisesTest() {
        // let rejectedPromise = new Promise((resolve, reject) => {
        //     reject("This iz the rejected promise")
        // })
        let promise1 = new Promise((resolve, reject) => {
            resolve("This is the resolved promise 01")
        })
        let promise2 = new Promise((resolve, reject) => {
            resolve("This is the resolved promise 02")
        })
        // let promiseAll = Promise.all([rejectedPromise, promise1, promise2])
        // promiseAll.then(data => {
        //     console.log("data: ", data)
        // })
        try {
            const result2 = await promise1
            console.log("result2: ", result2)
            const result55 = await new Promise((resolve, reject) => {
                reject("This iz the rejected promise")
            })
            console.log("result55: ", result55)
            const result3 = await promise2
            console.log("result3: ", result3)
        }
        catch (error) {
            console.log("errorz: ", error)
        }
    }

    function test() {
        
    }

    useEffect(() => {
        test()
    }, [])


    return (
        <div>
            This is the test component
        </div>
    )
}

export default Test
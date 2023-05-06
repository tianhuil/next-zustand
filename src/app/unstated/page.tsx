"use client"
import React from 'react'
import { createContainer } from 'unstated-next'

let views = 0

const CounterState = createContainer(() => {
    const [counter, setCounter] = React.useState(0)
    const increment = () => setCounter(counter + 1)
    return {counter, increment}
})

const _Page: React.FC = () => {
  views++
  const {counter, increment} = CounterState.useContainer()
  return <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>Unstated Counter: {counter} Views: {views}</div>
    <button onClick={increment}>Increment</button>
  </main>
}

const Page: React.FC = () => {
    return <CounterState.Provider>
        <_Page />
    </CounterState.Provider>
}

export default Page

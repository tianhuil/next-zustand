"use client"
import React from 'react'
import { createContainer } from 'unstated-next'

let views = 0

const CounterState = createContainer(() => {
    const [counter, setCounter] = React.useState<{count: number}>({count: 0})
    const increment = () => setCounter({count: counter.count + 1})
    return {counter, increment}
})

const OtherComponent: React.FC = () => {
    views++
    return <div>OtherComponent Views: {views}</div>
}

const _Page: React.FC = () => {
  const {counter, increment} = CounterState.useContainer()
  return <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>Unstated Counter: {counter.count} </div>
    <button onClick={increment}>Increment</button>
    <OtherComponent/>
  </main>
}

const Page: React.FC = () => {
    return <CounterState.Provider>
        <_Page />
    </CounterState.Provider>
}

export default Page

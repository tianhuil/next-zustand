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
    const {increment} = CounterState.useContainer()
    views++
    return <div>
        <div>OtherComponent Views: {views}</div>
        <button onClick={increment}>Increment</button>
    </div>
}

const _Page: React.FC = () => {
  const {counter, increment} = CounterState.useContainer()
  return <div >
    <div>Unstated Counter: {counter.count} </div>
    <button onClick={increment}>Increment</button>
  </div>
}

const Page: React.FC = () => {
    return <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CounterState.Provider>
            <_Page />
            <OtherComponent/>
        </CounterState.Provider>
    </main>
}

export default Page

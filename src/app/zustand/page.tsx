"use client"
import { create } from 'zustand'

const useCounter = create<{counter: number, increment: () => void}>((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
}))

let views = 0

const Zustand1: React.FC = () => {
  const increment = useCounter(state => state.increment)
  views++
  return <div>
    <div>Views: {views}</div>
    <button onClick={increment}>Increment</button>
  </div>
}

const Zustand2: React.FC = () => {
  const {increment, counter} = useCounter()
  return <div>
    <div>Counter: {counter}</div>
    <button onClick={increment}>Increment</button>
  </div>
}

const Zustand: React.FC = () => (<main className="flex min-h-screen flex-col items-center justify-between p-24">
  <Zustand1/>
  <Zustand2/>
</main>)

export default Zustand

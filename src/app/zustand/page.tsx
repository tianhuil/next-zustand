"use client"
import { create } from 'zustand'

const useCounter = create<{counter: number, increment: () => void}>((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
}))

let views = 0

const OtherComponent: React.FC = () => {
  views++
  return <div>OtherComponent Views: {views}</div>
}

const Zustand: React.FC = () => {
  const {counter, increment} = useCounter()
  return <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>Zustand Counter: {counter} Views: {views}</div>
    <button onClick={increment}>Increment</button>
    <OtherComponent/>
  </main>
}

export default Zustand

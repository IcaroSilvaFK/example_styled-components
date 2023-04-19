import {ReactNode, createContext, useState} from 'react'


interface ICounterContextProps {
  count: number;
  handleAddCount():void
}

export const CounterContext  =createContext<ICounterContextProps>({} as ICounterContextProps)

export function CounterContextProvider({children}:{children:ReactNode}){
  const [count,setCount] = useState(0)


  function handleAddCount(){
    setCount(prev => prev +1)
  }

  return (
    <CounterContext.Provider value={{
      count,handleAddCount
    }}>
      {children}
    </CounterContext.Provider>
  )
}
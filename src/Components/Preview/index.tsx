
import { useCounter } from "../../hooks/useCounter"

export function Preview(){
  const {count} = useCounter()

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}
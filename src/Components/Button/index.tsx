import { useCounter } from '../../hooks/useCounter'
import { Container } from './styles'


export function Button(){
  const {handleAddCount} = useCounter()

  return (
    <Container isActive onClick={handleAddCount}>
      <span>

      add
      </span>
    </Container>
  )
}
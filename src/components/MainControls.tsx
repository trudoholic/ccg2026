import {useFlowStore} from "../store/useFlowStore"
import {Button} from "./Button"

function MainControls() {
  const decreaseCount = useFlowStore(s => s.decreaseCount)
  const increaseCount = useFlowStore(s => s.increaseCount)
  const setPlayers = useFlowStore(s => s.setPlayers)

  return (
    <div className="flex flex-col gap-1">
      <Button onClick={decreaseCount}>Decrease Count</Button>
      <Button onClick={increaseCount}>Increase Count</Button>

      <Button onClick={() => setPlayers(2)}># 2</Button>
      <Button onClick={() => setPlayers(3)}># 3</Button>
      <Button onClick={() => setPlayers(4)}># 4</Button>

      <Button onClick={() => setPlayers(0)}>New Game</Button>
    </div>
  )
}

export default MainControls

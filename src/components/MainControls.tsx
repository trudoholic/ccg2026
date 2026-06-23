import {useFlowStore} from "../store/useFlowStore"
import {Button} from "./Button"

function MainControls() {
  const nPlayers = useFlowStore(s => s.nPlayers)
  const setPlayers = useFlowStore(s => s.setPlayers)

  return (
    <div className="flex flex-col gap-1">
      {nPlayers? (
        <Button onClick={() => setPlayers(0)}>New Game</Button>
      ): (
        <>
          <Button onClick={() => setPlayers(2)}># 2</Button>
          <Button onClick={() => setPlayers(3)}># 3</Button>
          <Button onClick={() => setPlayers(4)}># 4</Button>
        </>
      )}
    </div>
  )
}

export default MainControls

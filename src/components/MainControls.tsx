import {useFlowStore} from "../store/useFlowStore"
import {usePlayersStore} from "../store/usePlayersStore"
import {Button} from "./Button"

function MainControls() {
  const nPlayers = useFlowStore(s => s.nPlayers)
  const setPlayers = useFlowStore(s => s.setPlayers)
  const setHandIdx = useFlowStore(s => s.setHandIdx)
  const setTurnIdx = useFlowStore(s => s.setTurnIdx)
  const nextHandIdx = useFlowStore(s => s.nextHandIdx)
  const nextTurnIdx = useFlowStore(s => s.nextTurnIdx)

  const createPlayers = usePlayersStore(s => s.createPlayers)

  function startNewGame(n:number) {
    createPlayers(n)
    setPlayers(n)
    const elderHandIdx = Math.floor(Math.random() * n)
    setHandIdx(elderHandIdx)
    setTurnIdx(elderHandIdx)
  }

  function endGame() {
    createPlayers(0)
    setPlayers(0)
  }

  return (
    <div className="flex flex-col gap-1">
      {nPlayers? (
        <>
          <Button onClick={endGame}>New Game</Button>
          <div className="h-1" />
          <Button onClick={nextHandIdx} variant={"red"}>Next Hand</Button>
          <Button onClick={nextTurnIdx} variant={"red"}>Next Turn</Button>
        </>
      ): (
        <>
          <Button onClick={() => startNewGame(2)}># 2</Button>
          <Button onClick={() => startNewGame(3)}># 3</Button>
          <Button onClick={() => startNewGame(4)}># 4</Button>
        </>
      )}
    </div>
  )
}

export default MainControls

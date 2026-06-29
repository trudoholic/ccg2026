import {useFlowStore} from "../store/useFlowStore"
import {usePlayersStore} from "../store/usePlayersStore"
import {Button} from "./Button"

function MainControls() {
  const nPlayers = useFlowStore(s => s.nPlayers)
  const turnIdx = useFlowStore(s => s.turnIdx)

  const setPlayers = useFlowStore(s => s.setPlayers)
  const setHandIdx = useFlowStore(s => s.setHandIdx)
  const setTurnIdx = useFlowStore(s => s.setTurnIdx)
  const nextHandIdx = useFlowStore(s => s.nextHandIdx)
  const nextTurnIdx = useFlowStore(s => s.nextTurnIdx)

  const players = usePlayersStore(s => s.players)
  const createPlayers = usePlayersStore(s => s.createPlayers)
  const updatePlayer = usePlayersStore(s => s.updatePlayer)

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

  const rnd = (n:number) => Math.floor(Math.random() * n) + 1

  function nextTurn() {
    const newScore = players[turnIdx].score + rnd(6)
    updatePlayer(turnIdx, {score: newScore})
    nextTurnIdx()
  }

  function addCard() {
    const newZones = players[turnIdx].zones.map((z, i) => (0 === i? {
      ...z, cards: [...z.cards, rnd(6)]
    }: z))
    updatePlayer(turnIdx, {zones: newZones})
  }

  function remCard() {
    const newZones = players[turnIdx].zones.map((z, i) => (0 === i? {
      ...z, cards: z.cards.filter((_, i) => 0 !== i)
    }: z))
    updatePlayer(turnIdx, {zones: newZones})
  }

  return (
    <div className="flex flex-col gap-1">
      {nPlayers? (
        <>
          <Button onClick={endGame}>New Game</Button>
          <div className="h-1" />
          <Button onClick={nextHandIdx} variant={"green"}>Next Hand</Button>
          <Button onClick={nextTurn} variant={"green"}>Next Turn</Button>
          <div className="h-1" />
          <Button onClick={addCard} variant={"red"}>Add</Button>
          <Button onClick={remCard} variant={"red"}>Rem</Button>
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

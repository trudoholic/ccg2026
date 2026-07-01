import {useFlowStore} from "../store/useFlowStore"
import {usePlayersStore} from "../store/usePlayersStore"
import {useDeckStore} from "../store/useDeckStore"
import {Button} from "./Button"

function MainControls() {
  const nPlayers = useFlowStore(s => s.nPlayers)
  const turnIdx = useFlowStore(s => s.turnIdx)
  const turnCnt = useFlowStore(s => s.turnCnt)

  const setPlayers = useFlowStore(s => s.setPlayers)
  const setHandIdx = useFlowStore(s => s.setHandIdx)
  const nextHandIdx = useFlowStore(s => s.nextHandIdx)
  const nextTurnIdx = useFlowStore(s => s.nextTurnIdx)

  const players = usePlayersStore(s => s.players)
  const createPlayers = usePlayersStore(s => s.createPlayers)
  const updatePlayer = usePlayersStore(s => s.updatePlayer)

  const drawPile = useDeckStore(s => s.drawPile)
  const dropPile = useDeckStore(s => s.dropPile)
  const initDeck = useDeckStore(s => s.initDeck)
  const reshuffle = useDeckStore(s => s.reshuffle)
  const updateDrawPile = useDeckStore(s => s.updateDrawPile)
  const updateDropPile = useDeckStore(s => s.updateDropPile)
  const idActive = useDeckStore(s => s.idActive)

  function startNewGame(n:number) {
    initDeck()
    createPlayers(n)
    setPlayers(n)
    setHandIdx(Math.floor(Math.random() * n))
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

  function drawCard() {
    if (drawPile.length) {
      const pile = [...drawPile]
      const card = pile.pop() ?? 0
      updateDrawPile(pile)
      const newZones = players[turnIdx].zones.map((z, i) => (0 === i? {
        ...z, cards: [...z.cards, card]
      }: z))
      updatePlayer(turnIdx, {zones: newZones})
    }
  }

  function isValidDrop(id:number) {
    const zoneHand = 0
    const cards = players[turnIdx].zones[zoneHand].cards
    return cards.includes(id)
  }

  function dropCard() {
    if (isValidDrop(idActive)) {
      const zoneHand = 0
      const zones = players[turnIdx].zones
      const newZones = zones.map((z, zi) => (zoneHand === zi? {
        ...z, cards: z.cards.filter(c => idActive !== c)
      }: z))
      updatePlayer(turnIdx, {zones: newZones})

      const pile = [...dropPile, idActive]
      updateDropPile(pile)
    }
  }

  return (
    <div className="flex flex-col gap-1">
      {nPlayers? (
        <>
          <Button onClick={endGame}>New Game</Button>
          <div className="h-1" />
          {turnCnt === nPlayers? (
            <Button onClick={nextHandIdx} variant={"green"}>Next Hand</Button>
          ): (
            <>
              <Button onClick={nextTurn} variant={"green"}>Next Turn</Button>
              <div className="h-1" />
              <Button onClick={drawCard} variant={"red"} disabled={!drawPile.length}>Draw</Button>
              <Button onClick={dropCard} variant={"red"} disabled={!isValidDrop(idActive)}>Drop</Button>
              <Button onClick={reshuffle} variant={"red"} disabled={drawPile.length > 0 || !dropPile.length}>
                Reshuffle
              </Button>
            </>
          )}
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

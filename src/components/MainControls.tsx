import {
  useFlowStore, phaseNames,
  isBeatOn, isPhaseOn, isTurnOn
} from "../store/useFlowStore"
import {usePlayersStore} from "../store/usePlayersStore"
import {useDeckStore} from "../store/useDeckStore"
import {Button} from "./Button"

function MainControls() {
  const nPlayers = useFlowStore(s => s.nPlayers)
  const turnIdx = useFlowStore(s => s.turnIdx)
  const phaseIdx = useFlowStore(s => s.phaseIdx)
  const beatCnt = useFlowStore(s => s.beatCnt)

  const setPlayers = useFlowStore(s => s.setPlayers)
  const setHandIdx = useFlowStore(s => s.setHandIdx)
  const nextHandIdx = useFlowStore(s => s.nextHandIdx)
  const nextTurnIdx = useFlowStore(s => s.nextTurnIdx)
  const nextPhaseIdx = useFlowStore(s => s.nextPhaseIdx)
  const nextBeatCnt = useFlowStore(s => s.nextBeatCnt)

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

  // DRAW -----------------------------------------------------------------------------------------
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

  function isValidHand(id:number) {
    const zoneHand = 0
    const cards = players[turnIdx]?.zones[zoneHand].cards ?? []
    return cards.includes(id)
  }

  // PLAY -----------------------------------------------------------------------------------------

  // DROP -----------------------------------------------------------------------------------------

  function dropCard() {
    if (isValidHand(idActive)) {
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
          {
            isTurnOn()? (
              isPhaseOn()? (
                isBeatOn()? (
                  <>
                    <Button onClick={nextBeatCnt} variant={"green"}>{`${phaseNames[phaseIdx]} ${beatCnt}`}</Button>
                    {
                      0 === phaseIdx && drawPile.length? (
                        <Button onClick={drawCard} variant={"red"}>
                          {`${phaseNames[0]} ${beatCnt}`}
                        </Button>
                      ): null
                    }
                    {
                      0 === phaseIdx && !drawPile.length && dropPile.length? (
                        <Button onClick={reshuffle} variant={"red"}>Reshuffle</Button>
                      ): null
                    }
                    {
                      2 === phaseIdx? (
                        <Button onClick={dropCard} variant={"red"} disabled={!isValidHand(idActive)}>
                          {`${phaseNames[2]} ${beatCnt}`}
                        </Button>
                      ): null
                    }
                  </>
                ): (
                  <Button onClick={nextPhaseIdx} variant={"green"}>Next Phase</Button>
                )
              ): (
                <Button onClick={nextTurn} variant={"green"}>Next Turn</Button>
              )
            ): (
              <Button onClick={nextHandIdx} variant={"green"}>Next Hand</Button>
            )
          }
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

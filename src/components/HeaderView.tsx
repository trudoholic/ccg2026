import {
  useFlowStore, phaseNames,
  isBeatOn, isPhaseOn, isTurnOn
} from "../store/useFlowStore"
import {usePlayersStore, playerNames, playerHasCards} from "../store/usePlayersStore"
import Dice from "./Dice"
import useGame from "../hooks/useGame"

function HeaderView() {
  const {
    phaseCaption,
  } = useGame()

  const players = usePlayersStore(s => s.players)
  const handIdx = useFlowStore(s => s.handIdx)
  const turnIdx = useFlowStore(s => s.turnIdx)
  const turnCnt = useFlowStore(s => s.turnCnt)
  const phaseIdx = useFlowStore(s => s.phaseIdx)
  const phaseRules = useFlowStore(s => s.phaseRules)

  function hasCards(): boolean {
    return playerHasCards(turnIdx, phaseIdx)
  }

  return (
    players.length? (
        <div className="flex gap-4 mx-auto items-center justify-center">
          <p className={`font-bold text-lg select-none text-green-500`}>
            {`Draw: ${phaseRules[0]}`}
          </p>
          <Dice n={phaseRules[0] - 1}/>

          <p className={`font-bold text-lg select-none text-green-500`}>
            {`Play: ${phaseRules[1]}`}
          </p>
          <Dice n={phaseRules[1] - 1}/>

          <p className={`font-bold text-lg select-none text-zinc-500`}>
            {`Hand: ${playerNames[handIdx]}`}
          </p>

          {isTurnOn()? (
            <>
              <p className={`font-bold text-lg select-none`}>{`Turn: ${playerNames[turnIdx]}`}</p>
              <p className={`font-bold text-lg select-none`}>{`Cnt: ${turnCnt}`}</p>
              {
                isPhaseOn()? (
                  <p className={`font-bold text-lg select-none`}>
                    {(isBeatOn() && hasCards())? phaseCaption: `End ${phaseNames[phaseIdx]}`}
                  </p>
                ): (
                  <p className={`font-bold text-lg select-none`}>End Turn</p>
                )
              }
            </>
          ): (
            <p className={`font-bold text-lg select-none`}>End Hand</p>
          )}

        </div>
      ): (
        <h1>Start New Game</h1>
      )
  )
}

export default HeaderView

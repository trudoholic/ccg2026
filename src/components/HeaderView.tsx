import {
  useFlowStore, phaseNames, phaseCnt,
  isBeatOn, isPhaseOn, isTurnOn
} from "../store/useFlowStore"
import {usePlayersStore, playerNames} from "../store/usePlayersStore"

function HeaderView() {
  const players = usePlayersStore(s => s.players)
  const handIdx = useFlowStore(s => s.handIdx)
  const turnIdx = useFlowStore(s => s.turnIdx)
  const turnCnt = useFlowStore(s => s.turnCnt)
  const phaseRules = useFlowStore(s => s.phaseRules)
  const phaseCaption = useFlowStore(
    s => `[${s.phaseIdx}] ${phaseNames[s.phaseIdx]} ${s.beatCnt} / ${phaseCnt[s.phaseIdx]}`
  )

  return (
    players.length? (
        <div className="flex gap-4 mx-auto justify-center">
          <p className={`font-bold text-lg select-none text-green-500`}>
            {`Draw: ${phaseRules[0]} Play: ${phaseRules[1]}`}
          </p>

          <p className={`font-bold text-lg select-none text-zinc-500`}>
            {`Hand [${handIdx}] ${playerNames[handIdx]}`}
          </p>

          {isTurnOn()? (
            <>
              <p className={`font-bold text-lg select-none`}>{`Turn [${turnIdx}] ${playerNames[turnIdx]}`}</p>
              <p className={`font-bold text-lg select-none`}>{`Cnt: ${turnCnt}`}</p>
              {
                isPhaseOn()? (
                  <p className={`font-bold text-lg select-none`}>
                    {isBeatOn()? phaseCaption: "End Phase"}
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

import {
  useFlowStore, phaseNames,
  isBeatOn, isPhaseOn, isTurnOn
} from "../store/useFlowStore"
import {playerNames} from "../store/usePlayersStore"

const beatLim = 4

function HeaderView() {
  const handIdx = useFlowStore(s => s.handIdx)
  const turnIdx = useFlowStore(s => s.turnIdx)
  const turnCnt = useFlowStore(s => s.turnCnt)
  const phaseIdx = useFlowStore(s => s.phaseIdx)
  const beatCnt = useFlowStore(s => s.beatCnt)

  return (
    <div className="flex gap-4 mx-auto justify-center">
      <p className={`font-bold text-lg select-none`}>{`Hand [${handIdx}] ${playerNames[handIdx]}`}</p>

      {isTurnOn()? (
        <>
          <p className={`font-bold text-lg select-none`}>{`Turn [${turnIdx}] ${playerNames[turnIdx]}`}</p>
          <p className={`font-bold text-lg select-none`}>{`Cnt: ${turnCnt}`}</p>
          {
            isPhaseOn()? (
              <p className={`font-bold text-lg select-none`}>
                {isBeatOn()? `[${phaseIdx}] ${phaseNames[phaseIdx]} ${beatCnt} / ${beatLim}`: "Next Phase"}
              </p>
            ): (
              <p className={`font-bold text-lg select-none`}>Next Turn</p>
            )
          }
        </>
      ): (
        <p className={`font-bold text-lg select-none`}>Next Hand</p>
      )}

    </div>
  )
}

export default HeaderView

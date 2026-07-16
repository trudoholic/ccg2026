import {phaseNames, useFlowStore} from "../store/useFlowStore"
import {extraCards} from "../store/usePlayersStore"


const useGame = () => {
  const phaseIdx = useFlowStore(s => s.phaseIdx)
  const turnIdx = useFlowStore(s => s.turnIdx)

  const phaseCaption_1 = useFlowStore(
    s => `${phaseNames[s.phaseIdx]}`
  )
  const phaseCaption_2 = useFlowStore(
    s => ` ${s.beatCnt} / ${s.phaseRules[s.phaseIdx]}`
  )

  const extraCards_ = extraCards(turnIdx, phaseIdx)
  const extraCaption: string = extraCards_ > 0? ` ${extraCards_}`: ""

  const phaseCaption = phaseCaption_1 + (phaseIdx < 2? phaseCaption_2: extraCaption)

  return {
    phaseCaption,
  }
}

export default useGame

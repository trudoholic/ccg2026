import {useFlowStore, phaseNames} from "../store/useFlowStore"

function HeaderView() {
  const turnIdx = useFlowStore(s => s.turnIdx)
  const turnCnt = useFlowStore(s => s.turnCnt)
  const phaseIdx = useFlowStore(s => s.phaseIdx)

  return (
    <div className="flex gap-4 mx-auto justify-center">
      <p className={`font-bold text-lg select-none`}>{`Turn Idx: ${turnIdx}`}</p>
      <p className={`font-bold text-lg select-none`}>{`Turn Cnt: ${turnCnt}`}</p>
      <p className={`font-bold text-lg select-none`}>
        {phaseNames[phaseIdx]? `Phase: (${phaseIdx}) ${phaseNames[phaseIdx]}`: "Next Turn"}
      </p>
    </div>
  )
}

export default HeaderView

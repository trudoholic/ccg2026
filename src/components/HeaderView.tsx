import {useFlowStore} from "../store/useFlowStore"

function HeaderView() {
  const turnIdx = useFlowStore(s => s.turnIdx)
  const turnCnt = useFlowStore(s => s.turnCnt)

  return (
    <div className="flex gap-4 mx-auto justify-center">
      <p className={`font-bold text-lg select-none`}>{`Turn Idx: ${turnIdx}`}</p>
      <p className={`font-bold text-lg select-none`}>{`Turn Cnt: ${turnCnt}`}</p>
    </div>
  )
}

export default HeaderView

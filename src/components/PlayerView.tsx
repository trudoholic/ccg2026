import {useFlowStore} from "../store/useFlowStore"

type PlayerViewProps = {
  idx: number
  name: string
}

function PlayerView({idx, name}: PlayerViewProps) {
  const handIdx = useFlowStore(s => s.handIdx)
  const turnIdx = useFlowStore(s => s.turnIdx)

  return (
    <div className={`w-30 p-1 ${idx === handIdx? 'bg-green-500': 'bg-green-700'} rounded-lg`}>
      <div className="p-1 bg-green-700 rounded-md">
        <p className={`font-bold text-lg text-center ${idx === turnIdx? 'text-amber-50': 'text-green-500'}`}>
          {`${idx}: ${name}`}
        </p>
      </div>
    </div>
  )
}

export default PlayerView

import {useFlowStore} from "../store/useFlowStore"

const names = ['Anna', 'Beth', 'Ciri', 'Dana']

type PlayerViewProps = {
  idx: number
}

function PlayerView({idx}: PlayerViewProps) {
  const handIdx = useFlowStore(s => s.handIdx)

  return (
    <div className={`w-30 p-1 ${idx === handIdx? 'bg-green-100': 'bg-green-700'} rounded-lg`}>
      <div className="p-1 bg-green-700 rounded-md">
        <p className="text-center text-green-100">{names[idx]}</p>
      </div>
    </div>
  )
}

export default PlayerView

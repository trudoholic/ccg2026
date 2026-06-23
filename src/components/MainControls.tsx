import { useFlowStore } from '../store/useFlowStore'

function MainControls() {
  const decreaseCount = useFlowStore(s => s.decreaseCount)
  const increaseCount = useFlowStore(s => s.increaseCount)

  const buttonClass = `
    transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed
    bg-violet-600 hover:bg-violet-500
    `

  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        className={buttonClass}
        onClick={decreaseCount}
      >
        Decrease Count
      </button>
      <button
        type="button"
        className={buttonClass}
        onClick={increaseCount}
      >
        Increase Count
      </button>
    </div>
  )
}

export default MainControls

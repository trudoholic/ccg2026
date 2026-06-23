import { useFlowStore } from '../store/useFlowStore'

function MainView() {
  const count = useFlowStore(s => s.count)

  return (
    <h1>Count is {count}</h1>
  )
}

export default MainView

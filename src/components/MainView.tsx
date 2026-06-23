import { useFlowStore } from '../store/useFlowStore'

function MainView() {
  const count = useFlowStore(s => s.count)
  const nPlayers = useFlowStore(s => s.nPlayers)

  return (
    <>
      <h1>Count is {count}</h1>
      <h1>N Players is {nPlayers}</h1>
    </>
  )
}

export default MainView

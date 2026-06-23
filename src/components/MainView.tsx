import { useFlowStore } from '../store/useFlowStore'

function MainView() {
  const nPlayers = useFlowStore(s => s.nPlayers)

  return (
    <>
      {nPlayers? (
        <h1>N Players is {nPlayers}</h1>
      ): (
        <h1>Start New Game</h1>
      )}
    </>
  )
}

export default MainView

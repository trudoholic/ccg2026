import {useFlowStore} from "../store/useFlowStore"
import PlayerView from "./PlayerView"

const range = (n: number) => [...Array(n).keys()]

function MainView() {
  const nPlayers = useFlowStore(s => s.nPlayers)

  return (
    <>
      {nPlayers? (
          <div className="flex flex-row gap-2">
            {range(nPlayers).map((i) => (
              <PlayerView
                key={i}
                idx={i}
              />
            ))}
          </div>
      ): (
        <h1>Start New Game</h1>
      )}
    </>
  )
}

export default MainView

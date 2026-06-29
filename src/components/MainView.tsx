import {usePlayersStore} from "../store/usePlayersStore"
import PlayerView from "./PlayerView"

function MainView() {
  const players = usePlayersStore(s => s.players)

  return (
    <>
      {players.length? (
          <div className="flex flex-row gap-2">
            {players.map((p, i) => (
              <PlayerView
                key={p.id}
                idx={i}
                name={p.name}
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

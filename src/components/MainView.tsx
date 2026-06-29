import {usePlayersStore} from "../store/usePlayersStore"
import PlayerView from "./PlayerView"

function MainView() {
  const players = usePlayersStore(s => s.players)

  return (
    <div className="flex flex-col gap-2">

      {players.length? (
          <div className="flex flex-row gap-2">
            {players.map((p, i) => (
              <div key={p.id} className="flex-1">
                <PlayerView
                  idx={i}
                  name={p.name}
                  score={p.score}
                />
              </div>
            ))}
          </div>
      ): (
        <h1>Start New Game</h1>
      )}

      {players.length? (
        <div className="flex flex-row gap-2">
          {players.map((p, i) => (
            <div key={p.id} className="flex-1 p-4 border border-zinc-500">
              {`Hand ${i}`}
            </div>
          ))}
        </div>
      ): null}

      {players.length? (
        <div className="flex flex-row gap-2">
          {players.map((p, i) => (
            <div key={p.id} className="flex-1 p-4 border border-zinc-500">
              {`Keep ${i}`}
            </div>
          ))}
        </div>
      ): null}

    </div>
  )
}

export default MainView

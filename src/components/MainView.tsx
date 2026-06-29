import {usePlayersStore} from "../store/usePlayersStore"
import PlayerView from "./PlayerView"

const zones = ['Hand', 'Keep']

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

      {zones.map((zone) => (
        <div key={zone}>
          <p className="mb-1 italic">{`${zone}`}</p>
          {players.length? (
            <div className="flex flex-row gap-2">
              {players.map((p, i) => (
                <div key={p.id} className="flex-1 p-4 border border-zinc-500">
                  {`${zone} ${i}`}
                </div>
              ))}
            </div>
          ): null}
        </div>
      ))}

    </div>
  )
}

export default MainView

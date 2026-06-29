import {usePlayersStore, zoneNames} from "../store/usePlayersStore"
import {useDeckStore} from "../store/useDeckStore"
import PlayerView from "./PlayerView"

function MainView() {
  const players = usePlayersStore(s => s.players)
  const drawPile = useDeckStore(s => s.drawPile)
  const dropPile = useDeckStore(s => s.dropPile)

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

      {zoneNames.map((zone, zoneId) => (
        <div key={zone}>
          {players.length? (
            <>
              <p className="mb-1 italic">{`${zone}`}</p>
              <div className="flex flex-row gap-2">
                {players.map((p, i) => (
                  <div key={p.id} className="flex-1 p-4 border border-zinc-500">
                    {`${zone} ${i} [${p.zones[zoneId].cards.join(' ')}]`}
                  </div>
                ))}
              </div>
            </>
          ): null}
        </div>
      ))}

      {players.length? <>
        <h1 className="text-green-500">{`Draw Pile: ${drawPile.join(' ')}`}</h1>
        <h1 className="text-amber-500">{`Drop Pile: ${dropPile.join(' ')}`}</h1>
      </>: null}

    </div>
  )
}

export default MainView

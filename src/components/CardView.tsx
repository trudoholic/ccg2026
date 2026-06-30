import {useDeckStore} from "../store/useDeckStore"
import {getCard} from "../store/cards"

const cardColors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-amber-500']

type CardViewProps = {
  id: number
}

function CardView({id}: CardViewProps) {
  const card = getCard(id)
  const cardColor = cardColors[card.suit ?? 1024] ?? 'bg-zinc-500'

  const idActive = useDeckStore(s => s.idActive)

  return (
    <div className={`size-10 flex items-center justify-center ${idActive === id? 'bg-zinc-50': cardColor}`}>
      <div className={`size-8 flex items-center justify-center ${cardColor}`}>
        <p className={`font-bold text-lg text-center`}>
          {`${card.rank}`}
        </p>
      </div>
    </div>
  )
}

export default CardView

import {getCard} from "../store/cards"

const cardColors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-amber-500']

type CardViewProps = {
  id: number
}

function CardView({id}: CardViewProps) {
  const card = getCard(id)
  const cardColor = cardColors[card.suit ?? 1024] ?? 'bg-zinc-500'

  return (
    <div className={`size-10 flex items-center justify-center ${card.rank > 3? cardColor: 'bg-zinc-50'}`}>
      <div className={`size-8 flex items-center justify-center ${cardColor}`}>
        <p className={`font-bold text-lg text-center`}>
          {`${card.rank}`}
        </p>
      </div>
    </div>
  )
}

export default CardView

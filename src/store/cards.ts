type TCard = {
  id: number
  suit: number
  rank: number
}

const rawList: Partial<TCard>[] = [
  // Suit 0
  {suit: 0, rank: 0},
  {suit: 0, rank: 1},
  {suit: 0, rank: 2},
  {suit: 0, rank: 3},
  {suit: 0, rank: 4},
  {suit: 0, rank: 5},
  {suit: 0, rank: 6},
  {suit: 0, rank: 7},
  {suit: 0, rank: 8},
  {suit: 0, rank: 9},
  // Suit 1
  {suit: 1, rank: 0},
  {suit: 1, rank: 1},
  {suit: 1, rank: 2},
  {suit: 1, rank: 3},
  {suit: 1, rank: 4},
  {suit: 1, rank: 5},
  {suit: 1, rank: 6},
  {suit: 1, rank: 7},
  {suit: 1, rank: 8},
  {suit: 1, rank: 9},
  // Suit 2
  {suit: 2, rank: 0},
  {suit: 2, rank: 1},
  {suit: 2, rank: 2},
  {suit: 2, rank: 3},
  {suit: 2, rank: 4},
  {suit: 2, rank: 5},
  {suit: 2, rank: 6},
  {suit: 2, rank: 7},
  {suit: 2, rank: 8},
  {suit: 2, rank: 9},
  // Suit 3
  {suit: 3, rank: 0},
  {suit: 3, rank: 1},
  {suit: 3, rank: 2},
  {suit: 3, rank: 3},
  {suit: 3, rank: 4},
  {suit: 3, rank: 5},
  {suit: 3, rank: 6},
  {suit: 3, rank: 7},
  {suit: 3, rank: 8},
  {suit: 3, rank: 9},
]

const cardList = rawList.map((it, i) => ({...it, id: i + 1}))
export const cardIds = cardList.map(it => it.id)

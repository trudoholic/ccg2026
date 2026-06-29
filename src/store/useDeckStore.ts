import { create } from 'zustand'

const _deck: number[] = [...Array(10).keys()]

const shuffle = (list: number[], debug = false): number[] => {
  const src = [...list]
  if (debug) return src

  const result: number[] = []
  while (src.length) {
    const rnd = Math.floor(Math.random() * src.length)
    const item = src.splice(rnd, 1)[0]
    result.push(item)
  }
  return result
}

type DeckState = {
  drawPile: number[]
  dropPile: number[]
}

const initialState: DeckState = {
  drawPile: [],
  dropPile: [],
}

interface DeckActions {
  initDeck: () => void
  updateDrawPile: (list: number[]) => void
  updateDropPile: (list: number[]) => void
}

export const useDeckStore = create<DeckState & DeckActions>(
  (set) => ({
    ...initialState,

    initDeck: () => set((state) => ({drawPile: shuffle(_deck), dropPile: []})),
    updateDrawPile: (list) => set(() => ({drawPile: list})),
    updateDropPile: (list) => set(() => ({dropPile: list})),
  })
)

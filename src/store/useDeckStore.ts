import { create } from 'zustand'
import {cardIds} from "./cards"

// const _deck: number[] = [...Array(10).keys()]

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
  idActive: number
  idTarget: number
}

const initialState: DeckState = {
  drawPile: [],
  dropPile: [],
  idActive: 0,
  idTarget: 0,
}

interface DeckActions {
  initDeck: () => void
  reshuffle: () => void
  updateDrawPile: (list: number[]) => void
  updateDropPile: (list: number[]) => void
  setActive: (id: number) => void
  setTarget: (id: number) => void
}

export const useDeckStore = create<DeckState & DeckActions>(
  (set) => ({
    ...initialState,

    initDeck: () => set(() => ({drawPile: shuffle(cardIds), dropPile: []})),
    reshuffle: () => set((state) => ({drawPile: shuffle(state.dropPile), dropPile: []})),
    updateDrawPile: (list) => set(() => ({drawPile: list})),
    updateDropPile: (list) => set(() => ({dropPile: list})),
    setActive: (id) => set(() => ({idActive: id})),
    setTarget: (id) => set(() => ({idTarget: id})),
  })
)

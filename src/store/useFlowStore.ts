import { create } from 'zustand'

function getNextIdx(idx:number, num:number, reverse:boolean):number {
  if (reverse) {
    const nextIdx = idx - 1
    return (nextIdx < 0? num - 1: nextIdx)
  }
  else {
    const nextIdx = idx + 1
    return (nextIdx === num? 0: nextIdx)
  }
}

const initialState = {
  nPlayers: 0,
  handIdx: 0,
  turnIdx: 0,
}

type FlowState = typeof initialState

interface FlowActions {
  setPlayers: (n: number) => void
  nextHandIdx: () => void
  nextTurnIdx: () => void
}

export const useFlowStore = create<FlowState & FlowActions>(
  (set) => ({
    ...initialState,

    setPlayers: (n) => set(() => ({
      nPlayers: n,
      handIdx: Math.floor(Math.random() * n)
    })),

    nextHandIdx: () => set((state) => ({handIdx: getNextIdx(state.handIdx, state.nPlayers, false)})),
    nextTurnIdx: () => set((state) => ({turnIdx: getNextIdx(state.turnIdx, state.nPlayers, false)})),
  })
)

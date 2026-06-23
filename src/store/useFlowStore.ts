import { create } from 'zustand'

const initialState = {
  nPlayers: 0,
  handIdx: 0,
  turnIdx: 0,
}

type FlowState = typeof initialState

interface FlowActions {
  setPlayers: (n: number) => void
  nextHandIdx: () => void
}

export const useFlowStore = create<FlowState & FlowActions>(
  (set) => ({
    ...initialState,

    setPlayers: (n) => set(() => ({
      nPlayers: n,
      handIdx: Math.floor(Math.random() * n)
    })),

    nextHandIdx: () => set((state) => {
      const nextIdx = state.handIdx + 1
      return {handIdx: (nextIdx === state.nPlayers? 0: nextIdx)}
    }),
  })
)

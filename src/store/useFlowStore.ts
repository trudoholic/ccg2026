import { create } from 'zustand'

const initialState = {
  nPlayers: 0,
}

type FlowState = typeof initialState

interface FlowActions {
  setPlayers: (n: number) => void
}

export const useFlowStore = create<FlowState & FlowActions>(
  (set) => ({
    ...initialState,
    setPlayers: (n) => set(() => ({nPlayers: n})),
  })
)

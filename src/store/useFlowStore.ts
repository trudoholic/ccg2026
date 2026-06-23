import { create } from 'zustand'

const initialState = { count: 0 }

type FlowState = typeof initialState

interface FlowActions {
  decreaseCount: () => void
  increaseCount: () => void
}

export const useFlowStore = create<FlowState & FlowActions>(
  (set) => ({
    ...initialState,
    decreaseCount: () => set((state) => ({count: state.count - 1})),
    increaseCount: () => set((state) => ({count: state.count + 1})),
  })
)

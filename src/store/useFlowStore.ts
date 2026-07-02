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
  phaseIdx: 0,
  turnIdx: 0,
  turnCnt: 0,
}

type FlowState = typeof initialState

interface FlowActions {
  setPlayers: (n: number) => void

  setHandIdx: (n: number) => void
  setTurnIdx: (n: number) => void

  nextHandIdx: () => void
  nextTurnIdx: () => void
  nextPhaseIdx: () => void
}

export const useFlowStore = create<FlowState & FlowActions>(
  (set) => ({
    ...initialState,

    setPlayers: (n) => set(() => ({nPlayers: n})),
    setHandIdx: (n) => set(() => ({handIdx: n, turnIdx: n, turnCnt: 0})),
    setTurnIdx: (n) => set(() => ({turnIdx: n})),

    nextHandIdx: () => set((state) => ({
      handIdx: getNextIdx(state.handIdx, state.nPlayers, false),
      turnIdx: getNextIdx(state.handIdx, state.nPlayers, false),
      turnCnt: 0,
    })),

    nextTurnIdx: () => set((state) => ({
      turnIdx: getNextIdx(state.turnIdx, state.nPlayers, false),
      turnCnt: state.turnCnt + 1,
      phaseIdx: 0,
    })),

    nextPhaseIdx: () => set((state) => ({
      phaseIdx: state.phaseIdx + 1,
    })),

  })
)

import { create } from 'zustand'

const _player = {
  id: 0,
  name: "",
  pass: false,
  score: 0,
}

type TPlayer = typeof _player

const playerNames = ['Anna', 'Beth', 'Ciri', 'Dana']

function getPlayers(n: number): TPlayer[] {
  return (n? [...Array(n).keys()].map((i) => ({..._player, id: i + 1, name: playerNames[i]})): [])
}

const _players: TPlayer[] = []

const initialState = {
  players: _players,
}

type PlayersState = typeof initialState

interface PlayersActions {
  createPlayers: (n: number) => void
  updatePlayer: (idx: number, payload: Partial<TPlayer>) => void
}

export const usePlayersStore = create<PlayersState & PlayersActions>(
  (set) => ({
    ...initialState,

    createPlayers: (n) => set(() => ({players: getPlayers(n)})),
    updatePlayer: (idx, payload) => set((state) => (
      {players: state.players.map((p, i) => (idx === i? {...p, ...payload}: p))}
    )),
  })
)

// const range = (n: number) => [...Array(n).keys()]

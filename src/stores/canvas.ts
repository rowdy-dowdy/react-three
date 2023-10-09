import { create } from "zustand"

type State = {
  x: number,
  y: number
}

type Actions = {
  setStore: (data: State) => void
}

const useCanvas = create<State & Actions>((set, get) => ({
  x: 0,
  y: 0,
  setStore: (data) => set({...data})
})
)

export default useCanvas
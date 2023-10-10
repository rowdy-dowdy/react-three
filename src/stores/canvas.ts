import { create } from "zustand"

type State = {
  position: {
    x: number,
    y: number
  },
  number: number
}

type Actions = {

}

type Dispatch = {
  dispatch: (action: (state: State) => State) => void
}

const useCanvas = create<State & Actions & Dispatch>((set, get) => ({
  position: {
    x: 0,
    y: 0,
  },
  number: 0,

  dispatch: (action) => set((state) => action(state)),
})
)

export default useCanvas
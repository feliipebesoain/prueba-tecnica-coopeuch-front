import {useDispatch} from "react-redux";
import {buscarTareasFetchThunk} from "../features/tareas";

test('buscarTareasFetchThunk ', () => {
  global.fetch = jest.fn()
    .mockImplementation(() => {
      return Promise.resolve(() => ({json: async () => ({results: tareas})}))
    })

  useDispatch(buscarTareasFetchThunk(''))
})

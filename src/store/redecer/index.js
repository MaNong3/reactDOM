import { createStore} from "redux"
const initialState = {

}
export default (state = initialState, { type, payload }) => {
  switch (type) {
  case typeName:
    return { ...state, ...payload }

  default:
    return state
  }
}

const store = createStore(redecer)
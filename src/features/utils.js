/** MAT */
export const makeAsyncTypes = (entity) => ([
  `${entity}/pending`,
  `${entity}/fulfilled`,
  `${entity}/rejected`
])

/** MAC */
export const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = {type}
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index]
  })
  return action
}

export const asyncMac = asyncTypes => ([
  makeActionCreator(asyncTypes[0]),
  makeActionCreator(asyncTypes[1], 'payload', 'message'),
  makeActionCreator(asyncTypes[2], 'payload'),
])


export const reduceReducers = (...reducers) => (state, action) =>
  reducers.reduce((acc, el) => el(acc, action), state)

const initialFetching = {loading: 'idle', error: null};

export const makeFetchingReducer = actions => (state = initialFetching, action) => {
  switch (action.type) {
    case actions[0]:
      return {...state, loading: 'pending'}
    case actions[1]:
      return {...state, loading: 'succeded', message: action.message}
    case actions[2]:
      return {error: state.error ? state.error : 'Hubo un error', loading: 'rejected'}
    default: {
      return state
    }
  }
}

/** Higher redurer o makeFetchingReducer */
export const makeSetReducer = actions => (state = 'all', action) => {
  switch (action.type) {
    case actions[0]: {
      return action.payload
    }
    default:
      return state;
  }
}

export const makeCrudReducer = actions => (state = [], action) => {
  switch (action.type) {
    case actions[0]: {
      return state.concat({...action.payload})
    }
    default:
      return state
  }
}


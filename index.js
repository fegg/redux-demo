var redux = require('redux')
var createStore = redux.createStore

const ActionTypes = {
  ALL: 'ALL'
}

/**
 * reducer
*/
var initState = {
  users: []
}
// test
function getUsers (state, action) {
  state = state || initState

  // { type: "ALL" }
  switch(action.type) {
    case ActionTypes.ALL:
      return Object.assign({}, state, {
        users: [1, 2, 3]
      })
    default:
      return state // initState
  }
}

var store = createStore(getUsers, {})

// listener
store.subscribe(function () {
  var currentState = store.getState();
  currentState.users.push(4, 5, 6)
})

/**
 * action
*/
function all () {
  return {
    type: ActionTypes.ALL
  }
}

// y = f(x)

console.log('1. ')
store.dispatch(all()) // call "ALL"
console.log(store.getState())

console.log('2. ')
store.dispatch(all()) // call "ALL"
console.log(store.getState())

// var store = applyMiddleware(thunk)(createStore)(getUsers, initState)
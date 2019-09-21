import { createStore } from 'redux'

//Estado inicial
const INITIAL_STATE = {
    counter: 0
}

//Reducer, se le setea el estado inicial, y se ocupa de generar un nuevo state
export function counterApp(state = INITIAL_STATE, action){
   
    switch (action.type) {
        case 'INCREMENT' :
            return {
                counter: state.counter + 1
            }

        case 'INCREMENT' :
            return {
                counter: state.counter - 1
            }

        default : 
          return {
            state
          }
    }
}
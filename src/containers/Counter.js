//Esto crea las connexiones entre Redux y React
import {connect } from 'react-redux'

const mapStateToProps = state => {
  return { counter : state.counter}
  //counter sera la prop
  //state.cuunter sera el valor de la prop
}

//Envio de las acciones
const mapDispatchToProps = dispacth => {
 //cada key llegara como prop al componente.
  return {
    increment: () => dispacth ({type: 'INCREMENT'}),
    decrement: () => dispacth ({type: 'DECREMENT'})
  }
}

//
const createConnection = connect(
  mapStateToProps,
  mapDispatchToProps
)


//Determinar el componente quye utilizara todo

const ComponentWithConnectionToRedux = createConnection(Counter)

export default ComponentWithConnectionToRedux
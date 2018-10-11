import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './styles.css'

import App from './containers/App'
import rootReducer from './state/reducers'

const state = createStore(rootReducer)

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={state}>
    <App />
  </Provider>,
  rootElement
)

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.textInput = React.createRef()
//     this.state = {
//       users: []
//     }
//   }

//   handleOnClick = e => {
//     const textValue = this.textInput.current.value
//     if (isNonEmptyString(textValue)) {
//       this.setState(({ users }) => ({ users: [textValue, ...users] }))
//       this.textInput.current.value = ''
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello, {head(this.state.users) || `new user`}</h1>
//         <label htmlFor="adduser">
//           <input type="text" name="adduser" ref={this.textInput} />
//         </label>
//         <br />
//         <button onClick={this.handleOnClick}>Register user</button>
//         <ul>
//           {/* add the list of users */
//             mapIndexed(
//               (user, idx) => <li key={idx}>{user}</li>,
//               this.state.users
//             )}
//         </ul>
//       </div>
//     )
//   }
// }

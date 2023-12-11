// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: true, lastName: true}

  onFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    const className = firstName ? 'hide' : 'show'
    const classLastName = lastName ? 'hide' : 'show'
    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="show-hide-container">
          <div className="first-name-container">
            <button type="button" className="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            {firstName ? null : <p className={`${className} para`}>Joe</p>}
          </div>
          <div className="first-name-container">
            <button type="button" className="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            {lastName ? null : <p className={`${classLastName} para`}>Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

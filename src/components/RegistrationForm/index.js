// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isSuccess: false,
    firstError: false,
    lastError: false,
    username: '',
    password: '',
  }

  submitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validFirstName()
    const isValidLastName = this.validLastName()
    if (isValidFirstName && isValidLastName) {
      this.setState({isSuccess: true})
    } else {
      this.setState({
        isSuccess: false,
        firstError: !isValidFirstName,
        lastError: !isValidLastName,
      })
    }
  }

  onBlurFirst = () => {
    const validF = this.validFirstName()

    this.setState({firstError: !validF})
  }

  validFirstName = () => {
    const {username} = this.state
    return username !== ''
  }

  onBlurLast = () => {
    const validL = this.validLastName()

    this.setState({lastError: !validL})
  }

  validLastName = () => {
    const {password} = this.state
    return password !== ''
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickAgain = () => {
    this.setState({isSuccess: false, username: '', password: ''})
  }

  renderSuccessContainer = () => (
    <div className="login">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
        alt="success"
        className="img"
      />
      <p>Submitted Successfully</p>
      <button type="button" onClick={this.onClickAgain}>
        Submit Another Response
      </button>
    </div>
  )

  renderLoginForm = () => {
    const {username, password, firstError, lastError} = this.state
    const class1 = firstError ? 'errorInput' : ''
    const class2 = lastError ? 'errorInput' : ''

    return (
      <div className="login">
        <form onSubmit={this.submitForm}>
          <label htmlFor="username">FIRST NAME</label>
          <br />
          <input
            value={username}
            type="text"
            onChange={this.onChangeUsername}
            onBlur={this.onBlurFirst}
            placeholder="First name"
            id="username"
            className={class1}
          />
          <br />
          {firstError && <p>Required</p>}
          <label htmlFor="password">LAST NAME</label>
          <br />
          <input
            value={password}
            type="text"
            onChange={this.onChangePassword}
            onBlur={this.onBlurLast}
            placeholder="Last name"
            id="password"
            className={class2}
          />
          <br />
          {lastError && <p>Required</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  render() {
    const {isSuccess} = this.state
    return (
      <div className="rform">
        <h1>Registration</h1>
        {isSuccess ? this.renderSuccessContainer() : this.renderLoginForm()}
      </div>
    )
  }
}

export default RegistrationForm

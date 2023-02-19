import {Component} from 'react'
import './index.css'
// Write your code here
class ClickCounter extends Component {
  state = {count: 0}
  onIncreament = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>
          The Button has been clicked <span>{count}</span> times
        </h1>
        <p> Click the button to increase the count!</p>
        <button onClick={this.onIncreament}>Click Me!</button>
      </div>
    )
  }
}

export default ClickCounter

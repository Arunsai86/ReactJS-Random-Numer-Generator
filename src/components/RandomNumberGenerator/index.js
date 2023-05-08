import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  clickGenerateButton = () => {
    this.setState({number: Math.round(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading"> Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.clickGenerateButton}
            >
              Generate
            </button>
          </div>
          <p className="count">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

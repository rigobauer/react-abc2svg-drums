import React, { Component } from 'react'
import { render } from 'react-dom'

import Abc2SvgDrums from '../../src'

class Demo extends Component {
  state = {
    abcDrumsNotation: '[^g2F2]^g2 [^g2c2F2]^g2 [^g2F2]^g2 [^g2c2F2]^g2'
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ abcDrumsNotation: '^gF[^g2F2] [^gc]F[^g2F2] ^gF[^g2F2] [^gc]F[^g2F2]' })
    }, 5000)
  }
  render() {
    const { abcDrumsNotation } = this.state
    return (
      <div style={{ border: '1px solid black', padding: '100px' }}>
        <Abc2SvgDrums
          abcDrumsNotation={abcDrumsNotation}
        />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))

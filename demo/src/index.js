import React, { Component } from 'react'
import { render } from 'react-dom'

import Abc2SvgDrums from '../../src'

class Demo extends Component {
  state = {
    scale: 1.5,
    title: 'Demo',
    timeSignature: '4/4',
    noteLength: '1/16',
    basicAbcDrumsNotation: '[^g2F2]^g2 [^g2c2F2]^g2 [^g2F2]^g2 [^g2c2F2]^g2|',
    fullAbcDrumsNotation: `%%pagescale 1
X:1
T:Demo 
M:4/4
L:1/16
K:C clef=perc
V:Drums stem=up
[^g2F2]^g2 [^g2c2F2]^g2 [^g2F2]^g2 [^g2c2F2]^g2|
`
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title: 'Demo (updated)',
        timeSignature: '4/4',
        noteLength: '1/16',
        basicAbcDrumsNotation: '^gF[^g2F2] [^gc]F[^g2F2] ^gF[^g2F2] [^gc]F[^g2F2]|'
      })
    }, 5000)
  }
  render() {
    const { scale, title, timeSignature, noteLength, basicAbcDrumsNotation, fullAbcDrumsNotation } = this.state
    return (
      <div style={{ border: '1px solid black', padding: '100px' }}>
        <Abc2SvgDrums 
          {...{ scale, title, timeSignature, noteLength, basicAbcDrumsNotation }}
        />
        <br/>
        <Abc2SvgDrums
          fullAbcDrumsNotation={fullAbcDrumsNotation}
          showDrumErrors
        />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))

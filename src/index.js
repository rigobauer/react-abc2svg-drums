import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Abc2Svg from 'react-abc2svg'

class Abc2SvgDrums extends PureComponent {

  abcDrumsHeader = `%abc
%%linewarn 0
%%stretchlast 1
%%flatbeams 1
%%maxstaffsep 20px
%%leftmargin 0cm
%%rightmargin 0cm
%%topspace 5px
%%deco (. 0 dacs 5 1 1 "@-6,-7("
%%deco ). 0 dacs 5 1 1 "@7,-7)"
%%beginsvg
 <defs>
 <path id="Xhead" d="m-3,-3 l6,6 m0,-6 l-6,6" class="stroke" style="stroke-width:1.2"/>
 <path id="Trihead" d="m-3,2 l 6,0 l-3,-6 l-3,6 l6,0" class="stroke" style="stroke-width:1.2"/>
 </defs>
%%endsvg
%%map drum ^g heads=Xhead print=g       % Hi-Hat
%%map drum ^c\' heads=Xhead print=c\'   % Crash
%%map drum ^d\' heads=Xhead print=d\'   % Stacker
%%map drum ^A\' heads=Xhead print=A\'   % Ride
%%map drum ^B\' heads=Trihead print=A\' % Ride Bell
%%map drum ^D\' heads=Trihead print=g   % Cow Bell
%%map drum ^c heads=Xhead print=c  % Cross Stick
%%map drum ^d, heads=Xhead print=d,  % Foot Splash
%%voicemap drum
X:1
M:4/4
L:1/16
K:C clef=perc
V:Drums stem=up
`

  render() {
    const { abcDrumsNotation, showDrumsErrors } = this.props

    return ( abcDrumsNotation && (
      <Abc2Svg
        abcNotation={this.abcDrumsHeader + abcDrumsNotation}
        showErrors={showDrumsErrors}
      />
    ))
  }

}

Abc2SvgDrums.propTypes = {
  abcDrumsNotation: PropTypes.string,
  showDrumsErrors: PropTypes.bool
}

Abc2SvgDrums.defaultProps = {
  abcDrumsNotation: '',
  showDrumsErrors: false
}

export default Abc2SvgDrums
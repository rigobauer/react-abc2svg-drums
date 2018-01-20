import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import Abc2SvgDrums from 'src/'
import Abc2Svg from 'react-abc2svg'

const drumHeaders = `%abc
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
%%voicemap drum`


describe('Abc2SvgDrums', () => {

  it('shallow renders <Abc2SvgDrums /> with default parameters', () => {
    const wrapper = shallow(<Abc2SvgDrums />)
    expect(wrapper.html())
      .to.equal(null)
  })


  it('shallow renders <Abc2SvgDrums /> with no abcDrumsNotation and showDrumsErrors option enabled', () => {
    const wrapper = shallow(<Abc2SvgDrums showDrumsErrors />)
    expect(wrapper.html())
      .to.equal(null)
  })


  it('shallow renders <Abc2SvgDrums /> in basic mode with a simple abcNotation', () => {
    const wrapper = shallow(
      <Abc2SvgDrums 
        noteLength="1/16"
        basicAbcDrumsNotation={'[^g2F2]^g2 [^g2c2F2]^g2 [^g2F2]^g2 [^g2c2F2]^g2'}
      />
    )
    const abc2svgComp = wrapper.find(Abc2Svg)
    expect(abc2svgComp)
      .to.have.length(1)
    expect(abc2svgComp.prop('abcNotation'))
      .to.equal(drumHeaders + `
X:1
T:
M:4/4
L:1/16
K:C clef=perc
V:Drums stem=up
[^g2F2]^g2 [^g2c2F2]^g2 [^g2F2]^g2 [^g2c2F2]^g2
`)
  })


  it('shallow renders <Abc2SvgDrums /> in advanced mode with a simple abcNotation', () => {
    const wrapper = shallow(
      <Abc2SvgDrums
        fullAbcDrumsNotation={`X:1
T:
M:4/4
L:1/8
K:C clef=perc
V:Drums stem=up
[^g2F2]^g2 [^g2c2F2]^g2 [^g2F2]^g2 [^g2c2F2]^g2
`
        }
      />
    )
    const abc2svgComp = wrapper.find(Abc2Svg)
    expect(abc2svgComp)
      .to.have.length(1)
    expect(abc2svgComp.prop('abcNotation'))
      .to.equal(drumHeaders + `
X:1
T:
M:4/4
L:1/8
K:C clef=perc
V:Drums stem=up
[^g2F2]^g2 [^g2c2F2]^g2 [^g2F2]^g2 [^g2c2F2]^g2
`)
  })


  it('renders <Abc2SvgDrums /> in basic mode with a simple incorrect abcNotation', () => {
    const wrapper = render(<Abc2SvgDrums basicAbcDrumsNotation={'?ññ'} showDrumsErrors />)
    expect(wrapper.find('.abc2svg-errors').html())
      .to.equal('ABC NOTATION:32:1 Error: Bad character &apos;?&apos;<br>\nABC NOTATION:32:2 Error: Not an ASCII character<br>\n')
  })


  it('mounts <Abc2SvgDrums /> with a simple abcNotation', () => {
    sinon.spy(Abc2SvgDrums.prototype, 'render')
    sinon.spy(Abc2Svg.prototype, 'render')
    sinon.spy(Abc2Svg.prototype, 'componentDidMount')
    sinon.spy(Abc2Svg.prototype, 'componentWillUnmount')
    const wrapper = mount(<Abc2SvgDrums basicAbcDrumsNotation={'[^g2F2]^g2 [^g2c2F2]^g2 [^g2F2]^g2 [^g2c2F2]^g2'} showDrumsErrors />)
    expect(Abc2SvgDrums.prototype.render.callCount)
      .to.equal(1)
    expect(Abc2Svg.prototype.render.callCount)
      .to.equal(2)
    expect(Abc2Svg.prototype.componentDidMount.calledOnce)
      .to.equal(true)
    expect(Abc2Svg.prototype.componentWillUnmount.notCalled)
      .to.equal(true)
    wrapper.unmount()
    expect(Abc2Svg.prototype.componentWillUnmount.calledOnce)
      .to.equal(true)
  })

})

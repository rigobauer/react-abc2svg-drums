# react-abc2svg-drums

[![Travis][build-badge]][build]
[![Coveralls][coveralls-badge]][coveralls]
[![Commitizen friendly][commitizen-badge]][commitizen]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads-badge]][npm-downloads]
[![Prettier][prettier-badge]][prettier]
[![License][license-badge]][license]

A React component that uses [react-abc2svg](https://github.com/rigobauer/react-abc2svg) to display drums music notation written using the [ABC notation](http://abcnotation.com) with some extra symbols.

## Usage

This component creates a new voicemap that adds new drum related symbols to the standard ABC notation:

| Drum Technique | Abc Notation |
| :------------: | :----------: |
|   Ghost Note   | !(.!!).!note |
|     Hi-Hat     |      ^g      |
|     Crash      |     ^c'      |
|    Stacker     |     ^d'      |
|      Ride      |     ^A'      |
|   Ride Bell    |     ^B'      |
|    Cow Bell    |     ^D'      |
|  Cross Stick   |      ^c      |
|  Foot Splash   |      ^d      |

### Basic Mode

You can specify the scale, title, time signature, note length and drums notation, and the component will generate a single voice with that info.

```js
<Abc2SvgDrums
  scale={1.5}
  title="My Title"
  timeSignature="4/4"
  noteLength="1/16"
  basicAbcDrumsNotation="[^g2F2]^g2 [^g2c2F2]^g2 [^g2F2]^g2 [^g2c2F2]^g2"
  showDrumsErrors
/>
```

### Advanced Mode

You have to define the whole abc notation (you can use all the extensions provided by abc2svg). For more advanced or complex notation, in this mode you can define different voices, staves, etc.

```js
<Abc2SvgDrums
  fullAbcDrumsNotation={`%%pagescale 1.5
X:1
T:My Title
M:4/4
L:1/16
K:C clef=perc
V:Drums stem=up
[^g2F2]^g2 [^g2c2F2]^g2 [^g2F2]^g2 [^g2c2F2]^g2
`}
  showDrumsErrors
/>
```

**IMPORTANT**: Remember that if you set the _fullAbcDrumsNotation_ prop, the rest of the props will be ignored and the component will render only what's in this prop.

### Additional Props

|    Parameter    | Description                                                               |  Type   |   Values   | Default |
| :-------------: | ------------------------------------------------------------------------- | :-----: | :--------: | :-----: |
| showDrumsErrors | Display an error message in case the provided abc notation has some error | boolean | true/false |  false  |

## References

* All the drum headers and symbols have been obtained from the amazing app [Groove Scribe](https://github.com/montulli/GrooveScribe) created by Mr. [Lou Montulli](https://github.com/montulli).

* To convert abc notation to svg, react-abc2svg uses the awesome [abc2svg](https://github.com/moinejf/abc2svg).

[build-badge]: https://img.shields.io/travis/rigobauer/react-abc2svg-drums/master.svg?style=flat-square
[build]: https://travis-ci.org/rigobauer/react-abc2svg-drums
[coveralls-badge]: https://img.shields.io/coveralls/rigobauer/react-abc2svg-drums/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/rigobauer/react-abc2svg-drums
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[commitizen]: http://commitizen.github.io/cz-cli/
[npm-badge]: https://img.shields.io/npm/v/react-abc2svg-drums.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-abc2svg-drums
[npm-downloads-badge]: https://img.shields.io/npm/dm/react-abc2svg-drums.svg?style=flat-square
[npm-downloads]: https://npm-stat.com/charts.html?package=react-abc2svg-drums
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
[license-badge]: https://img.shields.io/npm/l/react-abc2svg-drums.svg?style=flat-square
[license]: https://opensource.org/licenses/LGPL-3.0

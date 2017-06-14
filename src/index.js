import React, { Component } from 'react'
import Animated from 'animated/lib/targets/react-dom'

class InteractableView extends Component {
  setVelocity() {}

  snapTo() {}

  render() {
    return <Animated.div {...this.props} />
  }
}

export default InteractableView

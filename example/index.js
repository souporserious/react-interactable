import React, { Component } from 'react'
import { render } from 'react-dom'
import VirtualList from 'react-tiny-virtual-list'
import _ from 'lodash'
import namor from 'namor'
import Animated from 'animated/lib/targets/react-dom'
import PanResponder from 'universal-panresponder'

const data = _.map(_.range(70), (d, index) =>
  namor.generate({ words: 1, numbers: 0 })
)

class DraggableView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pan: new Animated.ValueXY(), // inits to zero
    }
    this.state.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x, // x,y are Animated.Value
          dy: this.state.pan.y,
        },
      ]),
      onPanResponderRelease: () => {
        Animated.spring(
          this.state.pan, // Auto-multiplexed
          { toValue: { x: 0, y: 0 } } // Back to zero
        ).start()
      },
    })
  }
  // https://github.com/animatedjs/animated/issues/58#issuecomment-285654841
  render() {
    const styles = {
      transform: Animated.template`
      translateX(${this.state.pan.x}px)
      translateY(${this.state.pan.y}px)
      scale(${this.state.pan.x.interpolate({
        inputRange: [0, 100],
        outputRange: [0.3, 1],
        extrapolate: 'clamp',
      })})
    `,
    }
    return (
      <Animated.div {...this.state.panResponder.panHandlers} style={styles}>
        {this.props.children}
      </Animated.div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <DraggableView>
          <div style={{ width: 300, height: 300, background: 'orange' }} />
        </DraggableView>
        {/* <Interactable /> */}
        {/* <Animated.div>Cool</Animated.div>
        <VirtualList
          width="100%"
          height={600}
          itemCount={data.length}
          itemSize={50}
          renderItem={({ index, style }) =>
            <div key={index} style={style}>
              Letter: {data[index]}, Row: #{index}
            </div>}
        /> */}
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))

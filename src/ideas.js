function Springers() {
  return (
    <div>
      <Spring tension={100} fricton={30}>
        <Driver start={0} stop={1}>
          Hello
        </Driver>
        <Driver start={200} stop={0}>
          Hello
        </Driver>

        <Driver onClick={thing}>
          Click Me
        </Driver>
      </Spring>

      <Spring tension={100} fricton={30}>
        {interpolation => <div />}
      </Spring>

      <Spring driver={this} tension={200} fricton={30}>
        {driver =>
          <div onPress={() => driver.set(this.state.isToggled ? 0 : 1)}>
            Toggle
          </div>}
      </Spring>

      <ChatHeads tension={20} fricton={30} isActive>
        <ChatHead start={{ left: 300 }} end={{ left: 0 }}>
          1
        </ChatHead>
        <ChatHead start={{ bottom: 0 }} end={{ top: 300 }}>
          2
        </ChatHead>
        <ChatHead start={{ right: 300 }} end={{ right: 0 }}>
          3
        </ChatHead>
      </ChatHeads>

      {/* do live code chooser config https://youtu.be/s5kNm-DgyjY?t=36m39s */}
      {/* maybe a props panel??? */}
      <SpringsChooser>
        Cool
      </SpringsChooser>

      {/*
        direction = horizontal | vertical
        snapPoints
        springPoints
        gravityPoints
        frictionAreas
        alertAreas
        boundaries
        dragEnabled
        dragWithSpring
        dragToss
        initialPosition
        onSnap
        onStop
        onAlert
        onDrag
        onAnimatedEvent
        reportOnAnimatedEvents

        PanResponder allows movement anywhere
        depeneding where we let go we snap to the closest view


        horizontal / vertical
        snapping points
        spring / friction

        SWIPEABLE CARDS - bounds outside of screen
        horizontal
        snapPoints={[{ x: -360 }, { x: 0 }, { x: 360 }]}
        friction={0.7}

        COLLAPSIBLE VIEW
        vertical
        snapPoints=[{ y: 0 }, { y: 250 }]
        friction={0.8}

        COLLAPSIBLE VIEW
        vertical
        snapPoints=[{ y: 0 }, { y: 660 }]
        friction={0.5}

        boundaries={
          bottom: 0,
          bounce: 0.5,
        }

        friction={
          value: 0,
          area: { left: 0 }
        }

        snapPoints={[{ x: -360 }, { x: 0 }, { x: 360 }]}
        gravityPoints={[{ x: 0, y: 200, strength: 8000 }]}
        friction={0.7}
        boundaries={ bottom: 0, bounce: 0.5 }
        animatedValueX={this.deltaX}
        animatedValueY={this.deltaY}
        onStop={this.onStop}
      */}
      <ListView>
        <ListView.Row
          horizontal
          snapPoints={[{ x: 0 }, { x: 100 }]}
          friction={0.7}
        />
      </ListView>
    </div>
  )
}

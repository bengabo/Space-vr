import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  AmbientLight,
  StyleSheet,
  Model,
  Animated,
} from 'react-vr';
import Easing from 'react-vr';
import TextScene from './TextScene';

const AnimatedModel = Animated.createAnimatedComponent(Model);

export default class spaceman extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'space.jpg',
      satelliteRotZ: new Animated.Value(0),
      cosmonautRotY: new Animated.Value(0),
    }
  }

  componentDidMount() {
    this.state.satelliteRotZ.setValue(0);
    Animated.timing(
      this.state.satelliteRotZ,
      {
        toValue: 10000,
        duration: 100000,
        delay: 0,
        easing: Easing.inOut,
      }
    ).start();
  }

  render() {  
    return (
      <View>
        <TextScene />
        <AmbientLight intensity={ 2.5 } />
        <Pano source={asset(this.state.background)}/>

        <AnimatedModel 
          source={{
            obj: asset('/nasa-aqua-satellite-obj/nasa-aqua-satellite.obj'),
            mtl: asset('/nasa-aqua-satellite-obj/nasa-aqua-satellite.mtl'),
          }}
          style={{
            transform: [
              { translateX: -1 },
              { translateY: 0 },
              { translateZ: -0.75 },
              { scale: 0.075 }, 
              { rotateX: 180 },
              { rotateY: -360},
              { rotateZ: this.state.satelliteRotZ }
            ]
          }}
        />

        {/* <AnimatedModel 
          source={{
            obj: asset('/Dining-chair/Dining-chair.obj'),
            mtl: asset('/Dining-chair/Dining-chair.mtl'),
          }}
          style={{
            transform: [
              { translateX: 1.5 }, 
              { translateY: 2 },
              { translateZ: -5 },
              { scale: 0.025 },
              { rotateX: 45 },
              { rotateY: 45 },
              { rotateZ: 45},
            ]
          }}
        /> */}

        <Model 
          source={{
            obj: asset('/EMU/EMU.obj'),
            mtl: asset('/EMU/EMU.mtl'),
          }}
          style={{
            transform: [
              { translate: [-1.35, -0.1, -0.5] },
              { scale: 0.5 },
              { rotateY: 180 } 
            ]
          }}
        />
          
        <Model 
          source={{
            obj: asset('/Loral-1300Com-obj/Loral-1300Com-main.obj'),
            mtl: asset('/Loral-1300Com-obj/Loral-1300Com-main.mtl'),
          }}
          style={{
            transform: [
              { translate: [8.5, 4.3, -10] },
              { scale: 0.01 },
              { rotateX: 45 },
              { rotateY: 0 },
              { rotateZ: 20 }
            ]
          }}
        />
        
      </View>
    );
  }
};
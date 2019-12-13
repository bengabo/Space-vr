import React from 'react';
import { Text, View, StyleSheet } from 'react-vr';

export default class TextScene extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       video: false,
//     };
//   }

// startVideo() {
//   this.setState({
//     video: true,
//   });
// }

  render() {
    return (
      <View>
        <Text
          style={{
            // backgroundColor: '#777879',
            fontSize: 0.5,
            fontWeight: '400',
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
                { translate: [-5, 1, -0.5] },
                { scale: 0.5 },
                { rotateY: 90 }
            ]
          }}
        >Aqua Nasa Satellite</Text>

      <Text
          style={{
            // backgroundColor: '#474747',
            fontSize: 0.7,
            fontWeight: '400',
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              { translate: [-1.9, 2.4, -3] },
              { scale: 0.25 },
            ]
          }}
        >Cosmonaut n°1</Text>

        <Text
          style={{
            fontSize: 0.5,
            fontWeight: '400',
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              { translate: [8, 8.15, -12] },
              { scale: 1 },
            ]
          }}
        >Loral-1300Com</Text>

      </View> 
    )
  }
} 
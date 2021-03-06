import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Svg } from 'expo';
import RenderCode from '../Code';

class Circle extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Svg height={200} width={200}>
            <Svg.Circle
              cx={100}
              cy={100}
              r={50}
              fill="#6a51af"
            />
          </Svg>
          <RenderCode code='<Svg.Circle cx={50} cy={50} r={25} fill="#f1c40f"/>'/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
});

export default Circle;

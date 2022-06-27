import React,{useState,useRef} from 'react';
import {View, StyleSheet,Text,Alert} from 'react-native';
import { TapGestureHandler, State, GestureDetector, } from 'react-native-gesture-handler';

const Blank = () => {
  const doubleTapRef = useRef(null)
  const _onSingleTap = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Alert.alert("Hey");
    }
  };

  const _onDoubleTap = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Alert.alert("Hey dbl");
    }
  }
  
  return (
    <TapGestureHandler
      onHandlerStateChange={_onSingleTap}
      waitFor={doubleTapRef}>
      <TapGestureHandler ref={doubleTapRef} onHandlerStateChange={_onDoubleTap} numberOfTaps={2}>
        <View style={{     width: 150,
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: 10,
    zIndex: 200, }}>
          <Text>HEY!</Text>
        </View>
      </TapGestureHandler>
    </TapGestureHandler>
  );
}

export default Blank;

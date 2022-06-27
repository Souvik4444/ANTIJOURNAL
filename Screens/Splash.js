import React from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
// import splh from '../Assets'
const Splash = () => {
    return (
        <View>
        {/* <>
            <Image
            style={{   width: 50,
    height: 200,
    resizeMode: 'stretch',}}
            source={splh}
            />
            </> */}
            {/* <Text>Hello</Text> */}
            <Image
                style={{width:"100%",height:"100%"}}
                source={require('../Assets/splh.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Splash;

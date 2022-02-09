import React, { useState } from 'react';
import {View, StyleSheet,Text,TouchableOpacity,Image} from 'react-native';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
// export const storeData = async (value) => {
//     try {
//       const jsonValue = JSON.stringify(value);
//       await AsyncStorage.setItem('@slide', jsonValue);
//     } catch (e) {
//       // saving error
//       throw e;
//     }
//   };
const Fontsizer = ({navigation}) => {
    const data = Slider.value
    const [slide,setSlide] = useState(14);
    return (
        <>
        <View style={{display:"flex",flexDirection:"row",marginLeft:"3%",justifyContent:"space-between",marginTop:"5%"}}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings',data)}>
            <Image source={require('../Assets/back.png')} style={{width:"88%",height:"23%",marginLeft:"5%"}}/>
        
            </TouchableOpacity>
            <Text style={{fontSize:24,color:"black",marginRight:"40%"}}>Font Size</Text>
        </View>
        <View style={{marginTop:"25%",display:"flex",position:"absolute"}}>
           <Text style={{fontSize:24,fontWeight:"bold",color:"black",marginLeft:"5%"}}>
               Sample Size:
           </Text>
            <Text style={{fontSize:slide,marginLeft:"5%",color:"black"}}>
            A place where you can express your thoughts and feelings without recording and complete anonymity. Like the ritual of burning bad memories,it is the digital equivalent
            </Text>
            </View>
            <View style={{marginTop:"120%",display:"flex",flexDirection:"row",justifyContent:"center",marginLeft:"5%",marginRight:"5%",alignContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:14,color:"black"}}>A</Text>
            <Slider
            maximumValue={32}
            minimumValue={14}
            onValueChange={setSlide}
            value={slide}
            step={1}
            style={{marginBottom:"-5%",width:350}}
            >
            </Slider>
            <Text style={{fontSize:32,color:"black"}}>A</Text>
        </View>
        </>
    );
}

const styles = StyleSheet.create({})

export default Fontsizer
;

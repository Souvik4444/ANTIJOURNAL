import React, { useState } from 'react';
import {View, StyleSheet,Text,TouchableOpacity,Image} from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation,useTheme } from '@react-navigation/native';
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
const Fontsizer = ({handleFont,size}) => {
    const navigation = useNavigation();
    const {colors} = useTheme();
    const nav = useTheme();
    // const data = Slider.value
    // const [slide,setSlide] = useState(14);
    return (
        <>
        <View style={{display:"flex",flexDirection:"row",marginLeft:"3%",justifyContent:"space-between",marginTop:"5%"}}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Image source={nav.dark?require('../Assets/back-dark.png'):require('../Assets/back.png')} style={{width:"78%",height:"21%",marginLeft:"8%"}}/>
        
            </TouchableOpacity>
            <Text style={{fontSize:17,color:colors.text,marginRight:"40%",fontWeight:"500"}}>Font size</Text>
        </View>
        <View style={{marginTop:"20%",display:"flex",position:"absolute"}}>
           <Text style={{fontSize:18,fontWeight:"bold",color:colors.text,marginLeft:"5%"}}>
               Sample size:
           </Text>
            <Text style={{fontSize:size,marginLeft:"5%",color:colors.text,marginTop:"2%",fontFamily:"Montserrat-Regular",fontWeight:"400"}}>
            A place where you can express your thoughts and feelings without recording and complete anonymity. Like the ritual of burning bad memories,it is the digital equivalent
            </Text>
            </View>
            <View style={{marginTop:"120%",display:"flex",flexDirection:"row",justifyContent:"center",marginLeft:"5%",marginRight:"5%",alignContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:14,color:"black",marginTop:"4%",color:colors.text}}>A</Text>
            <Slider
            maximumValue={32}
            minimumValue={14}
            onValueChange={handleFont}
            value={size}
            step={1}
            maximumTrackTintColor = "colors.background"
            style={{marginBottom:"-5%",width:350,backgroundColor:colors.background}}
            >
            </Slider>
            <Text style={{fontSize:32,color:"black",marginBottom:"-2%",color:colors.text}}>A</Text>
        </View>
        </>

    );
}

const styles = StyleSheet.create({})

export default Fontsizer
;

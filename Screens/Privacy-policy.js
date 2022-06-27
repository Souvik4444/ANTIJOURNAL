import React from 'react';
import {View, StyleSheet,Image,Text,TouchableOpacity,Dimensions} from 'react-native';
import Button from './button';
import Buttonwhite from './buttonWhite';
import { useTheme } from '@react-navigation/native';

const PrivacyPolicy = ({navigation}) => {
    const {colors} = useTheme();
    const nav = useTheme();
    return (
        <View style={{backgroundColor:colors.background}}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:"5%"}}>
        <TouchableOpacity style={{marginLeft:"-35%"}} onPress={() => navigation.navigate('Settings')}>
        <Image source={nav.dark?require('../Assets/back-dark.png'):require('../Assets/back.png')} style={{width:30,height:30,}}/>
        </TouchableOpacity>

            <Text style={{fontSize:18,fontWeight:"600",color:colors.text,display:"flex",marginLeft:"25%",fontStyle:"normal",fontFamily:'Montserrat-Regular'}}>Privacy Policy</Text>
        </View>
            <View style={{marginTop:"5%",marginLeft:"5%"}}>
                <Text style={{fontSize:20,fontWeight:"bold",color:colors.text}}>
                    Mission
                </Text>
            </View>
            <View>
                <Text style={{marginTop:"3%",marginLeft:"5%",marginRight:"5%",fontSize:18,textAlign:"justify",fontFamily:"PTSans-Regular",color:colors.text}}>
                Anti Journal is a journal that erases itself. Providing a place to get your thoughts and feelings out with no record and complete anonymity. Like the ritual of burning bad memories, this is the digital equivalent.
                </Text>
            </View>

            <View style={{marginTop:"3%",marginLeft:"5%"}}>
                <Text style={{fontSize:20,fontWeight:"bold",color:colors.text}}>
                    Privacy
                </Text>
            </View>

            <View>
                <Text style={{marginTop:"3%",marginLeft:"5%",marginRight:"5%",fontSize:18,textAlign:"justify",color:colors.text,fontFamily:"PTSans-Regular"}}>
                At Anti Journal, one of our main priorities is the privacy of our visitors. We do not collect or store any information input into the app. No usernames are created for the sheer purpose of keeping everything entirely anonymous and to allow for the freedom to write whatever you're feeling without  the worry of anything ever being recorded, stored, saved or shared.

                </Text>
            </View>
            {/* <Button text='accept'/>
            <Buttonwhite text='Decline'/> */}

            <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           
           <Image source={nav.dark?require('../Assets/bar-dark.png'):require('../Assets/minus.png')} style={{width:"37%",height:"5%",marginTop:"12%",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",top:-40}}/>
                  </View>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default PrivacyPolicy;

import React from 'react';
import {View, StyleSheet,Image,Text,TouchableOpacity} from 'react-native';
import Button from './button';
import Buttonwhite from './buttonWhite';

const PrivacyPolicy = ({navigation}) => {
    return (
        <View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:"5%"}}>
        <TouchableOpacity style={{marginLeft:"-35%"}} onPress={() => navigation.navigate('Settings')}>
        <Image source={require('../Assets/back.png')} style={{width:30,height:30,}}/>
        </TouchableOpacity>

            <Text style={{fontSize:18,fontWeight:"600",color:"black",display:"flex",marginLeft:"25%"}}>PrivacyPolicy</Text>
        </View>
            <View style={{marginTop:"5%",marginLeft:"5%"}}>
                <Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>
                    Mission
                </Text>
            </View>
            <View>
                <Text style={{margin:"5%",fontSize:18,textAlign:"justify",fontFamily:"Montserrat",color:"black"}}>
                AntiJournal is a journal that erases itself. Providing a place to get your thoughts and feelings out with no record and complete anonymity. Like the ritual of burning bad memories,this is the digital equivalent.
                </Text>
            </View>

            <View style={{marginTop:"0%",marginLeft:"5%"}}>
                <Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>
                    Privacy
                </Text>
            </View>

            <View>
                <Text style={{margin:"5%",fontSize:18,textAlign:"justify",color:"black"}}>
                At AntiJournal,one of our main priorities is the privacy of our visitors.We do not collect or store any information input into
the app. No usernames are created for the sheer purpose of keeping everything
entirely anonymous and to allow for the freedom to write whatever you're feeling without  the worry of anything ever  being recorded,stored, saved or shared.

                </Text>
            </View>
            <Button text='accept'/>
            <Buttonwhite text='Decline'/>

            <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           
           <Image source={require('../Assets/minus.png')} style={{width:"40%",height:"6%",marginTop:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}/>
                  </View>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default PrivacyPolicy;

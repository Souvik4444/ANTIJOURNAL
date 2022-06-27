import React from 'react';
import {View, StyleSheet,Image,Text,TouchableOpacity} from 'react-native';
import Share from 'react-native-share';
import { useTheme,useNavigation } from '@react-navigation/native';

const Gift = ({navigation}) => {

    const {colors} = useTheme();
    const nav = useTheme();
    // const navigation = useNavigation();

    const myshare = async() =>{
        const shareOptions = {
            message: 'please click on the  link todownload AntiJournal     =>      https://drive.google.com/file/d/11HWeIImpm3wVExd5ucJV6Vo3Azo_WtMK/view?usp=sharing',
        }

        try {
            const ShareResponse = await Share.open(shareOptions);
        }
        catch(error){
            console.log('Error =>', error);
        }
    }
    return (
        <View>
          
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        
        <Image source={nav.dark?require('../Assets/back-dark.png'):require('../Assets/back.png')} style={{width:"10%",height:"20%",marginTop:"5%",marginLeft:"2%"}}/>
        
        </TouchableOpacity>
           <Image
            style={{width:"110%",marginTop:"-25%",marginLeft:"-5%"}}
            source={nav.dark? require('../Assets/giftcarddark.png'):require('../Assets/giftcardlight.png')}
           /> 
           <Text style={{marginTop:"-45%",marginLeft:"10%",marginRight:"5%",fontSize:18,fontWeight:"600",color:colors.text,justifyContent:"center",alignContent:"center",alignItems:"center"}}>Share Anti Journal with friends and family</Text>
           
           {/* <TouchableOpacity 
            style={{backgroundColor:"lightgrey",borderRadius:50,height:50,width:"80%",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"10%",marginTop:"18%"}}>
            <Text style={{color:"black",fontSize:20}}>Send Message</Text>
           </TouchableOpacity> 
           
           <TouchableOpacity 
            style={{backgroundColor:"lightgrey",borderRadius:50,height:50,width:"80%",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"10%",marginTop:"4%"}}>
            <Text style={{color:"black",fontSize:20}}>Send Email</Text>
           </TouchableOpacity> */}
           
            <TouchableOpacity onPress={myshare}
            style={{backgroundColor:"lightgrey",borderRadius:50,height:50,width:"80%",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"10%",marginTop:"24%"}}>
            <Text style={{color:"black",fontSize:20}}>Share</Text>
           </TouchableOpacity>




        </View>
    );
}

const styles = StyleSheet.create({})

export default Gift;

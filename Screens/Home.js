import React, { useState } from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity,Modal,ScrollView} from 'react-native';
import Button from './button';
import { useTheme } from '@react-navigation/native';

const Home = ({navigation}) => {
    const [modal,setModal] = useState(false);

    const {colors} = useTheme();
    const nav = useTheme();
   
    // console.log("props available",navigation)
    return (
        // <ScrollView style={{width:"100%",height:"-20%"}}>
        <View style={{width:"100%",height:"99%",backgroundColor:colors.background}}>
       
            <View style={{marginTop:"5%",display:"flex",flexDirection:"row",}}>
            <TouchableOpacity onPress={() => navigation.navigate("Gift")}>
            <Image source={require('../Assets/giftgrey.png')}  
             style={{width:"130%",height:"22%",marginLeft:"14%"}}/>
        
            </TouchableOpacity>

             <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                
                <Image source={nav.dark?require('../Assets/gear-dark.png'):require('../Assets/gear.png')} style={{width: 36,height:42,marginLeft:"82%",right:"2%"}}/>
                </TouchableOpacity>
            </View>
            <View style={{top:"-14%",width:"100%",marginLeft:"5%"}}>
            <Text style={{fontSize:34,fontWeight:"bold",color:colors.text,fontFamily:"Montserrat-Bold"}}>Welcome back,</Text>
            <Text style={{fontSize:34,fontWeight:"400",color:colors.text}}>Stranger!</Text>
            </View>

            <View style={{marginLeft:"5%",top:"-12%",marginRight:"10%"}}>

            <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginTop:"5%"}}>
            <View style={styles.imgview}>
            <Image source={require('../Assets/head_light.png')} style={styles.img}/>
            </View>
            <Text style={{marginLeft:"5%",fontSize:18,color:colors.text,textAlign:"justify",marginRight:"5%"}}>Get your thoughts and feelings out. Experience catharsis.</Text>
            </View>
            
            <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginTop:"10%"}}>
            <View style={styles.imgview}>
            <Image source={require('../Assets/diary_light.png')} style={styles.img}/>
            </View>
            <Text style={{marginLeft:"5%",fontSize:18,color:colors.text,textAlign:"justify",marginRight:"5%"}}>This is not a diary. When you send to the flame - it will be erased forever.
            </Text>
            </View>

            <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginTop:"10%"}}
            >
            <View style={styles.imgview}>
            <Image source={require('../Assets/hand_light.png')} style={styles.img}/>
            </View>
            <Text style={{marginLeft:"5%",fontSize:18,color:colors.text,textAlign:"justify",marginRight:"5%"}}>Tap with two fingers for secret mode. No prying eyes.</Text>
            </View>

            <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginTop:"10%"}}>
            <View style={styles.imgview}>
            <Image source={require('../Assets/click_light.png')} style={styles.img}/>
            </View>
            <Text style={{marginLeft:"5%",fontSize:18,color:colors.text,textAlign:"justify",marginRight:"5%"}}>Click "Vent" below to begin writing.</Text>
            </View>

            <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginTop:"10%"}}>
            <View style={styles.imgview}>
            <Image source={require('../Assets/flame_light.png')} style={styles.img}/>
            </View>
            <Text style={{marginLeft:"5%",fontSize:18,color:colors.text,textAlign:"justify",marginRight:"5%"}}>Tap to burn and free yourself.</Text>
            </View>
            <View style={{display:"flex",justifyContent:"center",alignItems:"center",width:"105%",height:"8%",marginTop:"22%",borderRadius:50,backgroundColor:colors.card1,marginBottom:"15%"}}>
     <TouchableOpacity onPress={() => navigation.navigate('Write')} style={{backgroundColor:"transparent",height:45,width:135,display:"flex",justifyContent:"center",alignItems:"center"}}>
         <Text style={{fontSize:20,color:colors.text1,fontWeight:"bold"}}>Vent</Text>
     </TouchableOpacity>
     </View>

                <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           
           <Image source={nav.dark? require('../Assets/bar-dark.png'): require('../Assets/minus.png')} style={{width:"45%",height:"3%",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:15,marginBottom:"70%"}}/>
                  </View>
            
        
            
            

            </View>

            <Modal
transparent={true}
visible={modal}
>
<View style={{backgroundColor:"background: rgba(2, 2, 2, 0.4);",flex:1,display:"flex",justifyContent:"center"}}>
    <View style={{backgroundColor:"rgba(242, 242, 242, 0.8)",backfaceVisibility:"hidden",margin:50,padding:40,borderRadius:20,}}>
    <View style={{marginTop:"-8%",marginBottom:"5%"}}>
     <Text style={{fontSize:20,fontWeight:"bold",color:"black",textAlign:"center"}}>Notification</Text>
     <Text style={{fontSize:14,fontWeight:"normal",color:"black",textAlign:"center"}}>Anti Journal wants to send you notification</Text>
     </View>
     <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"-15%",marginLeft:"-15%",marginBottom:"-15%",marginTop:"4%",borderTopWidth:2,borderTopColor:"darkgrey"}}>
     <TouchableOpacity onPress={() => setModal(false)} style={{backgroundColor:"transparent",height:45,width:115,display:"flex",justifyContent:"center",alignItems:"center",borderRightWidth:1,borderRightColor:"darkgrey"}}>
         <Text style={{fontSize:17,color:"#007AFF",marginLeft:"-20%"}}>Don't Allow</Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={() => setModal(false)} style={{backgroundColor:"transparent",height:45,width:115,display:"flex",justifyContent:"center",alignItems:"center",borderLeftWidth:1,borderLeftColor:"darkgrey"}}>
         <Text style={{fontSize:17,color:"#007AFF",marginLeft:"20%"}}>Allow</Text>
     </TouchableOpacity>
     </View>
</View>
 </View>
</Modal>

        </View>

        // </ScrollView>
    );
}

const styles = StyleSheet.create({
    img:{

      height: 40,
      width:  40,
         
    },
    // imgview:{
    //     height:40,
    //     width: 40,
    //     backgroundColor:'lightgrey' ,
    //     display:"flex",
    //     justifyContent:"center",
    //     alignItems:"center",
    //     borderRadius: 12

    // }
})

export default Home;

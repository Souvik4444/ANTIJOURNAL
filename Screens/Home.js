import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import Button from './button';

const Home = ({navigation}) => {

    // console.log("props available",navigation)
    return (
        <View style={{flex:1,backgroundColor:"white"}}>
            <View style={{marginTop:"5%"}}>

             <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                <Image source={require('../Assets/gear.png')} style={{width: 34,height:34,marginLeft:"90%"}}/>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:"5%",width:"100%",marginLeft:"5%"}}>
            <Text style={{fontSize:38,fontWeight:"bold",color:"black"}}>Welcome back,</Text>
            <Text style={{fontSize:38,fontWeight:"400",color:"black"}}>Stranger !</Text>
            </View>

            <View style={{marginLeft:"5%",marginTop:"5%",marginRight:"10%"}}>

            <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginTop:"5%"}}>
            <View style={styles.imgview}>
            <Image source={require('../Assets/head_light.png')} style={styles.img}/>
            </View>
            <Text style={{marginLeft:"5%",fontSize:18,color:"#020202",textAlign:"justify",marginRight:"5%"}}>Get your thoughts and feelings out. Experience catharsis.</Text>
            </View>
            
            <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginTop:"10%"}}>
            <View style={styles.imgview}>
            <Image source={require('../Assets/diary_light.png')} style={styles.img}/>
            </View>
            <Text style={{marginLeft:"5%",fontSize:18,color:"#020202",textAlign:"justify",marginRight:"5%"}}>This is not a diary. When you send to the flame - it will be erased forever.
            </Text>
            </View>

            <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginTop:"10%"}}
            >
            <View style={styles.imgview}>
            <Image source={require('../Assets/hand_light.png')} style={styles.img}/>
            </View>
            <Text style={{marginLeft:"5%",fontSize:18,color:"#020202",textAlign:"justify",marginRight:"5%"}}>Tap with two fingers for secret mode. No prying eyes.</Text>
            </View>

            <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginTop:"10%"}}>
            <View style={styles.imgview}>
            <Image source={require('../Assets/click_light.png')} style={styles.img}/>
            </View>
            <Text style={{marginLeft:"5%",fontSize:18,color:"#020202",textAlign:"justify",marginRight:"5%"}}>Click "Vent" below to begin writing.</Text>
            </View>

            <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginTop:"10%"}}>
            <View style={styles.imgview}>
            <Image source={require('../Assets/flame_light.png')} style={styles.img}/>
            </View>
            <Text style={{marginLeft:"5%",fontSize:18,color:"#020202",textAlign:"justify",marginRight:"5%"}}>Tap to burn and free yourself.</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            
                <Button text={'Vent'} />
                </TouchableOpacity>

                <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           
           <Image source={require('../Assets/minus.png')} style={{width:"45%",height:"6%",marginTop:"15%",display:"flex",justifyContent:"center",alignItems:"center"}}/>
                  </View>
            
        
            
            

            </View>
        </View>
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

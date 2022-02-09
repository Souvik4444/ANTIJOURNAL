import React, { useState,useContext } from 'react';
import {View, StyleSheet,Text, Switch,Image,TouchableOpacity,Modal, Alert} from 'react-native';
import { useTheme } from '@react-navigation/native';

';'

const Settingsscreen = ({navigation,route}) => {
    const itemId = route.params;
    const [modalOpen,setModalOpen] = useState(false);
    // const {toggleTheme} = React.useContext

    const [isEnabled,setIsEnabled] = useState(false);
    const navigationTheme = useTheme();
    const toggleSwitch= () =>{
        if (isEnabled){
            setModalOpen(true)
        }else{
            window.alert("Bye")
        }

        setIsEnabled(previousState=>!previousState)
    }
    return (
        <View style={{backgroundColor: "#F8FAFC"}}>
        <View style={{backgroundColor:"white",display:"flex"}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        
        <Image source={require('../Assets/back.png')} style={{width:"10%",height:"35%",marginTop:"5%"}}/>
        
        </TouchableOpacity>
            <Text style={{fontSize:44,fontWeight:'bold',marginLeft:"5%",color:"black",marginTop:"-2%",width:"100%",marginBottom:"-45%"}}>Settings</Text>
            </View>
           <View style={{display:"flex",flexDirection:"row",backgroundColor:"white"}}>
           <Text style={styles.bigblue}>Dark mode </Text>
           
           <Switch
           style={{position:"relative",right:"5%",marginLeft:"50%"}}
        trackColor={{ false: "grey", true:"black" }}
        thumbColor={ "white"}
        ios_backgroundColor="#3e3e3e"
        // onValueChange= {}
        value={navigationTheme.dark}
      />
           
           </View>
           <View style={{backgroundColor:"white",marginTop:"0.5%",display:"flex",flexDirection:"row"}}>
               <Text style={styles.bigblue}>Notification </Text>
               <Switch
           style={{position:"relative",right:"5%",marginLeft:"49%"}}
        trackColor={{ false: "grey", true:"black" }}
        thumbColor={ isEnabled? "white":"White"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setModalOpen}
        value={isEnabled}
      />
              
           </View>


           <View style={{padding:"5%",
                       
                         backgroundColor: "transparent",}}>

                         
               <Text style={styles.heading2}>Font</Text>
           </View>
           <View style={{display:"flex",flexDirection:"row",backgroundColor:"white"}}>
               <Text style={styles.bigblue}>Font</Text>
               <Text style={{marginLeft:"46%",fontSize:18}}>Montserrat</Text>
               <TouchableOpacity onPress={() => navigation.navigate('Font')}>
               <Image source={require('../Assets/right.png')} style={{height:30,width:30,marginLeft:"2%"}}/>
               </TouchableOpacity>
           </View>

           <View style={{display:"flex",flexDirection:"row",backgroundColor:"white",marginTop:"0.5%",alignItems:"center"}}>
               <Text style={styles.bigblue}>Font Size</Text>
               <Text style={{marginLeft:"43%",fontSize:18}}>Size:{JSON.stringify(itemId)}</Text>
               <TouchableOpacity onPress={() => navigation.navigate('Fontsizer')}>
               <Image source={require('../Assets/right.png')} style={{height:30,width:30,marginRight:"0%"}}/>
               </TouchableOpacity>
           </View>

           <View style={{padding:"5%",
                       
                         backgroundColor: "transparent",}}>
               <Text style={styles.heading2}>Secret Mode</Text>
           </View>

           <View style={{display:"flex",flexDirection:"row",backgroundColor:"white",alignItems:"center"}}>
               <Text style={styles.bigblue}>Time Delay</Text>
               
               <Text style={{fontSize:18,marginLeft:"42%",}}>15 Sec</Text>
               <TouchableOpacity onPress={() => navigation.navigate('Timer')}>
               <Image source={require('../Assets/right.png')} style={{height:30,width:30,marginLeft:"2%"}}/>
               </TouchableOpacity>
           </View>

           <View style={{backgroundColor:"white",marginTop:"0.5%",display:"flex",flexDirection:"row"}}>
               <Text style={styles.bigblue}>Secretmode by tap </Text>
               <Switch
           style={{position:"relative",right:"5%",marginLeft:"35%"}}
        trackColor={{ false: "grey", true:"black" }}
        thumbColor={ "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => Alert.alert("Secret mode will be applied on double tap")}
        // value={isEnabled}
      />
              
           </View>
           
           <View style={{display:"flex",flexDirection:"row",backgroundColor:"white",marginTop:"0.5%",alignItems:"center"}}>
               <Text style={styles.bigblue}>Privacy Policy</Text>
               <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
               <Image source={require('../Assets/right.png')} style={{height:30,width:30,marginLeft:"67%"}}/>
               </TouchableOpacity>
           </View>

           <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           
    <Image source={require('../Assets/minus.png')} style={{width:"40%",height:"5%",marginTop:"14%",display:"flex",justifyContent:"center",alignItems:"center"}}/>
           </View>

<Modal
transparent={true}
visible={modalOpen}
>
<View style={{backgroundColor:"background: rgba(2, 2, 2, 0.4);",flex:1,display:"flex",justifyContent:"center"}}>
    <View style={{backgroundColor:"rgba(242, 242, 242, 0.8)",backfaceVisibility:"hidden",margin:50,padding:40,borderRadius:20,}}>
    <View style={{marginTop:"-8%",marginBottom:"5%"}}>
     <Text style={{fontSize:20,fontWeight:"bold",color:"black",textAlign:"center"}}>Notification</Text>
     <Text style={{fontSize:14,fontWeight:"normal",color:"black",textAlign:"center"}}>Anti Journal wants to send you notification</Text>
     </View>
     <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"-15%",marginLeft:"-15%",marginBottom:"-15%",marginTop:"4%",borderTopWidth:2,borderTopColor:"darkgrey"}}>
     <TouchableOpacity onPress={() => setModalOpen(false)} style={{backgroundColor:"transparent",height:45,width:115,display:"flex",justifyContent:"center",alignItems:"center",borderRightWidth:1,borderRightColor:"darkgrey"}}>
         <Text style={{fontSize:17,color:"#007AFF",marginLeft:"-20%"}}>Don't Allow</Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={() => setModalOpen(false)} style={{backgroundColor:"transparent",height:45,width:115,display:"flex",justifyContent:"center",alignItems:"center",borderLeftWidth:1,borderLeftColor:"darkgrey"}}>
         <Text style={{fontSize:17,color:"#007AFF",marginLeft:"20%"}}>Allow</Text>
     </TouchableOpacity>
     </View>
</View>
 </View>
</Modal>

        </View>


    );
}

const styles = StyleSheet.create({
    bigblue: {
        fontSize:18,fontWeight:"10%",marginLeft:"7%",color:"grey",padding:"4%",
},
heading2:{
    fontSize:20,fontWeight:"bold",marginLeft:"3%",color:"black",
    position: "relative",
left: "0%",
// right: "4.27%",
top: "50%",
bottom: "0.71%"
},


})

export default Settingsscreen;

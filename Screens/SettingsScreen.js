import React, { useState,useContext } from 'react';
import {View, StyleSheet,Text, Switch,Image,TouchableOpacity,Modal, Alert,ScrollView} from 'react-native';
import { useTheme,useNavigation} from '@react-navigation/native';
import PushNotification from "react-native-push-notification";

const Settingsscreen = ({handleTheme,Fam,size,seconds}) => {
    const navigation= useNavigation();
    const {colors} = useTheme();
    const navTheme = useTheme();
    // const itemId = route.params;
    const [modalOpen,setModalOpen] = useState(false);
    const [alertOpen,setaAlertOpen] = useState(true);
    const secretfont = () =>{
        setaAlertOpen(false)
    }
    // const {toggleTheme} = React.useContext

    const [isEnabled,setIsEnabled] = useState(colors.dark);
    const handleNotification = () =>{
        PushNotification.cancelAllLocalNotifications();
        PushNotification.localNotification({
            channelId: "test-channel",
            title:"Whats yur plan today?",
            message:"your feelings and thoughts are waiting to be expressed"
        });
        PushNotification.localNotificationSchedule({
            channelId: "test-channel",
            title:"Whats yur plan today?",
            message:"your feelings and thoughts are waiting to be expressed",
            date: new Date(Date.now() + 20 * 1000),
            allowWhileIdle: true,
            repeatType: 'time',
            repeatTime: 28800000,
        })
         }
    // const navigationTheme = useTheme();
    // const toggleSwitch= () =>
    //     // if (isEnabled){
    //     //     setModalOpen(true)
    //     // }else{
    //     //     window.alert("Bye")
        
        

    //     setIsEnabled(handleTheme)
    
    return (
        <View style={{backgroundColor:colors.card,maxWidth:"100%",maxHeight:"100%",}}>
        <View style={{backgroundColor:colors.background,height:"13%"}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        
        <Image source={navTheme.dark?require('../Assets/back-dark.png'):require('../Assets/back.png')} style={{width:"9.5%",height:"38%",marginTop:"5%",marginLeft:"2%"}}/>
        
        </TouchableOpacity>
            <Text style={{fontSize:34,fontWeight:'bold',marginLeft:"5%",top:"-10%",width:"100%",marginBottom:"-45%",color:colors.text}}>Settings</Text>
            </View>
           <View style={{display:"flex",flexDirection:"row",backgroundColor:colors.background,marginTop:"-1%"}}>
           <Text style={{fontSize:18,fontWeight:"normal",marginLeft:"2.5%",color:colors.text,padding:"4%",}}>Dark mode </Text>
           
           <Switch
           style={{marginRight:"5%",display:"flex",justifyContent:"flex-end",flex:1}}
        trackColor={{ false: colors.background1, true: colors.card1 }}
        thumbColor={ "lightgrey"}
        ios_backgroundColor="#3e3e3e"
        onValueChange= {handleTheme}
        // onPress ={()=>{handleTheme}}
        value= {navTheme.dark}
      />
           
           </View>
           <View style={{backgroundColor:colors.background,marginTop:"0.5%",display:"flex",flexDirection:"row",}}>
               <Text style={{fontSize:18,fontWeight:"10%",marginLeft:"2.5%",color:colors.text,padding:"4%",}}>Notification </Text>
               <Switch
           style={{display:"flex",justifyContent:"flex-end",flex:1,marginRight:"5%"}}
        trackColor={{ false: colors.background1, true:colors.card1 }}
        thumbColor={"lightgrey"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setModalOpen}
        value={modalOpen}
      />
              
           </View>


           <View style={{padding:"2.5%",
                       
                         backgroundColor: "transparent",}}>

                         
               <Text 
               style={{    fontSize:20,fontWeight:"bold",marginLeft:"3%",color:colors.text,
                }}>Font</Text>
           </View>
           <View style={{display:"flex",flexDirection:"row",backgroundColor:colors.background,alignItems:"center",justifyContent:"space-between"}}>
               <Text style={{fontSize:18,fontWeight:"10%",marginLeft:"2.5%",color:colors.text,padding:"4%"}}>Font</Text>
               <Text style={{fontSize:18,color:colors.text,marginRight:"0%",width:"100%",display:"flex",justifyContent:"flex-end",flex:1,textAlign:"right"}}>{Fam}</Text>
               <TouchableOpacity onPress={() => navigation.navigate('Font')}>
               <Image source={navTheme.dark? require('../Assets/next-dark.png'):require('../Assets/right.png')} style={{height:30,width:30,display:"flex",justifyContent:"flex-end",flex:1/2,marginRight:"7%"}}/>
               </TouchableOpacity>
           </View>

           <View style={{display:"flex",flexDirection:"row",backgroundColor:colors.background,marginTop:"0.5%",alignItems:"center"}}>
               <Text style={{fontSize:18,fontWeight:"10%",color:colors.text,padding:"4%",marginLeft:"2.5%"}}>Font size</Text>
               <Text style={{marginLeft:"51%",fontSize:18,color:colors.text,}}> {size}</Text>
               <TouchableOpacity onPress={() => navigation.navigate('Fontsizer')}>
               <Image source={navTheme.dark? require('../Assets/next-dark.png'):require('../Assets/right.png')} style={{height:30,width:30,display:"flex",justifyContent:"flex-end",flex:1/2}}/>
               </TouchableOpacity>
           </View>

           <View style={{padding:"5%",
                       
                         backgroundColor: "transparent"}}>
               {/* <Text style={{   fontSize:20,fontWeight:"bold",marginLeft:"1%",color:colors.text,
                                 position: "relative",
                                 left: "0%",
                                 top: "50%",
                                bottom: "0.71%"}}>
                                Secret mode</Text> */}
           </View>

           {/* <View style={{display:"flex",flexDirection:"row",backgroundColor:colors.background,alignItems:"center"}}>
               <Text style={{fontSize:18,fontWeight:"10%",marginLeft:"2.5%",color:colors.text,padding:"4%",}}>Time delay</Text>
               
               <Text style={{fontSize:18,marginLeft:"38.5%",color:colors.text,}}> {seconds} sec</Text>
               <TouchableOpacity onPress={() => navigation.navigate('Timer')}>
               <Image source={navTheme.dark? require('../Assets/next-dark.png'):require('../Assets/right.png')} style={{height:30,width:30,marginLeft:"2%",display:"flex",justifyContent:"flex-end",flex:1/2}}/>
               </TouchableOpacity>
           </View> */}

           {/* <View style={{backgroundColor:colors.background,marginTop:"0.5%",display:"flex",flexDirection:"row"}}>
               <Text style={{fontSize:18,fontWeight:"10%",marginLeft:"2.5%",color:colors.text,padding:"4%",}}>Secret mode by tap </Text>
               <Switch
           style={{marginRight:"5%",marginLeft:"38%",display:"flex",justifyContent:"flex-end",flex:1}}
        trackColor={{ false: colors.background1, true: colors.card1 }}
        thumbColor={ "lightgrey"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setaAlertOpen}
        value={alertOpen}
      />
              
           </View> */}
           
           <View style={{display:"flex",flexDirection:"row",backgroundColor:colors.background,marginTop:"0.5%",alignItems:"center",justifyContent:"space-between"}}>
               <Text style={{fontSize:18,fontWeight:"10%",marginLeft:"2.5%",color:colors.text,padding:"4%",}}>Privacy Policy</Text>
               <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
               <Image source={navTheme.dark? require('../Assets/next-dark.png'):require('../Assets/right.png')} style={{height:30,width:30,display:"flex",justifyContent:"flex-end",flex:1/2,marginRight:"8%"}}/>
               </TouchableOpacity>
           </View>

           <View style={{display:"flex",justifyContent:"center",alignItems:"center",padding:55,paddingVertical:135}}>
           
    <Image source={navTheme.dark? require('../Assets/bar-dark.png'): require('../Assets/minus.png')} style={{width:"50%",height:"9%",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",borderRadius:10,top:-110}}/>
           </View>

<Modal
transparent={true}
visible={modalOpen}
>
<View style={{backgroundColor:"background: rgba(2, 2, 2, 0.4);",flex:1,display:"flex",justifyContent:"center"}}>
    <View style={{backgroundColor:"rgba(242, 242, 242, 0.8)",backfaceVisibility:"hidden",margin:50,padding:40,borderRadius:20,}}>
    <View style={{marginTop:"-8%",marginBottom:"5%"}}>
     <Text style={{fontSize:20,fontWeight:"bold",color:"black",textAlign:"center"}}>Notification</Text>
     <Text style={{fontSize:14,fontWeight:"normal",color:"black",textAlign:"center"}}>Anti Journal wants to send you notifications.</Text>
     </View>
     <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"-15%",marginLeft:"-15%",marginBottom:"-15%",marginTop:"4%",borderTopWidth:2,borderTopColor:"darkgrey"}}>
     <TouchableOpacity onPress={() => setModalOpen(false)} style={{backgroundColor:"transparent",height:45,width:115,display:"flex",justifyContent:"center",alignItems:"center",borderRightWidth:1,borderRightColor:"darkgrey"}}>
         <Text style={{fontSize:17,color:"#007AFF",marginLeft:"-20%"}}>Don't Allow</Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={() => {handleNotification();setModalOpen(false)}} 
     style={{backgroundColor:"transparent",height:45,width:115,display:"flex",justifyContent:"center",alignItems:"center",borderLeftWidth:1,borderLeftColor:"darkgrey"}}>
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
        fontSize:18,marginLeft:"7%",color:"grey",padding:"4%",
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

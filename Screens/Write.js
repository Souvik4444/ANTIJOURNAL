import React,{useState,useEffect, useRef} from 'react';
import {View, StyleSheet,Text,TextInput,TouchableOpacity,Image,Modal} from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { getData } from './store';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getData } from './store';

const Write = ({navigation}) => {
   
    const [shouldShow, setShouldShow] = useState(false);
    const [modalOpen,setModalOpen] = useState(false);
    const [shouldHide, setShouldHide] = useState(true);
    const [store,setStore] = useState(18);
    const doubleTapRef = useRef(null);
    const onDoubleTapEvent = (event) => {
      if (event.nativeEvent.state === State.ACTIVE) {
        shouldHide === true
          ? setShouldHide(false)
          : setShouldHide(true);
      }
    };
    const mod=()=>{
        if (setShouldShow){
            navigation.navigate('Home')
        }
    }
    useEffect(() => {
        if (shouldShow) {
          // 1000 for 1 second
          setTimeout(() =>{
             setShouldShow(false)
             setModalOpen(true)}, 4000)
        }
        else{
           setModalOpen(false)

        //  setModalOpen(true)
        }
      }, [shouldShow])

      // useEffect(() => {
      //   getData().then((value) => {
      //     setStore(value);
          
      //   });
      // }, []);
      

    //   useEffect(() => {
    //     if (setShouldShow) {
    //       // 1000 for 1 second
    //       mod
    //     }
    //   }, [setShouldShow])
    return (
        
        <View style={{backgroundColor:"white",flex:1,justifyContent:"flex-start"}}>
        
     
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginLeft:"5%",marginRight:"5%",marginTop:"5%",height:30}}>
            <TouchableOpacity style={{}} onPress={() => navigation.navigate('Home')}>
        <Image source={require('../Assets/back.png')} style={{width:30,height:40,}}/>
        </TouchableOpacity>
        <Text style={{fontSize:20,color:"black"}}>
            Anti Journal
        </Text>
       
        <TouchableOpacity onPress={() => setShouldShow(true)}>
        <Image source={require('../Assets/flame_red.png')} style={{width:45,height:50,backgroundColor:"transparent"}}/>
        </TouchableOpacity>
            </View>
            <TapGestureHandler
          ref={doubleTapRef}
          onActivated={()=>{
           onDoubleTapEvent}}
          numberOfTaps={2}
          maxDelayMs={150}
        >

            <View>{shouldHide?(

                <TextInput onPress={()=>setStore(getData)}  style={{marginLeft:"3%",marginTop:"4%",fontSize:store,marginRight:"3%",display:"flex",justifyContent:"flex-start"}} placeholder='Get your thoughts and feelings out' placeholderTextColor={"#5B5B5B"} multiline={true} numberOfLines={1}>
                 
                </TextInput>):null}
            </View>
            </TapGestureHandler>
            
            <Modal
transparent={true}
visible={modalOpen}
>
<View style={{backgroundColor:"darkgrey",flex:1,display:"flex",justifyContent:"flex-end"}}>
    <View style={{backgroundColor:"white",backfaceVisibility:"hidden",padding:70,borderRadius:40,display:"flex",justifyContent:"center",alignItems:"center"}}>
    <View style={{marginTop:"-40%",marginBottom:"5%"}}>
     <Text style={{fontSize:35,fontWeight:"bold",color:"black",textAlign:"center",marginBottom:"15%"}}>Well done!</Text>
     <Text style={{fontSize:20,fontWeight:"normal",color:"black",textAlign:"center",marginTop:"-13%"}}>You are now free</Text>
     </View>
     <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"130%",height:"35%",marginTop:"5%",borderRadius:20,backgroundColor:"black"}}>
     <TouchableOpacity onPress={() => setModalOpen(false)} style={{backgroundColor:"transparent",height:45,width:125,display:"flex",justifyContent:"center",alignItems:"center"}}>
         <Text style={{fontSize:20,color:"white"}}>ok</Text>
     </TouchableOpacity>
     </View>
     
           <View style={{marginTop:"-35%"}}>
           <Image source={require('../Assets/minus.png')} style={{width:"40%",height:"6%",display:"flex",justifyContent:"center",alignItems:"center"}}/>
           </View>    
</View>
 </View>
</Modal>
         {/* <View style={{display:"flex",flex:1,}}> */}
        {shouldShow ? (
          <Image
            source={
              require('../Assets/animation.gif')
            }
            style={{width: "100%", height: "100%",marginTop:"-30%",backgroundColor:"white"}}
          />
        ):null}
        {/* </View> */}
        </View>
    );
}

const styles = StyleSheet.create({})

export default Write;


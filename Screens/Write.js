import React,{useState,useEffect, useRef} from 'react';
import {View, StyleSheet,Text,TextInput,TouchableOpacity,Image,Modal,Alert,Keyboard} from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { getData } from './store';
import { useNavigation , useTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fontFamily } from '@mui/system';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { getData } from './store';
var Sound = require('react-native-sound');
Sound.setCategory('Playback');

var flame = new Sound('fire.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('duration in seconds: ' + flame.getDuration() + 'number of channels: ' + flame.getNumberOfChannels());
});

const Write = ({size,Fam,cachememory,def}) => {
  const [note,setNote] = useState("")

  const [greek,setGreek] = useState(Fam);
  // const [norm,setNorm] = useState(true);

  const playPause = () => {
  // Play the sound with an onEnd callback
  flame.play((success) => {
    if (success) {
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
    }
  });
};


  const navigation = useNavigation();
  const {colors} = useTheme();
  const nav = useTheme();
  const fest = 'Bongos2-2vp3';
    const [shouldShow, setShouldShow] = useState(false);
    const [modalOpen,setModalOpen] = useState(false);
    // const [shouldHide, setShouldHide] = useState(true);
    // const [t,s] = useState(true);
    // const secret = () => {s(t => !t)};
    // const [store,setStore] = useState(18);
    // const doubleTapRef = useRef(null);
    // const _onSingleTap = (event) => {
    //   if (event.nativeEvent.state === State.ACTIVE) {
    //     alert("Hey");
    //   }
    // };
    // const onDoubleTapEvent = (event) => {
    //   if (event.nativeEvent.state === State.ACTIVE) {
    //     // shouldHide === true
    //     //   ? setShouldHide(false)
    //     //   : setShouldHide(true);
    //     // alert ("Hey");
    //     alert("HIIII")
    //   }
    // };

    const fire=()=>{
      setShouldShow(true);}

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
             setModalOpen(true)
            }, 1382)
             setTimeout(() =>{
              // setShouldShow(false)
              setModalOpen(true)}, 1382)
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

    // const saveNote = async ()=>{
    //   const value = await AsyncStorage.getItem("NOTES")
    //   const n = value ? JSON.parse(value) : []
    //   n.push(note)
    //   await AsyncStorage.setItem("NOTES", JSON.stringify(n)).then(()=>navigation.navigate('Allnotes'))
    //   setNote("")
    // }

   const onClickFunction = () => {
      Keyboard.dismiss()
 }

    const change =()=>{
      if (greek){
      setGreek( fest )}
 
    };

    const rechange =()=>{
       setGreek(Fam)
    };

    // const secrett =()=>{
    //   setNorm(false)
    // }
    // const normall = ()=>{
    //   setNorm(true)
    // }
    return (
        
        <View style={{backgroundColor:colors.background,flex:1,justifyContent:"flex-start"}}>
        
     
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginLeft:"5%",marginRight:"5%",marginTop:"5%",height:30}}>
            <TouchableOpacity style={{}} onPress={() => navigation.navigate('Home')}>
        <Image source={nav.dark?require('../Assets/back-dark.png'):require('../Assets/back.png')} style={{width:30,height:40,}}/>
        </TouchableOpacity>
        <Text style={{fontSize:16,color:colors.text,fontFamily:""}}>
            Anti Journal
        </Text>
       
        <TouchableOpacity onPress={()=>{onClickFunction();fire();playPause();}}>
        <Image source={require('../Assets/flame_red.png')} style={{width:45,height:50,backgroundColor:"transparent"}}/>
        </TouchableOpacity>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <TouchableOpacity 
              style={{borderRadius:20,backgroundColor:colors.card1,width:90,height:25,justifyContent:"center",alignItems:"center",marginLeft:"5%",marginTop:"5%"}} 
              onPress={rechange}>
              <Text style={{color:colors.text1}}>NormalMode</Text></TouchableOpacity>
              <TouchableOpacity  
              style={{borderRadius:20,backgroundColor:colors.card1,width:90,height:25,justifyContent:"center",alignItems:"center",marginRight:"5%",marginTop:"5%"}}
              // onPress={saveNote}
              onPress={change}
              >
              <Text style={{color:colors.text1}}>SecretMode</Text></TouchableOpacity>
            </View>
      
        {/* <TapGestureHandler
      onHandlerStateChange={_onSingleTap}
      waitFor={doubleTapRef}>
            <TapGestureHandler
          ref={doubleTapRef}
          onHandlerStateChange={onDoubleTapEvent}
          numberOfTaps={2}
          // maxDelayMs={150}
        >
        
          
            <View style={{backgroundColor:"red",height:200}}>
            <Text>Hii</Text>
            </View>
            </TapGestureHandler>
            </TapGestureHandler> */}
            
            {/* {t?( */}
                {/* {shouldHide?( */}

                <TextInput  
                // secureTextEntry 
                value={note} style={{marginLeft:"3%",marginTop:"3%",marginRight:"3%",marginBottom:"22%",display:"flex",justifyContent:"flex-start",fontSize:size,fontFamily:greek,color:colors.text,height:424,alignItems:"flex-start",textAlignVertical:"top"}} 
                placeholder={"Get your thoughts and feelings out"}  placeholderTextColor={colors.text}  multiline={true} numberOfLines={1} 
                onChangeText={setNote}
                />
                 
                {/* </TextInput> */}
                {/* ):null} */}
                
                {/* ):null} */}
                
            
           

           
           
            
            <Modal
             transparent={true}
             visible={modalOpen}
            >
            <View style={{backgroundColor:colors.background1,flex:1,display:"flex",justifyContent:"flex-end"}}>
            <View style={{backgroundColor:colors.background2,backfaceVisibility:"hidden",padding:70,borderRadius:40,display:"flex",justifyContent:"center",alignItems:"center"}}>
            <View style={{marginTop:"-40%",marginBottom:"5%"}}>
            <Text style={{fontSize:30,fontWeight:"bold",color:colors.text,textAlign:"center",marginBottom:"15%"}}>Well done!</Text>
            <Text style={{fontSize:18,fontWeight:"normal",color:colors.text,textAlign:"center",marginTop:"-8%"}}>You are now free.</Text>
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"130%",height:"35%",marginTop:"5%",borderRadius:50,backgroundColor:colors.card1}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{backgroundColor:"transparent",height:45,width:125,display:"flex",justifyContent:"center",alignItems:"center"}}>
             <Text style={{fontSize:20,color:colors.text1,fontWeight:"800"}}>Ok</Text>
            </TouchableOpacity>
            </View>
     
            <View style={{marginTop:"-35%"}}>
            <Image source={require('../Assets/minus.png')} style={{width:"40%",height:"6%",display:"flex",justifyContent:"center",alignItems:"center"}}/>
            </View>    
            </View>
            </View>
            </Modal>


         <View style={{display:"flex",flex:1,}}>
        {shouldShow ? (
          <Image
            source={
              require('../Assets/animation.gif')
            }
            style={{width: "100%", height: "100%",marginTop:"-200%",backgroundColor:"transparent",paddingVertical:500}}
          />
        ):null}
        </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Write;


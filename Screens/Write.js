import React,{useState,useEffect, useRef} from 'react';
import {View, StyleSheet,Text,TextInput,TouchableOpacity,Image,Modal,Alert,Keyboard, SafeAreaView, Pressable} from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { getData } from './store';
import { useIsFocused, useNavigation , useTheme} from '@react-navigation/native';
import { fontFamily } from '@mui/system';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const Write = ({size,Fam,cachememory,def, timeDelay}) => {
  const [note,setNote] = useState("")
  console.log('timeDelay',timeDelay);
  const [greek,setGreek] = useState(Fam);

  console.log('time_Delay',timeDelay);
  let backCount = 0;
  let backTimer;
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
    const [initiatedSecretMode, setInitiatedSecretMode] = useState(false);
    const [timer, setTimer] = useState(null);
    const [timerDuration, setTimerDuration] = useState(0);
    const [intervalTimer, setIntervalTimer] = useState(null);
    console.log('secretMode initiated', initiatedSecretMode);
    console.log('timer',timerDuration);
    const isFocused = useIsFocused();
    // useEffect(()=>{
    //   let timeout;
    //   let interval;
    //   if(initiatedSecretMode){
    //     timeout = setTimeout(()=>{
    //       setGreek(fest);
    //     },timeDelay*1000);

    //     interval = setInterval(()=>{
    //       setTimerDuration((v)=> v+1);
    //     },1000);
    //     setIntervalTimer(interval);
    //   }
    //   else{
    //     if(intervalTimer){
    //       clearInterval(intervalTimer);
    //     }
    //     setTimerDuration(0);
    //     console.log('clearing timeout____');
    //     if(timeout){
    //       console.log('clearing timeout____');
    //       clearTimeout(timeout);
    //     }
    //     setGreek(Fam);
    //   }
    //   return ()=>{
    //     if(timeout){
    //       clearTimeout(timeout);
    //     }
    //   }

    // },[initiatedSecretMode]);
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

    // useEffect(()=>{
    //   if(timerDuration==timeDelay){
    //     clearInterval(intervalTimer);
    //   }
    // },[timerDuration]);


    useEffect(()=>{
      handleStoredData();
      // console.log('isFocused___',isFocused);
      const event = navigation.addListener('blur',async(e)=>{
        console.log('events',JSON.stringify(e,null,4));
        let myNote = "";
        setNote((v)=> {
          myNote = v;
          return v;
        })
        console.log('ntoe',myNote);
        await AsyncStorage.setItem('text',JSON.stringify(myNote));
        let dt = await AsyncStorage.getItem('text');
        console.log('main_Dt',dt);
      });
      return ()=> event;
    },[]);

    const handleStoredData=async()=>{
      try{
        let response = await AsyncStorage.getItem('text');
        if(response){
          let text = JSON.parse(response);
          setNote(text);
          console.log('text',text);
        }
      }
      catch(e){
        console.log('e',e);
      }
    }
    const handleNotification = () =>{
      PushNotification.cancelAllLocalNotifications();
      PushNotification.localNotification({
          channelId: "test-channel",
          title:"Anti Journal",
          message:"What would you like to let go of today?"
      });}

    const fire=()=>{
      setShouldShow(true);
      
    }

    const mod=()=>{
        if (setShouldShow){
            navigation.navigate('Home')
        }
    }
    useEffect(() => {
        if (shouldShow) {
          // 1000 for 1 second
          setTimeout(() =>{
            //  setShouldShow(false)
             setModalOpen(true);

            //  setShouldShow(false)
            }, 1384)
            //  setTimeout(() =>{
            //   // setShouldShow(false)
            //   setShouldShow(false)}, 1450)
        }
        // else{
        //    setModalOpen(false)

        // //  setModalOpen(true)
        // }
      }, [shouldShow]);

      // useEffect(() => {
      //   getData().then((value) => {
      //     setStore(value);
          
      //   });
      // }, []);
      useEffect(()=>{
        if(modalOpen){
          setShouldShow(false);
        }
      },[modalOpen])

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
    const blanktext =() =>{
      setNote('');
    }

   const onClickFunction = () => {
    // setNote('');
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
        <SafeAreaView style={{flex:1}}>
        <View style={{backgroundColor:colors.background,flex:1,justifyContent:"flex-start",marginTop:"5%"}}>
        
     
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginLeft:"5%",marginRight:"5%",marginTop:"1%",height:30}}>
            <TouchableOpacity style={{}} onPress={() => {navigation.navigate('Home');blanktext()}}>
        <Image source={nav.dark?require('../Assets/back-dark.png'):require('../Assets/back.png')} style={{width:30,height:38,}}/>
        </TouchableOpacity>
        <Text style={{fontSize:16,color:colors.text}}>
            Anti Journal
        </Text>
       
        <TouchableOpacity onPress={()=>{onClickFunction();fire();playPause();}}>
        <Image source={require('../Assets/flame_red.png')} style={{width:45,height:50,backgroundColor:"transparent"}}/>
        </TouchableOpacity>
            </View>
            {/* <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
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
            </View> */}
      
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
                {/* <View style={{alignItems : 'flex-end', marginRight : 30, marginTop : 20}}>
                <Text>
                    Time Delay : {timeDelay} sec
                  </Text>
                  <Text>
                    Timer : {timerDuration} sec
                  </Text>
                </View> */}
                <Pressable onPress={()=>{console.log('Hello world')}}>
                <View style={{marginLeft:"5%"}}>
                <TextInput  
                selectTextOnFocus={false}
                onTouchStart={()=>{
                  backCount++;
                  console.log('backcount',backCount);
                  if (backCount == 2) {
                      clearTimeout(backTimer);
                      if(greek==Fam){
                        // if(initiatedSecretMode){
                        //   setInitiatedSecretMode(false);
                        // }
                        // else{
                        //   setInitiatedSecretMode(true);
                        // }
                        setGreek(fest);
                      }
                      else{
                        console.log('___Disabled');
                        setInitiatedSecretMode(false);
                        setGreek(Fam);
                      }
                  } else {
                      backTimer = setTimeout(() => {
                      backCount = 0
                      }, 600);
                  }
                }}
                // secureTextEntry 
                value={note} style={{marginLeft:"3%",marginTop:"3%",marginRight:"3%",marginBottom:"22%",display:"flex",justifyContent:"flex-start",fontSize:size,fontFamily:greek,color:colors.text,height:424,alignItems:"flex-start",textAlignVertical:"top"}} 
                placeholder={"Get your thoughts and feelings out"}  placeholderTextColor={colors.text}  multiline={true} numberOfLines={1} 
                onChangeText={setNote}
                />
                </View>
                </Pressable>
                 
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
            <TouchableOpacity onPress={() => {setShouldShow(false); navigation.navigate('Home')}} style={{backgroundColor:"transparent",height:45,width:125,display:"flex",justifyContent:"center",alignItems:"center"}}>
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
            style={{width: "100%", height: "100%",marginTop:"-200%",backgroundColor:"transparent",paddingVertical:550}}
          />
        ):null}
        </View>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Write;


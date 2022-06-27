import React,{useState,useEffect} from 'react';
import * as eva from "@eva-design/eva"
import {View, StyleSheet,Text} from 'react-native';
import Home from './Screens/Home';
import {NavigationContainer,DarkTheme,DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrivacyPolicy from './Screens/Privacy-policy';
import Settingsscreen from './Screens/SettingsScreen';
import Write from './Screens/Write';
import Fontfamily from './Screens/FontFamily';
import Fontsizer from './Screens/FontSize';
import Timer from './Screens/Timer';
import Allnotes from './Screens/Allnotes';
import Note from './Screens/Note';
import { ApplicationProvider } from '@ui-kitten/components';
import Blank from './Screens/blank';
import Splash from './Screens/Splash';
import Gift from './Screens/Gift';

// function HomeScreen  () {
//   return(
//     <Home/>
//   );
// }

const Stack = createNativeStackNavigator();

const App = () => {

  const [splash,setSplash] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setSplash(false);
    },2000);
  },[]);
  const [isDarkTheme,setIsDarkTheme] = React.useState(false);
  const [slideVal,setSlideVal] = useState(21);
  const [ fontFam,setFontFam] = useState('Montserrat');
  const [timeDelay,setTimeDelay] = useState(15);
  const [cache,setCache] = useState ('Get your thoughts and feelings out')

  const slidevalue =(val) =>{
    setSlideVal(val)
  }
  const fontfamily=(val) => {
    setFontFam(val)
  }
  const toggleTheme=()=>{
    setIsDarkTheme(isDarkTheme => !isDarkTheme);
  }
  const timing=(val)=>{
    setTimeDelay(val)
  }
  const memory = (val)=>{
    setCache(val)
  }
  
  const CustomDefaultTheme ={
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background : 'white',
      background1: 'darkgrey',
      background2:'white',
      card:'#F8FAFC',
      card1:'black',
      text: '#333333',
      text1:'white'
      
    }
  }
  const CustomDarkTheme ={
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: 'black',
      background1: 'black',
      background2:'#131314',
      text: 'white',
      text1:'#333333',
      card:'#131314',
      card1:'white',
      border: 'white'
    }
  }
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer theme={theme}>
    
    <Stack.Navigator>

        
    {splash?<Stack.Screen name="Splash" component={Splash}
        options={{
          headerShown: false
        }} />:null}

        <Stack.Screen name="Home" component={Home}
        options={{
          headerShown: false
        }} />

        <Stack.Screen name="Settings"
        children={() => (<Settingsscreen  handleTheme={toggleTheme} Fam={fontFam} size={slideVal} seconds={timeDelay} />)}
        options={{
          headerShown: false
        }} />

       <Stack.Screen name="Gift" component={Gift}
        options={{
          headerShown: false
        }} />

        {/* <Stack.Screen name="Write" component={Write}
        options={{
          headerShown: false
        }} /> */}

<Stack.Screen name="Write" 
children={() => (<Write  handleFont={slidevalue} size={slideVal} Fam={fontFam} cachememory={memory} def={cache}/>)}
        options={{
          headerShown: false
        }} />

        <Stack.Screen name="Privacy" component={PrivacyPolicy}
        options={{
          headerShown: false
        }} />

<Stack.Screen name="Font" 
children={() => (<Fontfamily  handleFamily={fontfamily} Fam={fontFam}/>)}
        options={{
          headerShown: false
        }} />

{/* <Stack.Screen name="Fontsizer" >
{props=><Fontsizer {...props}  handleFont={setSlideVal} size={slideVal}/>}
        options={{
          headerShown: false
        }} </Stack.Screen> */}


        <Stack.Screen name="Fontsizer" 
children={() => (<Fontsizer  handleFont={slidevalue} size={slideVal}/>)}
        options={{
          headerShown: false
        }} />

<Stack.Screen name="Timer" 
children={() => (<Timer  handleTime={timing} seconds={timeDelay}/>)}
        options={{
          headerShown: false
        }} />

<Stack.Screen name="Allnotes" component={Allnotes}
        options={{
          headerShown: false
        }} />

<Stack.Screen name="Blank" component={Blank}
        options={{
          headerShown: false
        }} />

<Stack.Screen name="Note" component={Note}
        options={{
          headerShown: false
        }} />

      </Stack.Navigator>
      {/* <ToggleTheme/> */}
    
    </NavigationContainer>
    </ApplicationProvider>
    
  );
}

const styles = StyleSheet.create({})

export default App;
// export default toggleTheme;

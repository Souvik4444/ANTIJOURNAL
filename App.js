import React,{useState} from 'react';
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

// function HomeScreen  () {
//   return(
//     <Home/>
//   );
// }

const Stack = createNativeStackNavigator();

const App = () => {

  const [isDarkTheme,setIsDarkTheme] = React.useState(false);
  const [slideVal,setSlideVal] = useState();
  global.myfunction = function myfunction(foo){
    setIsDarkTheme(isDarkTheme => !isDarkTheme);
  }
  const CustomDefaultTheme ={
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors
    }
  }
  const CustomDarkTheme ={
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors
    }
  }
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  return (
    <NavigationContainer theme={theme}>
    
    <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={Home}
        options={{
          headerShown: false
        }} />

        <Stack.Screen name="Settings" component={Settingsscreen}
        options={{
          headerShown: false
        }} />

        <Stack.Screen name="Write" component={Write}
        options={{
          headerShown: false
        }} />

        <Stack.Screen name="Privacy" component={PrivacyPolicy}
        options={{
          headerShown: false
        }} />

<Stack.Screen name="Font" component={Fontfamily}
        options={{
          headerShown: false
        }} />

<Stack.Screen name="Fontsizer" component={Fontsizer}
        options={{
          headerShown: false
        }} />

<Stack.Screen name="Timer" component={Timer}
        options={{
          headerShown: false
        }} />

      </Stack.Navigator>
      {/* <ToggleTheme/> */}
    
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({})

export default App;
// export default toggleTheme;

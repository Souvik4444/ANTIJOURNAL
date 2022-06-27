import React, { useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image} from "react-native";

import { Picker } from "@react-native-picker/picker";
import { useTheme,useNavigation } from '@react-navigation/native';

function Timer({handleTime,seconds}){
  const [country, setCountry] = useState(15);
  const {colors} = useTheme();
  const navigation = useNavigation();
  const nav = useTheme();


  return (
    <View >
         <View style={{display:"flex",flexDirection:"row",marginLeft:"3%",justifyContent:"space-between",marginTop:"5%"}}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Image source={nav.dark?require('../Assets/back-dark.png'):require('../Assets/back.png')} style={{width:"78%",height:"35%",marginLeft:"8%"}}/>
        
            </TouchableOpacity>
            <Text style={{fontSize:17,color:colors.text,marginRight:"40%",fontWeight:"500"}}>Time delay</Text>
        </View>
        <View style={styles.screen}>
      <Picker
        selectedValue={seconds}
        onValueChange={handleTime}
        // mode='dropdown'
        style={{ 
    // marginVertical: 30,
    width: 300,
    height: 100,
    // padding: 10,
    borderWidth: 1,
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    color:colors.text
    // borderColor: "#666",
  }}
        dropdownIconColor={"grey"}
      >
        <Picker.Item label="Please select Time delay(Seconds)" value="Unknown" style={{display:"flex"}} />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
        <Picker.Item label="11" value="11" />
        <Picker.Item label="12" value="12" />
        <Picker.Item label="13" value="13" />
        <Picker.Item label="14" value="14" />
        <Picker.Item label="15" value="15" />
        <Picker.Item label="16" value="16" />
        <Picker.Item label="17" value="17" />
        <Picker.Item label="18" value="18" />
        <Picker.Item label="19" value="19" />
        <Picker.Item label="20" value="20" />
        <Picker.Item label="21" value="21" />
        <Picker.Item label="22" value="22" />
        <Picker.Item label="23" value="23" />
        <Picker.Item label="24" value="24" />
        <Picker.Item label="25" value="25" />
        <Picker.Item label="26" value="26" />
        <Picker.Item label="27" value="27" />
        <Picker.Item label="28" value="28" />
        <Picker.Item label="29" value="29" />
        <Picker.Item label="30" value="30" />
        <Picker.Item label="31" value="31" />
        <Picker.Item label="32" value="32" />
        <Picker.Item label="33" value="33" />
        <Picker.Item label="34" value="34" />
        <Picker.Item label="35" value="35" />
        <Picker.Item label="36" value="36" />
        <Picker.Item label="37" value="37" />
        <Picker.Item label="38" value="38" />
        <Picker.Item label="39" value="39" />
        <Picker.Item label="40" value="40" />
        {/* <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" /> */}
      </Picker>
      <Text style={{color:colors.text,fontSize:24}}>Time Delay: {seconds} sec</Text>
      </View>
    </View>
  );
}

export default Timer;

// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'yellow'
  },
  text: {
    fontSize: 24,
  },
  picker: {
    // marginVertical: 30,
    width: 300,
    height: 100,
    // padding: 10,
    borderWidth: 1,
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center"
    // borderColor: "#666",
  },
});
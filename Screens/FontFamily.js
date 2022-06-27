import React, { useState } from 'react';
import {View, StyleSheet,Text,TouchableOpacity,Image} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { useTheme,useNavigation } from '@react-navigation/native';

const Fontfamily = ({handleFamily,Fam}) => {
    const [family,setFamily] = useState('Roboto-Regular')
    const {colors} = useTheme();
    const navigation = useNavigation();
    const nav = useTheme();
    return (
        <View style={{backgroundColor:colors.background}}>
         <View style={{display:"flex",flexDirection:"row",marginLeft:"3%",justifyContent:"space-between",marginTop:"5%"}}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Image source={nav.dark?require('../Assets/back-dark.png'):require('../Assets/back.png')} style={{width:"88%",height:"27%",marginLeft:"5%"}}/>
        
            </TouchableOpacity>
            <Text style={{fontSize:17,color:colors.text,marginRight:"50%"}}>Font</Text>
        </View>
        <Text style={{color:colors.text,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"5%",fontWeight:"bold",fontSize:20,marginBottom:"5%",marginTop:"-12%"}}>Sample:</Text>

<Text style={{fontFamily:Fam,fontSize:20,color:colors.text,marginLeft:"5%",textAlign:"justify",marginTop:"-4%",marginRight:"5%"}}>
A place where you can express your thoughts and feelings without recording and complete anonymity. Like the ritualof burning bad memories,it is the digital equivalent</Text>

<Picker
        selectedValue={Fam}
        
        onValueChange={handleFamily}
        // mode='dropdown'
        style={{   width: 300,
      height: 100,
      // padding: 10,
      borderWidth: 1,
      display:"flex",
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center",
      color:colors.text,
      marginLeft:"15%"
      // backgroundColor:colors.background
     
      }}
      dropdownIconColor={"grey"}
      >
          {/* <Picker.Item label="Please select Time delay(Seconds)" value="Unknown" style={{display:"flex"}} /> */}
        <Picker.Item label="Baskerville" value='Baskervville' />
        <Picker.Item label="Baskerville-italic" value="Baskervville-I" />
        <Picker.Item label="Cursive" value='Cursive' />
        <Picker.Item label="festive" value="Festive" />
        <Picker.Item label="Monteserrat" value="Montserrat" />
        <Picker.Item label="Monteserrat-Bold" value="Montserrat-B" />
        <Picker.Item label="PatrickHand" value="PatrickHand" />
        <Picker.Item label="Ptsans" value="PTSans" />
        <Picker.Item label="Ptsans-italic" value="PTSans-I" />
        <Picker.Item label="Roboto" value="Roboto" />
        <Picker.Item label="Satisfy" value="Satisfy" />
        <Picker.Item label="Sourcesans" value="SourceSans" />
        <Picker.Item label="Calibri" value="Calibri" />
        {/* <Picker.Item label="Calibri-Bold" value="Calibri Bold" /> */}
        <Picker.Item label="New Roman" value="times-italic" />
        <Picker.Item label="Dancing-script" value="Dancing" />
        {/* <Picker.Item label="Greek" value="MyGreekFont" />
        <Picker.Item label="Hebbrew" value="NotoSerifHebrew-VariableFont_wdth,wght" /> */}
        <Picker.Item label="Bonbon" value="Bonbon" />
        {/* <Picker.Item label="Bongos" value="Bongos2-2vp3" /> */}
        {/* <Picker.Item label="Wingdings" value="Wingdings" /> */}
      </Picker>
            
        </View>
    );
}

// const styles = StyleSheet.create({})

export default Fontfamily;

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

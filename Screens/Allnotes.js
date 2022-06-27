import React,{useState,useEffect, useRef} from 'react';
import {View, StyleSheet,TextInput,TouchableOpacity,Image,Modal} from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { getData } from './store';
import { useFocusEffect, useNavigation , useTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Divider,List,ListItem, Text, } from '@ui-kitten/components';
const Allnotes = () => {
    const [notes,setNotes] = useState([])
    const navigation = useNavigation();

    useFocusEffect(
        React.useCallback(()=>{
            getNotes()
        },[])
    )

    const getNotes = () =>{
        AsyncStorage.getItem("NOTES").then((notes) =>{
            setNotes(JSON.parse(notes))
        })
    }

    const renderItem = ({ item, index }) => (
        <ListItem
          title={<Text category="h5">{item}</Text>}
          onPress={() => navigation.navigate("Note",{
              singleNote: item
          })}
        />
      );
    return (
        <View style={{backgroundColor:"white", flex:1}}>
           <TouchableOpacity style={{}} onPress={() => navigation.navigate('Write')}>
        <Image source={require('../Assets/back.png')} style={{width:30,height:40,}}/>
        </TouchableOpacity>

        <Text style={{fontSize: 18,marginLeft: 5}}>Notes</Text>

         <List
          style={styles.container}
          data={notes.reverse()}
          ItemSeparatorComponent={Divider}
          renderItem={renderItem}
         />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        fontSize: 24
    },
    item: {
        marginVertical:4
    },
    title:{
        textAlign:"center",
        marginTop: 50
    },
    notes:{
        fontSize:24
    }
})

export default Allnotes;

import React,{useState,useEffect, useRef} from 'react';
import {View, StyleSheet,TextInput,TouchableOpacity,Image,Modal} from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { getData } from './store';
import { useFocusEffect, useNavigation , useTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Divider,List,ListItem, Text, } from '@ui-kitten/components';
const Note = ({route}) => {
    const [notes,setNotes] = useState([])
    const {singleNote} = route.params
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

  const deleteNote = async () =>{
      const newNotes = await notes.filter((note) => note !==singleNote)
      await AsyncStorage.setItem("NOTES", JSON.stringify(newNotes)).then(()=> navigation.navigate("Allnotes"))
  }
    return (
        <View style={{backgroundColor:"white", flex:1}}>

        <Text style={StyleSheet.title} category="h1">
            Note
        </Text>
        <Text style={{fontSize:22,margin:20}}>
            {singleNote}
        </Text>
        <View style={styles.button}>
            <Button onPress={deleteNote} style={styles.button}>Delete</Button>
        </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "fff",
        alignItems:"center",
        justifyContent:"center"
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

export default Note;

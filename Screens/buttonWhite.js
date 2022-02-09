import React from 'react';
import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';

const Buttonwhite = ({text}) => {
    return (
        <View>
            <TouchableOpacity style={{marginTop:"4%",marginLeft:"8%",marginRight:"8%"}}>
            <View style={styles.button}>
             <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>   
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius:50,
        paddingVertical: 14,
        paddingHorizontal: 6,
        backgroundColor: "lightgrey"
    
    },
    buttonText:{
        color:"black",
        fontWeight:"bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center"
    }
})

export default Buttonwhite;

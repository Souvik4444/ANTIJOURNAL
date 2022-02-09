import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, TouchableOpacity,Text} from 'react-native';

const Button = ({text}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={{marginTop:"28%",marginLeft:"8%",marginRight:"8%"}} onPress={() => navigation.navigate('Write')}>
            <View style={styles.button}>
             <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>   
    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius:50,
        paddingVertical: 14,
        paddingHorizontal: 6,
        backgroundColor: "black"
    
    },
    buttonText:{
        color:"white",
        fontWeight:"bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center"
    }
})

export default Button;

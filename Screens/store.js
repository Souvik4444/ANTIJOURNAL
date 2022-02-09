import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@slide', jsonValue);
    } catch (e) {
      // saving error
      throw e;
    }
  };
  export const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@slide');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      throw e;
    }
  };
// import React from 'react';
// import {View, StyleSheet} from 'react-native';

// const Store = () => {
//     return (
//         <View>
            
//         </View>
//     );
// }

// const styles = StyleSheet.create({})

// export default Store;

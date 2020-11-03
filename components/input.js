import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const input = props => {
    return <TextInput onChangeText={props.onChangeText} style={styles.input} />
}
const styles = StyleSheet.create({
    input: {
    }
})
export default input
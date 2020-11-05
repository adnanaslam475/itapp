import React from 'react'
import { View, Text, ImageBackground, TextInput, StyleSheet, Image } from 'react-native';


const Events = props => {
    return (
        <View style={styles.main}>
            <ImageBackground style={styles.bgIamge} source={require('../assets/frontScreen.jpeg')} />
            <View style={styles.inputs}>
                <Text style={styles.label} >Email address</Text>
                <TextInput style={styles.TextInput} placeholder='type email...' />
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.TextInput} placeholder='type email...' />
                <Text style={{ marginRight: 15, alignSelf: 'flex-end', fontSize: 20 }}>forget you password?</Text>
            </View>
            <View style={styles.bottomIcon}>
            <Image style={{ width: 30, height: 30, }} source={require('../assets/icons/login_google@2X.png')} />
                <Image style={{ width: 30, height: 30, }} source={require('../assets/icons/login_fb@2X.png')} />
</View>
        </View>
    )
}
Events.navigationOptions = {
    headerTitle: 'EventsScreen'
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        height: '100%',
        flex: 1
    },
    label: {
        fontSize: 22,
    },
    inputs: {
        paddingHorizontal: 5
    },
    bottomIcon: {
        flex: 1,
        
        flexDirection: 'column-reverse'
    },
    bgIamge: {
        width: '100%',
        height: 330,
        borderBottomRightRadius: 10,
        borderBottomEndRadius: 10
    },
    TextInput: {
        margin: 5,
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5
    }
})

export default Events
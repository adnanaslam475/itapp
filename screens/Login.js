import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, TextInput, StyleSheet, Image, Button, } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';


const Login = props => {
    return (
        <View style={styles.main}>
            <ImageBackground style={styles.bgIamge} source={require('../assets/frontScreen.jpeg')} />
            <View style={styles.contaonier}>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name='md-lock' color='black' size={25} />
                    <Text >Email address</Text>
                </View>
                <TextInput style={styles.TextInput} placeholder='type email...' />
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name='md-lock' color='black' size={25} />
                    <Text >Password</Text>
                </View>
                <TextInput style={styles.TextInput} placeholder='type password...' />
                <TouchableOpacity>
                    <Text style={{ marginRight: 15, alignSelf: 'flex-end',color:'blue' }}>forget you password?</Text>
                </TouchableOpacity>
            </View>
            <LinearGradient start={[0.9, 0.9]} style={{ padding: 10, width: 250, alignSelf: 'center' }}
                colors={['#ffff00', '#9fff80', '#39e600']}>
                <TouchableOpacity>
                    <Text style={styles.logintxt} >Login</Text>
                </TouchableOpacity>
            </LinearGradient>
            <View>
                <Text style={{ alignSelf: 'center', }}>Dont have a ccount?
                <TouchableOpacity>
                        <Text style={{ color: 'orange' }}>Sign Up</Text>
                    </TouchableOpacity>
                </Text>
            </View>
            <Text style={{ alignSelf: 'center', bottom: 80, position: 'absolute' }}>or login with</Text>
            <View style={styles.bottomIconView}>
                <TouchableOpacity style={styles.TouchableOpacity}>
                    <Image style={styles.icon}
                        source={require('../assets/images/facebooklogo.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchableOpacity}>
                    <Image style={styles.icon}
                        source={require('../assets/images/googlefaviconvector.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
// Login.navigationOptions = {
//     headerTitle: () => (
//         <Image
//             style={{ width: '100%', height: 900,margin:0 }}
//             source={require('../assets/frontScreen.jpeg')}
//             resizeMode='contain'
//         />)
// }
const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flex: 1,
    },
    btn: {
        width: 200,
        alignSelf: 'center',
    },
    logintxt: {
        color: 'white',
        alignSelf: 'center'
    },
    contaonier: {
        margin: 30
    },
    TouchableOpacity: {
        width: '50%',
        height: 50,
    },
    icon: {
        width: 50,
        alignSelf: 'center',
        height: 50,
    },
    bottomIconView: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        bottom: 0,
        flexDirection: 'row',
        borderTopWidth: 0.5,
    },

    bgIamge: {
        width: '100%',
        height: 100,
        borderBottomRightRadius: 10,
        borderBottomEndRadius: 10
    },
    TextInput: {
        margin: 10,
        paddingVertical: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5
    }
})

export default Login
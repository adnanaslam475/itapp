import React from 'react'
import {
    View, Text, TouchableOpacity, ImageBackground, TextInput,
    StyleSheet, Image, Button, ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'


const SignUp = props => {
    return (
<<<<<<< HEAD
        <div>
            
        </div>
    );
};  
=======
        <View style={styles.main}>
            <ImageBackground style={styles.bgIamge} source={require('../assets/images/signupheader.png')} />
            <View style={styles.contaonier}>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name='md-person' color='black' size={25} />
                    <Text style={styles.label} >Full name</Text>
                </View>
                <TextInput style={styles.TextInput}keyboardType='default' 
                 placeholder='type nmae...' />

                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name='md-lock' color='black' size={25} />
                    <Text style={styles.label}>Email address</Text>
                </View>
                <TextInput style={styles.TextInput}keyboardType='default' placeholder='type Email...' />

                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name='md-paper' color='black' size={25} />
                    <Text style={styles.label} >D.O.B</Text>
                </View>
                <TextInput style={styles.TextInput} placeholder='dob...' />
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name='md-lock' color='black' size={25} />
                    <Text style={styles.label} >Password</Text>
                </View>
                <TextInput style={styles.TextInput}
                // secureTextEntry='true'
                keyboardType='default'
                 placeholder='********' />
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name='md-lock' color='black' size={25} />
                    <Text style={styles.label} >Re-Type Password</Text>
                </View>

                <TextInput style={styles.TextInput}keyboardType='default'
                //  secureTextEntry='true'
                  placeholder='********' />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.label} >phone</Text>
                </View>
                <TextInput style={styles.TextInput} placeholder='********' />
            </View>
            <LinearGradient start={[0.1, 0.9]} style={{ padding: 10, width: 250, alignSelf: 'center' }}
                colors={['#ffff00', '#9fff80', '#39e600']}>
                <TouchableOpacity>
                    <Text style={styles.logintxt} >Login</Text>
                </TouchableOpacity>
            </LinearGradient>
            <View>
                <Text style={{ alignSelf: 'center' }}>Dont have a ccount?
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


    bgIamge: {
        width: '100%',
        height: 250,
        borderBottomRightRadius: 10,
        borderBottomEndRadius: 10
    },
    TextInput: {
        margin: 10,
        paddingVertical: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5
    },
    bottomIconView: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        bottom: 0,
        flexDirection: 'row',
        borderTopWidth: 0.5,
        marginTop:1000,
    },
})

export default SignUp
>>>>>>> ff03eceff3c2a39d1f64efda499c8de244dc8750

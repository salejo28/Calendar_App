import React, { useEffect } from 'react'
import { View, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { Text, Headline, Button } from 'react-native-paper'
import * as Animatable from 'react-native-animatable'

import { styles } from './Styles'
import { Input } from '../../components/Input'

export const Register = ({ navigation }) => {
    //console.log(navigation)

    useEffect(() => {
        
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#8963BA" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <ScrollView>
                    <Headline>Sign Up</Headline>
                    <Input
                        label="Fullname"
                        icon="account"
                        styles={styles.custom_input}
                    />
                    <Input
                        label="Username"
                        icon="account"
                        styles={styles.custom_input}
                    />
                    <Input
                        type="email"
                        label="Email"
                        styles={styles.custom_input}
                    />
                    <Input
                        type="password"
                        label="Password"
                        styles={styles.custom_input}
                    />
                    <Button
                        mode="contained"
                        icon="account-plus"
                        style={styles.button}
                        dark={true}
                        loading={false}
                        contentStyle={{
                            flexDirection: 'row-reverse'
                        }}
                        labelStyle={{
                            fontSize: 16.5
                        }}
                    >
                        Sign Up
                    </Button>
                    <View style={styles.container_question}>
                        <Text style={styles.text}>You already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text
                                style={{ ...styles.text, ...styles.link, marginLeft: 10 }}                                
                            >Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    )
}
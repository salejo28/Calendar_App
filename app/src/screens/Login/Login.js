import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, Headline, Checkbox, Button } from 'react-native-paper'
import * as Animatable from 'react-native-animatable'
import { StatusBar } from 'expo-status-bar'

import { styles } from './Styles'
import { Input } from '../../components/Input'

export const Login = ({ navigation }) => {

    const [checked, setChecked] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    useEffect(() => {
        return () => {
            
        }
    }, [])

    const switchPassword = () => setShowPassword(!showPassword)

    const onChangeText = (value, type) => {
        if (type === 'email') return setEmail(value)
        if (type === 'password') return setPassword(value)
    }

    const onSubmit = () => {
        console.log(email, password)
        navigation.navigate('Tab')
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#8963BA" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Headline>Sign In</Headline>
                <Input
                    type="email"
                    label="Email"
                    styles={styles.custom_input}
                    onChangeText={onChangeText}
                />
                <Input
                    type="password"
                    label="Password"
                    styles={styles.custom_input}
                    showPassword={showPassword}
                    onPressIcon={switchPassword}
                    onChangeText={onChangeText}
                />
                <View style={styles.container_check}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        color="#90C290"
                        onPress={() => setChecked(!checked)}
                    />
                    <Text style={styles.text_check}>Remember me</Text>
                </View>
                <Button
                    mode="contained"
                    icon="login"
                    style={styles.button}
                    dark={true}
                    loading={false}
                    contentStyle={{
                        flexDirection: 'row-reverse'
                    }}
                    labelStyle={{
                        fontSize: 16.5
                    }}
                    onPress={onSubmit}
                >
                    Sign In
                </Button>
                <View style={styles.container_question}>
                    <Text style={{ ...styles.text, ...styles.link }}>Fogotten Password?</Text>
                </View>
                <View style={styles.container_question}>
                    <Text style={styles.text}>You don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text
                            style={{ ...styles.text, ...styles.link, marginLeft: 10 }}
                            
                        >Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}
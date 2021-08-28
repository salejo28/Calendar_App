import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'

export const Input = ({ type, label, onChangeText, icon, value, showPassword, onPressIcon, styles }) => {

    if (type === 'password') return <InputPassword 
        label={label} 
        onChangeText={onChangeText}  
        value={value}
        styles={styles}
        onPressIcon={onPressIcon}
        showPassword={showPassword}
    />

    if (type === 'email') return (
        <TextInput 
            label={label}
            right={<TextInput.Icon name="email" color="#90C290" />}
            onChangeText={e => onChangeText(e, 'email')}
            keyboardType="email-address"
            autoCapitalize="none"
            style={{...nativeStyles.input, ...styles}}
            blurOnSubmit={true}
            value={value}
        />
    )

    return <TextInput 
        label={label}
        right={<TextInput.Icon name={icon} color="#90C290" />}
        onChangeText={e => onChangeText(e, 'email')}
        style={{...nativeStyles.input, ...styles}}
        blurOnSubmit={true}
        value={value}
    />

}

const InputPassword = ({ showPassword, onPressIcon, onChangeText, value, label, styles }) => {
    if (showPassword) return <TextInput
        label={label}
        right={<TextInput.Icon color="#90C290" onPress={onPressIcon} name="eye" />}
        onChangeText={e => onChangeText(e, 'password')}
        mode="outlined"
        autoCapitalize="none"
        style={{...nativeStyles.input, ...styles}}
        value={value}
    />

    return <TextInput
        label={label}
        onChangeText={e => onChangeText(e, 'password')}
        secureTextEntry
        right={<TextInput.Icon color="#90C290" onPress={onPressIcon} name="eye-off" />}
        style={{...nativeStyles.input, ...styles}}
        value={value}
    />
}

const nativeStyles = StyleSheet.create({
    input: {
        backgroundColor: 'transparent'
    }
})
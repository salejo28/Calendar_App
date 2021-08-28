import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export const Header = (props) => {
    return (
        <View style={styles.container_header}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container_header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#8963BA',
        flexDirection: 'row'
    },
    img: {
        width: 300,
        height: 100,
        resizeMode: 'cover'
    }
})
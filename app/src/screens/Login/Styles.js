import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8963BA',
        flex: 1
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    custom_input: {
        marginTop: 20
    },
    container_check: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text_check: {
        fontSize: 17,
        fontWeight: "500"
    },
    button: {
        marginTop: 20
    },
    container_question: {
        marginTop: 15,
        flexDirection: 'row'
    },
    text: {
        fontSize: 18
    },
    link: {
        color: "#8963BA"
    }
})
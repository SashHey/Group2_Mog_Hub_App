import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    logo: {
        width: 350,
        height: 350,
        paddingTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },

    mainTxt: {
        paddingTop: 50,
        color: 'green',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },

    slogan: {
        color: 'orange',
        fontSize: 20,
        textAlign: 'center'
    },

    inputFlex: {
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'space-evenly'
    },

    enterTxt: {
        fontWeight: 'bold'
    },

    userInputTxt: {
        borderBottomWidth: 1
    },

    radioContainer: {
        flex: 0,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },

    radioGroup: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 15,
        elevation: 5,
        shadowColor: 'grey',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },

    radioBtn: {
        flexDirection: 'column',
        alignItems: 'center'
    },

    radioLabel: {
        marginLeft: 5,
        fontSize: 15,
        color: 'black'
    }
})

export default styles;
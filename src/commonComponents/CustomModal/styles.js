import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get("window").width;

export default StyleSheet.create({

    modalParent: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalEmpty: {
        flex: 1,
        width: '100%',
        height: '100%',
        position:'absolute'
    },
    modalView: {
        width: width * 0.77,
        height: width * 0.77,
        backgroundColor: '#fff',
        borderRadius: 20 
    },

    closeBtn: {
        position: 'absolute',
        top: 10,
        right: 20,
        zIndex: 2
    },

    closeIcon: {
        fontSize: 44,
        color: '#979797',
    }

})
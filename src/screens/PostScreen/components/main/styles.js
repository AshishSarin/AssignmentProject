import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginHorizontal: 4,
        fontSize: 8,
        flex: 1,
        flexWrap: 'wrap',
        textAlign: 'center',
    },

    header: {
        paddingHorizontal: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 42,
        backgroundColor: 'green',
        alignItems: 'center'
    },
    postList: {
        marginVertical: 20,
    },
    separator: {
        height: 10,
        backgroundColor: 'white'
    }
})
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 42,
        backgroundColor:'#c8c7c3',
        alignItems: 'center'
    },

    title: {
        flex: 1,
        flexWrap: 'wrap',
        textAlign: 'center',
        fontSize: 8,
    },
    url: {
        marginHorizontal: 4,
        minWidth: 90,
        flex: 1,
        fontSize: 8,
        textAlign: 'center',
    },
    created_at: {
        marginHorizontal: 4,
        fontSize: 8,
        flex: 1,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    author: {
        marginHorizontal: 4,
        fontSize: 8,
        flex: 1,
        flexWrap: 'wrap',
        textAlign: 'center',
    }
})

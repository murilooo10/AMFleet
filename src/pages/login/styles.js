import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#EBF6FF',
        padding: 20,
        
    },


    input: {
        height: 60,
        backgroundColor:'#fff',
        borderRadius: 8,
        alignSelf: 'stretch',
        borderColor: '#eee',
        borderWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    
    button: {
        height: 60,
        backgroundColor:'#4f8cff',
        borderRadius: 8,
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
});
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBF6FF',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 24,
    },
    header:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:70,
    },
    body:{
        justifyContent: 'center',
        alignItems: 'center'
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
        marginTop: 20,
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonCadastro:{
        height: 60,
        backgroundColor:'#00cc00',
        marginTop: 15,
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
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 24,
        backgroundColor: '#EBF6FF',
    
    },

    imagem: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 20,
        color: '#13131a',
        fontWeight: 'bold'
    },

    homeList: {
        marginTop: 20,
        paddingRight: 16,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },

    home:{
        padding: 16,
        borderRadius: 8,
        backgroundColor:'#fff',
        marginBottom: 16,
        marginRight: 16,
        width:'50%',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:1,
        },
        shadowOpacity:0.22,
        shadowRadius:0.22,
        elevation:3,
    },
    iconCenter:{
        textAlign:'center'
    },

    vehicleProperty: {
        fontSize: 14,
        color:'#41414d',
        fontWeight:'bold'
    },

    vehicleValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    }
});
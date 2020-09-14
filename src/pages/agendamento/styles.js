import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#EBF6FF'
        
    },

    header: {
        flexDirection:'row',
        justifyContent: 'space-between', //space-between
        alignItems: 'center'
    },

    headerText: {
        fontSize:15,
        color:'#737380'
    },

    headerTextBold: {
        fontWeight:'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },

    vehicleList: {
        marginTop: 32,
    },

    vehicle:{
        padding: 24,
        borderRadius: 8,
        backgroundColor:'#fff',
        marginBottom: 16,
    },

    vehicleProperty: {
        fontSize: 16,
        color:'#41414d',
        fontWeight:'bold'
    },

    vehicleValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
    },

    detailsButtonText: {
        color: '#4f8cff',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

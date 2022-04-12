import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const CustomDrawer=(props)=>{
    return(
        <View style={styles.container}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"#FEF5E7"}}>
            <ImageBackground source={require('../assets/image/menu-bg.jpg')} style={styles.drawerBackGround}>
                <Image source={require('../assets/image/user-profile.jpg')} style={styles.imageProfile}/>
                <Text style={styles.textNom}>Nom</Text>
                <Text style={styles.textCategorie}>Categorie</Text>
            </ImageBackground>
            <View style={styles.listScreen}>
            <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
      },
    
    drawerBackGround:{
        padding:20,
    },

    imageProfile:{
        height:80,
        width:80,
        borderRadius:40,
        marginBottom:10,
    },

    textNom:{
        fontSize:18,
        fontFamily:'SFMedium'
    },

    textCategorie:{
        fontFamily:'SFMedium'
    },

    listScreen:{
        backgroundColor:"#FFF",
        flex:1,
        paddingTop:10
    }
})
export default CustomDrawer
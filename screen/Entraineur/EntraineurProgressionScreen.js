import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Dimensions, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const EntraineurProgressionScreen = (props) => {

  const openMenu = () => {
    props.navigation.openDrawer();
  }

  return(
  <SafeAreaView style={styles.container}>

    <View style = {styles.Header}>
        <View style={styles.BlockHamburgerMenu}>
          <TouchableOpacity onPress={openMenu}>
            <FontAwesome5 name="bars" size={24} color='lightgrey' />
            
          </TouchableOpacity>
        </View>
        <View style = {styles.BlockTextAccueil}>
          <Text style = {styles.TextAccueil}>Progression</Text>
        </View>
    </View>
    <View style={styles.pageContenu}>
    </View>
  </SafeAreaView>
  );
};

//Fonction styles contenur le design en CSS
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#013E23',
    padding: 10,
    paddingBottom:86.5,
  },

  Header: {
    marginTop:30,
    marginBottom:10,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center'
  },

  BlockHamburgerMenu:{
    left: -80,
    },

 BlockTextAccueil: {
  alignItems:'center',
  },

  TextAccueil:{
    fontFamily: 'SFMedium',
    fontSize:20,
    color:'lightgrey',
    flexDirection: 'row'
  },
  pageContenu:{
    backgroundColor:'white',
    width:'100%',
    height:'100%',
    borderRadius:40,
  },

})

export default EntraineurProgressionScreen;
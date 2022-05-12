import React, { Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import { FontAwesome5 } from "@expo/vector-icons";
import { LogBox } from "react-native";
import Seance from '../class/CSeance';
import Information from '../class/CInformation';
import Login from '../class/CLogin';

var nouvelleSeance = new Seance();

    
var ConnexionUser = Login.getInstance();
var information = ConnexionUser.getInformationJoueur();


export default class EntraineurSeanceScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selectEntraineur:'',
          entraineurSeance: information.nom,
          dateSeance: '',
          categorie:'',
          zoneDeTir:'',
       };
      }

    openMenu = () => {this.props.navigation.openDrawer();}
    
created() {
    LogBox.ignoreLogs([
      'DatePickerIOS has been merged with DatePickerAndroid and will be removed in a future release.',
      'StatusBarIOS has been merged with StatusBar and will be removed in a future release.',
      'DatePickerAndroid has been merged with DatePickerIOS and will be removed in a future release.',
    ]); 
  }


  creationSeance = () => {
    nouvelleSeance.creationSeance(this.state.entraineurSeance, this.state.dateSeance, this.state.categorie, this.state.zoneDeTir);
  }


  render(){



  return(
  <SafeAreaView style={styles.container}>

    <View style = {styles.Header}>
        <View style={styles.BlockHamburgerMenu}>
          <TouchableOpacity onPress={this.openMenu}>
            <FontAwesome5 name="bars" size={24} color='lightgrey' />
          </TouchableOpacity>
        </View>
        <View style = {styles.BlockTextAccueil}>
          <Text style = {styles.TextAccueil}>Séance</Text>
        </View>
    </View>
    <View style={styles.pageContenu}>
        <View style={styles.blockCreationSeance}>

          <View style={styles.blockSeance}>

            <Text style={styles.textCreationSeance}>Nom de l'entraineur : </Text>
            <Text style={styles.textNomEntraineur}>{this.state.entraineurSeance}</Text>

          </View>
          <View style={styles.blockSeance}>
            <Text style={styles.textCreationSeance}>Date de la séance : </Text>

            <DatePicker
              style={{width: 200}}
              date={this.state.dateSeance}
              mode="date"
              placeholder="selectionner la date"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
          // ... You can check the source to find the other keys.
        }}
              onDateChange={dateSeance => {this.setState({dateSeance})}}
              />
          </View>

          <View style={styles.blockSeance}>
            <Text style={styles.textCreationSeance}>Categorie : </Text>
          </View>
            <View style={styles.blockSeance}>
              <Text style={styles.textCreationSeance}>Zone de tir : </Text>
            </View>
        </View>
    </View>
  </SafeAreaView>
  );
 };
}
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
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },

  BlockHamburgerMenu:{
    left:-100,
    },

 BlockTextAccueil: {
  alignItems:'center',
  },

  TextAccueil:{
    fontFamily: 'SFMedium',
    fontSize:20,
    color:'lightgrey',
    flexDirection: 'row',
  },

  pageContenu:{
    backgroundColor:'white',
    width:'100%',
    height:'100%',
    borderRadius:40,
  },

  blockCreationSeance:{
    padding:20,
  },

  textCreationSeance:{
    fontFamily: 'SFBold',
    fontSize:20,
    
  },

  blockSeance:{
    flexDirection:'row',
    padding:10,
  },

  textNomEntraineur:{
    fontFamily: 'SFMedium',
    fontSize:20,
    textAlign: "center",
    justifyContent: "center",
  },

})
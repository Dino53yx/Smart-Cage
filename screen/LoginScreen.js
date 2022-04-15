import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, TouchableOpacity, Image, TextInput, StatusBar} from 'react-native';
import getNativeComponentAttributes from 'react-native/Libraries/ReactNative/getNativeComponentAttributes';
import Login from '../class/CLogin';

/*Création de l'ecran LoginScreen qui consistera à logger/identifier les tulisateurs */

var userConnexion = new Login(); 

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username : '',
          userPassword : '',
        };
      }

    /* Rendu de l'écran */
    render(){
    return(
    <SafeAreaView style={styles.container}>
      <View style={styles.Logo}>
        <Image
          source={require('../assets/image/logo1.png')}
        />
      </View>
      <View style={styles.usernameBlock}>
        <TextInput style={styles.usernameText}
        placeholder="Nom d'utilisateur"
        autoCapitalize='none'
        onChangeText={username => this.setState({username})}
        />
      </View>
  
      <View style={styles.passwordBlock}>
        <TextInput style={styles.passwordText} 
        placeholder="Mot de passe" 
        secureTextEntry={true}
        autoCapitalize='none'
        onChangeText={userPassword => this.setState({userPassword})}
        />
      </View>
  
      <View>
      <TouchableOpacity style={styles.BoutonConnexion} 
      onPress={this.connexion}>
          <Text style = {styles.BoutonText}>Connexion</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>   
    );
  };

  connexion = async() => {
    await userConnexion.login(this.state.username, this.state.userPassword);

   var userInformation = userConnexion.getInformationJoueur();


    if(userInformation.type == "entraineur"){
      this.props.navigation.navigate('EntraineurInterface');
    }
    else if(userInformation.type == "joueur"){
      this.props.navigation.navigate('JoueurInterface');
    }
    else{
      alert("Reessayer");
      console.log(userType);
    }

  }
 
}
  /*Fin Ecran LoginScreen */
  
  //Fonction styles contenur le design en CSS
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      backgroundColor:'#013E23'
    },
  
    Logo: {
      top:80,
    },
  
    usernameBlock: {
      marginTop:200,
      alignItems:'center',
      justifyContent:'center'
    },
  
    usernameText: {
      padding:10,
      justifyContent:'center',
      width:200,
      height:50,
      fontSize:20,
      borderRadius:20,
      backgroundColor:"#FFF",
      fontFamily: 'SFMedium',
      textAlign:'center'
    },
  
    passwordBlock: {
      top:20,
    },
  
    passwordText: {
      fontFamily: 'SFMedium',
      padding:10,
      justifyContent:'center',
      width:200,
      height:50,
      fontSize:20,
      borderRadius:20,
      backgroundColor:"#FFF",
      textAlign:'center'
    },
  
    BoutonConnexion: {
      top:100,
      width:200,
      height:50,
      borderRadius:20,
      backgroundColor:"#39AD69",
      alignItems:"center",
      justifyContent:"center"
  
    },
  
    BoutonText: {
      fontSize: 20,
      fontFamily: 'SFMedium',
    }
  
  })
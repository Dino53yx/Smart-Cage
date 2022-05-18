import { Component } from 'react';

export default class Seance extends Component {
    constructor(props) {
        super(props);
      }

        creationSeance = async(p_selectEntraineur='', p_dateSeance= '', p_categorie='', p_zoneDeTir='', p_joueurSelectionne='') => {
            var selectEntraineur = p_selectEntraineur;
            var dateSeance = p_dateSeance;
            var categorie = p_categorie;
            var zoneDeTir = p_zoneDeTir;
            var joueurSelectionne = p_joueurSelectionne;

            await fetch('http://192.168.231.127:80/php/mobile_api/connexion_api.php',{
            method:'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                entraineur: selectEntraineur,
                dateSeance: dateSeance,
                categorie: categorie,
                zoneDeTir: zoneDeTir,
                joueurSelectionne : joueurSelectionne,
            })
          })
          .then((Response) => Response.json())
          .then((ResponseJson)=>{
              information = ResponseJson;
              console.log(information);
          })
          .catch((error)=>{
              console.error(error);
          })
      }

    
}
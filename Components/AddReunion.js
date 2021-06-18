import React from 'react'
import data from '../data/data'
import { Header } from 'react-native-elements'
import {StyleSheet, Button,Text ,View, TextInput} from 'react-native'
import Home from './Home'

class AddReunion extends React.Component{

    constructor(props) {
    super(props)
    this.navigation=props.navigation
        
         // Initialisation de notre donnée searchedText en dehors du state
        this.state = {
         date:'',
         lieu:'',
         sujet:'',
         liste:'',
         bloqueur:true
        
        }
        
      }
      _navigationAdd(){
        this.navigation.navigate('AddReunion')
      }
      _navigationHome(){
        this.navigation.navigate('Home')
      }
      save() {
        // Simple POST request with a JSON body using fetch
        
        if(this.state.date.length>0 && this.state.lieu.length>0 && this.state.sujet.length>0 &&this.state.liste.length>0  ){
            
            fetch("https://demo6254247.mockable.io/reunion", {method: "POST",headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
  body: JSON.stringify(
    {
        id:3,heure:this.state.heure,lieu:this.state.lieu, sujet:this.state.sujet,liste:this.state.liste
    }
    )
    })
    .then((response) => response.json)
    .then((responseData) => {
   console.log(responseData)
    })
     }
        
        
    }
      changeDate(date){
          this.state.date=date
      }
      changeLieu(lieu){
        this.state.lieu=lieu
    }
    changeSujet(sujet){
        this.state.sujet=sujet
    }
    changeListe(liste){
        this.state.liste=liste
    }
    
    

    render(){
        return(
            <View>
                <Header
                    leftComponent={{ icon: 'home', color: '#fff',onPress:(()=>this._navigationHome()) }}
                    centerComponent={{ text: 'MA REUNION', style: { color: '#fff' },onPress:(()=>this._navigationHome())  }}
                    rightComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' },}}
                />
                <View style={{marginTop:70}} >
                <Text style={styles.title}>Nouveau Reunion</Text>
                <TextInput style={styles.sujet}  placeholder=" Entrer le Sujet"  
                onChangeText={(text) => this.changeSujet(text)}
                />
                <View style={{flexDirection: 'row'}}>
                    <TextInput style={styles.heure}  placeholder=" Entrer l'heure"  
                    onChangeText={(text) => this.changeDate(text)}
                    />
                    <TextInput style={styles.lieu}  placeholder=" Entrer le lieu" 
                     
                    onChangeText={(text) => this.changeLieu(text)}
                    />
                </View>
                <TextInput  style={styles.liste} placeholder=" Entrer la liste des Participants"  
                onChangeText={(text) => this.changeListe(text)}
                multiline = {true}
                numberOfLines = {4}
                />
                <View style={styles.save}><Button title="Save" onPress={()=>this.save()}  /></View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        height:90
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16,
        color:'#056BB3',
        textAlign:'center',
    },
    container1:{
        flex: 1
    },
    sujet:{
        borderWidth:2,
        borderColor:'#056BB3',
        margin:10    
    },
    heure:{
        borderWidth:2,
        borderColor:'#056BB3',
        width:100,
        margin:10,
        marginRight:50  
    },
    lieu:{
        borderWidth:2,
        borderColor:'#056BB3',
        width:180,
        margin:10  
    },
    liste:{
        borderWidth:2,
        borderColor:'#056BB3',
        margin:10
    },
    save:{
        margin:10
    }
})
export default AddReunion
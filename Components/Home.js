import React from 'react'
import {View,FlatList, ScrollView, TouchableOpacity,Text } from 'react-native'
import { Header } from 'react-native-elements'
import data from '../data/data'
import ListReunion from './ListReunion'
import { Icon } from 'react-native-elements'
import AddReunion from './AddReunion'
 



class Home extends React.Component{
    
    constructor(props) {
        super(props)
        this.navigation = props.navigation
        this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
        this.state = {
          reunion: []
        }
      }
      
      componentDidMount(){
    
        fetch("https://demo6254247.mockable.io/reunion")
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
            reunion: responseJson
          })
        })
        .catch(error => console.log(error)) //to catch the errors if any
      }
      _navigationAdd(){
        this.navigation.navigate('AddReunion')
      }
      _navigationHome(){
        this.navigation.navigate('Home')
      }


    render(){
        return(
            <View style={{flex:1}}>
                <ScrollView>
                    <Header
                    
                    leftComponent={{ icon: 'home', color: '#fff' }}
                    centerComponent={{ text: 'MA REUNION', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' },}}
                />
                <FlatList
                        data={this.state.reunion}
                        //Identifier les items de maniere unique
                        keyExtractor={(item) =>item.id.toString()}
                        renderItem={({item}) => <ListReunion reunion={item}/>}
                        
                />
                </ScrollView>
                <TouchableOpacity >
                    <Text style={{textAlign:'right'}}>
                        <Icon  
                        
                        onPress={()=>this._navigationAdd()}
                            name='plus-circle'
                            type='font-awesome'
                            color= '#BB0B0B' 
                            size={90}
                               
                        /></Text>
                </TouchableOpacity>
                
                
            </View>
            
        )
    }
}



export default Home
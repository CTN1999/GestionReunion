import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'



class ListReunion extends React.Component{
    _delete(id){
        fetch('https://demo6254247.mockable.io/reunion/'+id, { method: 'DELETE' }).then((response) => response.json)
        .then((responseData) => {
       console.log(responseData)
        })
        .catch((error) => console.error(error))
    }
    render(){
        const reunion = this.props.reunion
        return(
        
                <View style={styles.main_container}>
                    <View style={styles.icon_mail_container}>
                        <Icon style={styles.icon_mail}  
                            name='user-plus'
                            type='font-awesome'
                            color= '#74D0F1'
                            size={40}
                            onPress={()=>this._delete(reunion.id)}
                        />
                    </View>
                    <TouchableOpacity style={styles.text_container}>
                            <Text style={styles.title_text} >
                                Reunion{reunion.id} -{reunion.heure}-{reunion.lieu}
                            </Text>
                            <Text style={styles.other_text} numberOfLines={1}>
                                {reunion.liste}
                            </Text>
                    </TouchableOpacity>
                    <View style={styles.icon_delete_container}>
                        <Icon  
                            style={styles.icon_delete}
                            name='trash'
                            type='font-awesome-5'
                            size={35}
                        />
                        </View>
                </View>
               
                    
           
           
            
        )
    }
} 

const styles = StyleSheet.create({
    main_container: 
    {
        height: 60,
        flexDirection: 'row',
        margin:7

    },
    icon_mail_container: 
    {
        flex: 1,
      margin: 3
    },
    icon_delete_container: 
    {
        flex: 1,
      margin: 3
    },
    text_container:
    {
        flex:4,
        margin:0
    },
    icon_mail:
    {
       
        marginTop:0
    },
    icon_delete:
    {
        
        marginTop:0
    },
    title_text: 
    {
        fontWeight: 'bold',
        fontSize: 16,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 2
      },
    other_text:{
        fontSize: 12,
        flex: 1,
      }
    




  })
export default ListReunion
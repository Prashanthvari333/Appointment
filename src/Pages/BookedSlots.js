import { StyleSheet, Text, View ,TouchableOpacity,Button,TextInput} from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BookedSlots = () => {
  return (
    <View style={styles.container} >
       < View style={styles.patient }>
            <TouchableOpacity>
                <Text>Patient1</Text>
            </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="done" size={30} color="green" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="close" size={30} color="red" />
          </TouchableOpacity>
          
      </View>
      < View style={styles.patient }>
            <TouchableOpacity>
                <Text>Patient2</Text>
            </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="done" size={30} color="green" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="close" size={30} color="red" />
          </TouchableOpacity>
          
      </View>
      < View style={styles.patient }>
            <TouchableOpacity>
                <Text>Patient3</Text>
            </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="done" size={30} color="green" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="close" size={30} color="red" />
          </TouchableOpacity>
          
      </View>
      < View style={styles.patient }>
            <TouchableOpacity>
                <Text>Patient4</Text>
            </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="done" size={30} color="green" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="close" size={30} color="red" />
          </TouchableOpacity>
          
      </View>
      < View style={styles.patient }>
            <TouchableOpacity>
                <Text>Patient5 </Text>
            </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="done" size={30} color="green" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="close" size={30} color="red" />
          </TouchableOpacity>
          
      </View>
      < View style={styles.patient }>
            <TouchableOpacity>
                <Text>Patient6 </Text>
            </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="done" size={30} color="green" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="close" size={30} color="red" />
          </TouchableOpacity>
          
      </View>
      < View style={styles.patient }>
            <TouchableOpacity >
                <Text>Patient7 </Text>
            </TouchableOpacity>
          <TouchableOpacity >
            <Icon name="done" size={30} color="green" />
          </TouchableOpacity>
          <TouchableOpacity  >
            <Icon name="close" size={30} color="red" />
          </TouchableOpacity>
          
      </View>
     
    </View>
  )
}

export default BookedSlots

const styles = StyleSheet.create({
    container :{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
    },
    patient :{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        
    }
})
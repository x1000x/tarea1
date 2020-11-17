
import React from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  Image
} from 'react-native';


const App = () => {
  return (
    <>
    <View style={styles.contenedorPrincipal}>

      <View style={styles.header}>
        <View>
          <Text style={styles.nombre}> Fabian Alvarez</Text>
          <Text style={styles.edad}> 38</Text>
        </View>
        <View>
          <Image
            style={{
              width:80,
              height:80,
              borderRadius:100
            }} 
            source = {{uri: 'https://picsum.photos/seed/picsum/200'}}            
            />
        </View>
      </View>

      <View style={styles.contenedorCentro}>
        <Text style={styles.titulos}>Bio:</Text>
        <Text>Desarrollador Informático:</Text>
      </View> 

      <View style={styles.contenedorFinal}>
       <Text style={styles.titulos} >Descripción</Text>
       <View style={styles.textos}>         
          <View style={styles.parrafos}>
              <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              </Text>
          </View>
          <View style={styles.parrafos}>
              <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              </Text>
          </View>
       </View>
      </View>
    </View>

      
    </>
  );
};

const styles = StyleSheet.create({
  contenedorPrincipal:{
    backgroundColor:'#95a6a6',
    paddingHorizontal:20
  },
  header:{   
    display:'flex',
    flexDirection:"row",
    justifyContent:'space-between',
    paddingTop:10
    
  },
  nombre:{
    fontSize:24,
    color:'white'
  },
  edad:{
    color:'white'
  },
  contenedorCentro:{
    marginVertical:20
  }, 
  titulos:{
    marginBottom:10
  },
contenedorFinal:{
  paddingBottom:10
}, 
textos:{
  display:'flex',
  // flex: 0.5,
  flexDirection:"row",
  justifyContent:'space-between',
},
parrafos:{
  flex:0.5,

},
  




});

export default App;

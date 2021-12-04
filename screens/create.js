import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView,  } from 'react-native';
import { Header,Image } from 'react-native-elements';
//import db from '../config'

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Image1: require('../assets/eye1.png'),
      Image2: require('../assets/eye2.png'),
      Image3: require('../assets/eye3.png'),
    };
  }
  nosefunction = () =>{
    this.setState({
      Image1: require('../assets/nose1.png'),
      Image2: require('../assets/nose2.png'),
      Image3: require('../assets/nose3.png')
    });
    
  }

  eyefunction= () => {
    this.setState({
      Image1: require('../assets/eye1.png'),
      Image2: require('../assets/eye2.png'),
      Image3: require('../assets/eye3.png')
    });
  }

  lipfunction= () => {
    this.setState({
      Image1: require('../assets/lip1.png'),
      Image2: require('../assets/lip2.png'),
      Image3: require('../assets/lip3.png')
    });
  }

  bodyfunction= () => {
    this.setState({
      Image1: require('../assets/body1.jpeg'),
      Image2: require('../assets/body2.gif'),
      Image3: require('../assets/body3.jpeg')
    });
  }

  render() {
    return (
      <ScrollView>

        <View>

          <Header containerStyle={{ backgroundColor: 'black', height: 70, }}
            centerComponent={{ text: 'CREATE', style: { color: '#fff', fontSize: 30, fontWeight: 'bold' } }}
            rightComponent={{ icon: 'add-circle', color: '#fff', style:{marginTop: 10} }}
          />



           <View>

            <View>
            
            
               <TextInput
                placeholder="Name Of The Toy"
                style={styles.name}
                onChangeText={Name => { this.setState({ Name: Name }) }}
              />


              <Text>{this.state.Name}</Text> 

            </View>



            <View style={styles.featureButton}>

              <View style={styles.featureButtonContainer}>

                <Text style={{ fontSize: 20, borderRadius: 30, borderWidth: 2, borderStyle: 'solid', width: '100%', alignContent: 'center', justifyContent: 'center', padding: 1 }} > BODY PARTS</Text>

                <TouchableOpacity
                  style={styles.createText}
                  onPress={this.eyefunction}>
                  <Text>Eyes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.createText}
                  onPress={this.nosefunction}>
                  <Text>Nose</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.createText}
                  onPress={this.bodyfunction}>
                  <Text>Body Shape</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.createText}
                  onPress={this.lipfunction}>
                  <Text>Lips</Text>
                </TouchableOpacity>

              </View>



              <View style={styles.featureButtonContainer}>

                <Text
                  style={styles.featureText} > FEATURES</Text>


                <TouchableOpacity
                  style={styles.createText2}>
                 <Image source={this.state.Image1} style={styles.Image} />
                </TouchableOpacity>


                <TouchableOpacity
                  style={styles.createText2}>
                  <Image source={this.state.Image2} style={styles.Image} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.createText2}>
                  <Image source={this.state.Image3} style={styles.Image}/>
                </TouchableOpacity>

              </View>

            </View>




            <TouchableOpacity
              style={styles.button2}>
              <Text>PUBLISH</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button1} >
              <Text>SAVE</Text>
            </TouchableOpacity>



          </View> 

        </View>

      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    marginTop: 0,
    width: '40%',
     marginLeft: '50%',
    // height: '30%',
     borderWidth: 1,

  },
  button2: {
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems:'center',
    width: 80,
    height: 50,
    padding: 10,
    marginLeft: '20%',
    marginTop: 40,
    borderRadius: 20,
    flex: 1

  },
  button1: {
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 50,
    padding: 10,
    marginLeft: 550,
    marginTop: -40,
    borderRadius: 20,
    flex: 1

  },
  createText: {
    marginTop: '40%',
    fontSize: 20,
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 20,

  },
  featureButtonContainer: {
    flexDirection: 'column'
  },
  featureButton: {
    flexDirection: 'row',
    marginLeft: '-70%',
    marginTop: '2%',
    fontSize: 20,
    justifyContent: 'center',
  },
  createText2: {
    marginTop: '40%',
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginLeft: '150%'
  },
  featureText: {
    marginLeft: '150%',
    fontSize: 20,
    borderRadius: 30,
    borderWidth: 2,
    borderStyle: 'solid',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 150 ,
  },

});
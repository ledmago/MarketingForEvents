import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  Alert,

} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import Story from 'react-native-story'
import { MonoText } from '../components/StyledText';
import TextTicker from 'react-native-text-ticker'
import Header from '../components/Header';
import Menu, { MenuItem, MenuDivider, Position } from "react-native-enhanced-popup-menu";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { CheckBox } from 'react-native-elements';
import Ripple from 'react-native-material-ripple';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardAvoidingView } from 'react-native';

class Etkinlikler extends React.Component {
  constructor(props) {
    super(props);



  }

  state = {
    username: '',
    password: '',
    buttonLoading: false,
    buttonText: true,
    beniHatirla: true,
  }



  static navigationOptions = {

    header: null,
    headerMode: 'none',
  };



  

  render() {
    let textRef = React.createRef();
    let menuRef = null;

    const setMenuRef = ref => menuRef = ref;
    const hideMenu = () => menuRef.hide();
    const showMenu = () => menuRef.show(textRef.current, stickTo = Position.TOP_RIGHT);

    const onPress = () => showMenu();
    const state = this.state;
    return (

      <View style={styles.container}>

        <Header props2={this.props} onlyTabBar={true} />

        <ScrollView

          contentContainerStyle={styles.contentContainer}>
          <View style={styles.tableContent}>

            <View style={styles.ContainerX}>
              <View style={{ flexDirection: 'row', marginTop: 40 }}>



                <TextInput
                  style={styles.TextInputs}
                  onChangeText={(username) => this.setState({ username })}
                  value={this.state.username}
                  autoCompleteType='username'
                  placeholder='Kullanıcı Adı'
                  placeholderTextColor='#444'
                /></View>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>



                <TextInput
                  style={styles.TextInputs}
                  onChangeText={(password) => this.setState({ password })}
                  value={this.state.password}
                  autoCompleteType='password'
                  placeholder='Şifre'
                  placeholderTextColor='#444'
                  secureTextEntry={true}
                />


              </View>



              <CheckBox
                title='Beni Hatırla'
                checked={this.state.beniHatirla}
                onPress={() => { this.setState({ beniHatirla: !this.state.beniHatirla }) }}
                textStyle={{ color: '#FFF', fontSize: 15, fontWeight: '400' }}
                containerStyle={{ width: 75 + '%', backgroundColor: 'transparent', border: 0, borderColor: 'transparent', color: '#FFF' }}
              />


              <Ripple onPress={() => this._signInAsync()}

                style={styles.GirisButton} rippleDuration={300}>
                {this.state.buttonLoading &&
                  <ActivityIndicator size={30} color='#4E4EA5' style={styles.ButtonLoading}></ActivityIndicator>
                }
                {this.state.buttonText &&
                  <Text style={styles.ButtonText}>Giriş</Text>
                }
              </Ripple>
              <View style={{ width: 75 + '%', alignItems: 'flex-start', marginTop: 20,alignSelf:'center' }}>
                <TouchableOpacity style={{ width: 100 + '%', }}><Text style={{ fontSize: 14, color: '#EBEBEB',textAlign:'center' }}>Şifremi Unuttum</Text></TouchableOpacity>

                <Ripple onPress={() => alert('Kardeşimm !!')}

                  style={styles.isletmeButton} rippleDuration={300}>
                  <Text style={styles.ButtonTextIsletme}>İşletmeler İçin</Text>
                </Ripple>


              </View>



            </View>
          </View>


        </ScrollView>

        <View style={{ position: 'absolute', bottom: 0, height: 20, width: 100 + '%', backgroundColor: '#121212' }}>
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, opacity: 0.2, }}></View>
          <Text style={{ fontSize: 10, color: '#EBEBEB', textAlign: 'center', lineHeight: 20 }}>Tüm Haklarımız Saklıdır</Text>
        </View>




      </View>
    );
  }
}




Etkinlikler.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  
  ContainerX:
  {
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    height: 60 + '%',
    width: 100 + '%',
    marginTop: 25,
  },
  TextInputPreText:
  {
    color: '#444',
    textAlign: 'center',
    fontSize: 25,
    justifyContent: 'center',
    width: 100 + '%'
  },
  TextInputPre:
  {

    backgroundColor: '#EBEBEB',

    height: 45,
    width: 40,
    marginRight: 5,

    borderRadius: 2,
    justifyContent: 'center',



  },
  TextInputs:
  {

    backgroundColor: '#EBEBEB',
    color: '#000',
    height: 35,
    width: 80 + '%',
    textAlign: 'left',
    fontSize: 16,
    borderRadius: 5,
    marginBottom:5,

    height:40,
    alignContent:'center',
    justifyContent:'center',
    borderRadius:30,
    textAlignVertical:'center',
    paddingLeft: 15,
    paddingRight: 15,

  },
  TextInputs2:
  {
    borderBottomWidth: 2,
    borderBottomColor: '#CCC',
    color: '#EBEBEB',
    width: 55 + '%',
    textAlign: 'center',
    fontSize: 19,
    marginTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 15,

  },
  GirisButton:
  {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    width:80+'%',
    height:50,
    backgroundColor:'#EBEBEB',
    borderRadius:40,
    justifyContent:'center',
    marginTop:20
    
  },
  ButtonText:
  {
    fontSize: 20,
    textAlign: 'center',
    color: '#4E4EA5',
    fontWeight: 'bold',

  },
  ButtonTextIsletme:
  {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',

  },
  isletmeButton:
  {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    width: 80 + '%',
    height: 50,
    backgroundColor: '#5c3be0',
    borderRadius: 40,
    justifyContent: 'center',
    marginTop: 15,
    alignSelf:'center',

  },
  isletmeler:
  {
    width: Dimensions.get('screen').width - 40, borderRadius: 10,
    backgroundColor: '#CCC', height: 40, alignItems: 'center', alignSelf: 'center', marginBottom: 15,

    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 100,

  },
  iletisimText:
  {
    color: '#FFF',
    marginTop: -20,
    alignSelf: 'center',

    textAlign: 'center',
    marginBottom: 5
  },
  tableContent: { marginTop: 5, width: 90 + '%' },
  head: { height: 40, fontWeight: 'bold', width: 100 + '%' },
  text: { margin: 6, color: '#FFF' },

  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  tabBarText:
  {
    color: '#EBEBEB',
    height: 60,
    fontSize: 12,
    lineHeight: 65,
    marginLeft: 5,
  }
  ,
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: 10, borderWidth: 2, borderColor: '#0e0e0e',
  },
  tabBar: {
    width: 100 + '%',
    height: 60,
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 9,
    backgroundColor: '#212121',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  container: {
    flex: 1,
    paddingBottom: 20,
    //#121210
    backgroundColor: '#121212',
    marginTop: Constants.statusBarHeight,
  },
  tabbarLogoText: {
    height: 60,
    width: 30 + '%',
    fontSize: 21,
    color: '#b3b3b3',
    textAlign: 'center',
    lineHeight: 65,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    alignContent: 'center',

    alignItems: 'center',
    height: '100' + '%',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});



export default Etkinlikler;


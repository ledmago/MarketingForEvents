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
  
} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import Story from 'react-native-story'
import { MonoText } from '../components/StyledText';
import TextTicker from 'react-native-text-ticker'
//import Header from '../components/Header';
import Menu, { MenuItem, MenuDivider, Position } from "react-native-enhanced-popup-menu";
 


class Header extends React.Component {
  constructor(props)
  {
        super(props);
     
        
        this.onlyTabBar = this.props.onlyTabBar;
 
       
            
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
  
  return (
   
    <View>



    <View style={styles.tabBar} ref={textRef}>
      <Text style={styles.tabbarLogoText} onPress={()=>{this.props.props2.navigation.navigate('Home')}}>MFE</Text>
      <Text style={styles.tabBarText} onPress={()=>{this.props.props2.navigation.navigate('Home')}}>ANA SAYFA |</Text>
      <Text style={styles.tabBarText} onPress={()=>{this.props.props2.navigation.navigate('Etkinlik')}}>ETKİNLİK |</Text>
      <Text style={styles.tabBarText} onPress={()=>{this.props.props2.navigation.navigate('iletisimsayfa')}}>İLETİŞİM</Text>
    
      <View style={{position:'absolute',right:15,height:65,alignContent:'center',justifyContent:'center'}}>
        <Ionicons name={"md-contact"} size={40} color={"#FFF"}  onPress={onPress} />
        </View>
    </View>
   { !this.onlyTabBar &&
     <View>
   <Story
    
    unPressedBorderColor="#e95950"
    pressedBorderColor="#ebebeb"
    stories={stories}
    footerComponent={
      <TextInput
        placeholder="Send message"
        placeholderTextColor="white"
      />
    }
  />
   <View style={{borderBottomColor:'gray',borderBottomWidth:1,marginTop:8,marginLeft:20,marginRight:20,opacity:0.3,}}></View>
   <View style={{marginLeft:20,marginTop:5,flexDirection:'row'}}>
    <Text onPress={()=>this.props.props2.navigation.navigate('Etkinlik')} style={{color:'#EBEBEB',marginRight:5,textAlign:'center',alignItems:'center',fontSize:12}}>YAKLAŞAN{"\n"}ETKINLIKLER</Text>
   <TextTicker
        style={{ color:'#EBEBEB',marginTop:6}}
        scrollSpeed={100}
        bounce={false}
        animationType='scroll'
        loop
        repeatSpacer={50}
        marqueeDelay={1000}
      >HADISE KONSERI / GIRNE Hotel - LIMAK HOTEL BUGÜN CEM YILMAZ İLE ŞENLENİYOR - CAGE CLUB SON PARTİSİ OLAN DJ HERO İLE DEVAM ETMEKTE
      </TextTicker>
     
   </View>
   <View style={{borderBottomColor:'gray',borderBottomWidth:1,marginTop:8,marginLeft:20,marginRight:20,opacity:0.3,}}></View>
   </View>
   }
   
    <Menu ref={setMenuRef} >
      <MenuItem onPress={()=>{hideMenu(); this.props.props2.navigation.navigate('LoginSayfa')}} underlayColor='aqua'>Hesap Bilgileri</MenuItem>
      <MenuItem onPress={hideMenu} underlayColor='aqua'>Favori Etkinkiklerim</MenuItem>
      <MenuItem onPress={hideMenu} underlayColor='aqua'>Hatırlatıcı </MenuItem>
      <MenuItem  underlayColor='aqua'>Çıkış</MenuItem>
      <MenuDivider />
    </Menu>

  </View>
  );
  }
}






const stories = [
  {
    id: "1",
    source: {uri : "https://postmuseapp.com/wp-content/uploads/2019/05/Isn%E2%80%99t-summer-great-Instagram-Story-Template-LJUP1HY2CBTbZMbcnx-foodstory-576x1024.png"},
    user: "Thrones Club",
    avatar: {uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kZfyqQ3KVCxArFeOFFT7yDFe4ODoQ8dR7G5lP7f0jiSPxUnO_g"}
  },
  {
    id: "2",
    source: {uri : "https://postmuseapp.com/wp-content/uploads/2019/05/Isn%E2%80%99t-summer-great-Instagram-Story-Template-LJUP1HY2CBTbZMbcnx-foodstory-576x1024.png"},
    user: "The Peoples",
    avatar: {uri : "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-0/p370x247/21078791_1795367557354880_7807385144839222633_n.jpg?_nc_cat=101&_nc_oc=AQm13Vlsy5v-_qZYouBS7k0suGrc7qlmzWJJHRsy5xBnTXnZjbzHdLpV5j95xPwyVRQ&_nc_ht=scontent-frt3-1.xx&oh=ee7f49a4b06b65e9590b62400d4c5656&oe=5E1E3883"}
  },
  {
    id: "3",
    source: {uri : "https://postmuseapp.com/wp-content/uploads/2019/05/Isn%E2%80%99t-summer-great-Instagram-Story-Template-LJUP1HY2CBTbZMbcnx-foodstory-576x1024.png"},
    user: "Merit Hotel",
    avatar: {uri : "https://pbs.twimg.com/profile_images/1048611428616359936/s9MMu4A9_400x400.jpg"}
  },
  {
    id: "7",
    source: {uri : "https://postmuseapp.com/wp-content/uploads/2019/05/Isn%E2%80%99t-summer-great-Instagram-Story-Template-LJUP1HY2CBTbZMbcnx-foodstory-576x1024.png"},
    user: "Cage Club",
    avatar: {uri : "https://i.ytimg.com/vi/4a04sdEjaZk/maxresdefault.jpg"}
  },
  {
    id: "4",
    source: {uri : "https://postmuseapp.com/wp-content/uploads/2019/05/Isn%E2%80%99t-summer-great-Instagram-Story-Template-LJUP1HY2CBTbZMbcnx-foodstory-576x1024.png"},
    user: "Pop Art",
    avatar: {uri : "https://d2jv9003bew7ag.cloudfront.net/uploads/What-Is-Pop-Art.jpg"}
  },
  {
    id: "5",
    source: {uri : "https://postmuseapp.com/wp-content/uploads/2019/05/Isn%E2%80%99t-summer-great-Instagram-Story-Template-LJUP1HY2CBTbZMbcnx-foodstory-576x1024.png"},
    user: "Salamis Casino",
    avatar: {uri : "http://salamisbayconti.com/wp-content/uploads/2019/08/salamis_logo.jpg"}
  },
  {
    id: "6",
    source: {uri : "https://i.hizliresim.com/vaDQQr.jpg"},
    user: "Limak Hotel",
    avatar: {uri : "data:image/png;base64,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"}
  },
 
];


const styles = StyleSheet.create({
  isletmeler:
  {width:Dimensions.get('screen').width - 40,borderRadius:10,
  backgroundColor:'#CCC',height:40,alignItems:'center',alignSelf:'center',marginBottom:15,
    
    shadowColor: "#FFF",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 100,
    
    },
  tabBarText:
  {
color:'#EBEBEB',
height:60,
fontSize:12,
lineHeight:65,
marginLeft:5,
  }
  ,
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius:10,borderWidth:2,borderColor:'#0e0e0e',
  },
  tabBar:{
    width:100+'%',
    height:60,
    flexDirection:'row',
    position:'absolute',
    zIndex:9,
    backgroundColor:'#212121',
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
    paddingBottom:20,
    //#121210
    backgroundColor: '#121212',
    marginTop:Constants.statusBarHeight,
  },
  tabbarLogoText: {
    height:60,
    width:30 + '%',
    fontSize:21,
    color:'#b3b3b3',
    textAlign:'center',
    lineHeight:65,
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
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    height:'100' +'%',
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



export default Header;


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
  StatusBar,
  
} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import Story from 'react-native-story'
import { MonoText } from '../components/StyledText';
import TextTicker from 'react-native-text-ticker'
import Header from '../components/Header';
import Menu, { MenuItem, MenuDivider, Position } from "react-native-enhanced-popup-menu";
 


class Anasayfa extends React.Component {
  constructor(props)
  {
        super(props);
     
        
        
 
        state = {
          MenuItems : [
          {name : 'Etkinlikler', url:'https://www.resourcesforlife.com/wp/wp-content/uploads/2016/10/20161007fr2003-colorfest-photos-people-running-event-008-1080x675.jpg', route:'Etkinlik'},
          {name : 'Clublar', url:'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/03/07/11/e1-london-0703.jpeg',route:'ClubSayfa'},
          {name : 'Casinolar', url:'https://www.casino.org/blog/wp-content/uploads/roulette-wheel.jpg',route:'CasinoSayfa'},
          {name : 'Hoteller', url:'https://thumbnails.trvl-media.com/-9pqVtuC38z_uaSiL1Zql6z3nX4=/340x150/smart/filters:no_upscale():quality(60)/images.trvl-media.com/hotels/1000000/150000/140600/140596/b4cfa95d_y.jpg',route:'HotelSayfa'},
          {name : 'Restaurants', url:'https://www.annabelle.com.cy/Templates/00005/data/Gallery/restaurants/annabelle-amorosa-restaurant-1900x1200.jpg',route:'RestaurantsSayfa'},
          {name : 'Yurtlar', url:'https://dormitories.emu.edu.tr/PhotoGalleries/dormitories/popart/DOUBLE%20SUIT%20ROOM%201.jpg?RenditionID=7',route:'DormitorySayfa'},
          
          ],
          
            }
            
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
   
    <View style={styles.container}>

<Header props2={this.props}/>
   
    <ScrollView
      
      contentContainerStyle={styles.contentContainer}>
      



        <View style={{width:100 + '%',alignSelf:'center'}}>
                                            <FlatList
                                    data={state.MenuItems}
                                    renderItem={({ item,index }) => (
                                      <View style={{width: 40 + '%', flexDirection: 'column', marginBottom:15,marginLeft:20 }}>
                                          <TouchableOpacity onPress={()=>this.props.navigation.navigate(item.route)}><Image style={styles.imageThumbnail} source={{ uri: item.url }} /><View><Text style={{textAlign:'center',color:'#FFF',marginTop:2}}>{item.name}</Text></View></TouchableOpacity>
                                      </View>
                                    )}
                                    //Setting the number of column
                                    numColumns={2}
                                    keyExtractor={(item, index) => index.toString()}
                                    />
                                </View>




      </ScrollView>

      <View style={{position:'absolute',bottom:0,height:20,width:100 + '%',backgroundColor: '#121212'}}>
        <View style={{borderBottomColor:'gray',borderBottomWidth:1,marginLeft:20,marginRight:20,opacity:0.2,}}></View>
    <Text style={{fontSize:10,color:'#EBEBEB',textAlign:'center',lineHeight:20}}>Tüm Haklarımız Saklıdır</Text>
    </View>

   
    <Menu ref={setMenuRef} >
      <MenuItem onPress={hideMenu} underlayColor='aqua'>Hesap Bilgileri</MenuItem>
      <MenuItem onPress={hideMenu} underlayColor='aqua'>Favori Etkinkiklerim</MenuItem>
      <MenuItem onPress={hideMenu} underlayColor='aqua'>Hatırlatıcı </MenuItem>
      <MenuItem onPress={hideMenu} underlayColor='aqua'>Oturumu Kapat</MenuItem>
      <MenuDivider />
    </Menu>

  </View>
  );
  }
}




Anasayfa.navigationOptions = {
  header: null,
};



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



export default Anasayfa;


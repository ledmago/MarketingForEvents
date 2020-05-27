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
import Header from '../components/Header';
import Menu, { MenuItem, MenuDivider, Position } from "react-native-enhanced-popup-menu";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


class Etkinlikler extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            tableHead: ['Kasım'],
            tableData: [

                ['12', '• Cage - Hadise Konseri'],
                ['13', '• KKTC Müzik Fest'],
                ['17', '• Color Fest'],
                ['18', '• Gönyeli Belediyesi - Açık hava konseri'],
                ['19', '• Karpaz Çilek Festivali'],
                ['20', '• Cadılar Bayramı Partisi'],
                ['23', '• Lala Mustafa Paşa Meydanı - Murat Boz konseri'],
                ['25', '• DAÜ Mezuniyet Şenlikleri'],
                ['26', '• Yeşilyurt Hellim Peynir Festivali'],
                ['27', '• Ders Ekle / Sil Haftası'],
                ['29', '• Palm Beach - Kaplumbağ Yumurtlama haftası'],
                ['30', '• Latin Dans Festivali'],
               


            ]
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
        const state = this.state;
        return (

            <View style={styles.container}>

                <Header props2={this.props} />

                <ScrollView

                    contentContainerStyle={styles.contentContainer}>
                    <View style={styles.tableContent}>


                        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                            <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                            <Rows data={state.tableData} widthArr={[(Dimensions.get('screen').width * 0.9) * 0.15, ((Dimensions.get('screen').width * 0.9) * 0.85) - 2]} textStyle={styles.text} />
                        </Table>



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


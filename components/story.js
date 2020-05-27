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



class StoryComponent extends React.Component {
    constructor(props) {
        super(props);


        this.onlyTabBar = this.props.onlyTabBar;



    }




    static navigationOptions = {

        header: null,
        headerMode: 'none',
    };






    stories = [
        {
            id: "1",
            source: { uri: "https://postmuseapp.com/wp-content/uploads/2019/05/Isn%E2%80%99t-summer-great-Instagram-Story-Template-LJUP1HY2CBTbZMbcnx-foodstory-576x1024.png" },
            user: "Thrones Club",
            avatar: { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kZfyqQ3KVCxArFeOFFT7yDFe4ODoQ8dR7G5lP7f0jiSPxUnO_g" }
        },
        {
            id: "2",
            source: { uri: "https://postmuseapp.com/wp-content/uploads/2019/05/Isn%E2%80%99t-summer-great-Instagram-Story-Template-LJUP1HY2CBTbZMbcnx-foodstory-576x1024.png" },
            user: "The Peoples",
            avatar: { uri: "data:image/jpeg;base64,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" }
        },
        {
            id: "3",
            source: { uri: "https://postmuseapp.com/wp-content/uploads/2019/05/Isn%E2%80%99t-summer-great-Instagram-Story-Template-LJUP1HY2CBTbZMbcnx-foodstory-576x1024.png" },
            user: "Merit Hotel",
            avatar: { uri: "https://pbs.twimg.com/profile_images/1048611428616359936/s9MMu4A9_400x400.jpg" }
        },
        {
            id: "7",
            source: { uri: "https://postmuseapp.com/wp-content/uploads/2019/05/Isn%E2%80%99t-summer-great-Instagram-Story-Template-LJUP1HY2CBTbZMbcnx-foodstory-576x1024.png" },
            user: "Cage Club",
            avatar: { uri: "https://i.ytimg.com/vi/4a04sdEjaZk/maxresdefault.jpg" }
        },
        {
            id: "4",
            source: { uri: "https://postmuseapp.com/wp-content/uploads/2019/05/Isn%E2%80%99t-summer-great-Instagram-Story-Template-LJUP1HY2CBTbZMbcnx-foodstory-576x1024.png" },
            user: "Pop Art",
            avatar: { uri: "https://d2jv9003bew7ag.cloudfront.net/uploads/What-Is-Pop-Art.jpg" }
        },
        {
            id: "5",
            source: { uri: "https://postmuseapp.com/wp-content/uploads/2019/05/Isn%E2%80%99t-summer-great-Instagram-Story-Template-LJUP1HY2CBTbZMbcnx-foodstory-576x1024.png" },
            user: "Salamis Casino",
            avatar: { uri: "https://www.puzzletravel.com/media/cache/760X428/6/63_20Casino-1494345116439.jpg" }
        },
        {
            id: "6",
            source: { uri: "https://i.hizliresim.com/vaDQQr.jpg" },
            user: "Limak Hotel",
            avatar: { uri: "data:image/png;base64,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" }
        },

    ];




    render() {
        let textRef = React.createRef();
        let menuRef = null;

        const setMenuRef = ref => menuRef = ref;
        const hideMenu = () => menuRef.hide();
        const showMenu = () => menuRef.show(textRef.current, stickTo = Position.TOP_RIGHT);

        const onPress = () => showMenu();

        return (

            <View>

                <Story
                    unPressedBorderColor="#e95950"
                    pressedBorderColor="#ebebeb"
                    stories={this.stories}

                    footerComponent={
                        <TextInput
                            placeholder="Send message"
                            placeholderTextColor="white"
                        />
                    }
                />


            </View>
        );
    }
}





const styles = StyleSheet.create({
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
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: '#111111',
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
        fontSize: 23,
        color: '#b3b3b3',
        textAlign: 'center',
        lineHeight: 65,
        marginRight: 20,
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
        justifyContent: 'center',
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



export default StoryComponent;


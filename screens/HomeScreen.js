import * as WebBrowser from 'expo-web-browser'
import * as React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native'
import * as firebase from 'firebase'

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCBKejrxqgIj_DIuPHtnXcTKVuA0TnNJ1I",
    authDomain: "tumgglfbwft.firebaseapp.com",
    databaseURL: "https://tumgglfbwft.firebaseio.com",
    projectId: "tumgglfbwft",
    storageBucket: "tumgglfbwft.appspot.com",
    messagingSenderId: "882430198154",
    appId: "1:882430198154:web:8d1c4e7ab20000c3d34873",
    measurementId: "G-H0FCF5KPPL"
}

firebase.initializeApp(firebaseConfig)

// console.log(firebase.database)

// const dbh = firebase.firestore()

// const testFunction = id => {
//     firebase.database().ref('game/' + id).on('value', (snapshot) => {
//         const testdata = snapshot.val().value
//         console.log(testdata)
//     })
// }

// testFunction('ledger')

import List from '../components/list'

let users = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Erik',
        score: -329,
        avatar: 'hotdog',
        background: 'pink'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b9',
        name: 'David',
        score: -583,
        avatar: 'lion_face',
        background: 'orange'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28a9',
        name: 'Henke',
        score: -234,
        avatar: 'dress',
        background: 'yellow'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad5abb2as9d',
        name: 'Tobbe',
        score: -193,
        avatar: 'tophat',
        background: 'green'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-828dab271bba',
        name: 'Wendi',
        score: -84,
        avatar: 'crossed_fingers',
        background: 'pink'
    },
    {
        id: 'bd7acbea-c1b1-98cd-aed5-3ad53abb28ba',
        name: 'Thea',
        score: -60,
        isAnimal: true,
        avatar: 'dog2',
        background: 'pink'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53cdd28ba',
        name: 'Hein',
        score: -69,
        avatar: 'flag-no',
        background: 'pink'
    },
    {
        id: 'e97acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Alexandra H',
        score: -43,
        avatar: 'boom',
        background: 'pink'
    },
    {
        id: 'bd7acb8b-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Ben',
        score: -37,
        avatar: 'flag-us',
        background: 'pink'
    },
    {
        id: 'bd7acbea-99b2-46c2-aed5-3ad53abb28ba',
        name: 'Olof',
        score: -61,
        avatar: 'eggplant',
        background: 'pink'
    }
]

users.sort((a, b) => a.score - b.score)

export default function HomeScreen() {
    const testFunction = (userId) => {
        firebase.database().ref('users/' + userId).once('value', (snapshot) => {
            const avatar = snapshot.val().avatar;
            console.log(avatar);
        })
    }

    testFunction('k35lr9jshpm')

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <List users={users} />
            </View>
        </ScrollView>
    );
}

HomeScreen.navigationOptions = {
    header: null,
};

function DevelopmentModeNotice() {
    if (__DEV__) {
        const learnMoreButton = (
        <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
            Learn more
        </Text>
        );

        return (
        <Text style={styles.developmentModeText}>
            Development mode is enabled: your app will be slower but you can use useful development
            tools. {learnMoreButton}
        </Text>
        );
    } else {
        return (
        <Text style={styles.developmentModeText}>
            You are not in development mode: your app will run at full speed.
        </Text>
        );
    }
}

function handleLearnMorePress() {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
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

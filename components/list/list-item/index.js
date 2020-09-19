import React from 'react'
// import { Text } from 'react-native'
import {
    ItemWrapper, Item,
    ItemTop, ItemBottom,
    UserWrapper, UserName, ScoreWrapper, Score, Placement,
    Joined, ButtonsWrapper, StatsButton, PlusButton, MinusButton, ButtonText,
    LastWrapper, LastText
} from './s'
import Emoji from '../../emoji'

// const firebaseConfig = {
//     apiKey: "AIzaSyCBKejrxqgIj_DIuPHtnXcTKVuA0TnNJ1I",
//     authDomain: "tumgglfbwft.firebaseapp.com",
//     databaseURL: "https://tumgglfbwft.firebaseio.com",
//     projectId: "tumgglfbwft",
//     storageBucket: "tumgglfbwft.appspot.com",
//     messagingSenderId: "882430198154",
//     appId: "1:882430198154:web:8d1c4e7ab20000c3d34873",
//     measurementId: "G-H0FCF5KPPL"
// }

// firebase.initializeApp(firebaseConfig)

const updateDatabase = (id, value) => {
    // firebase.database().ref(id).set({
    //     asdk: value
    // })
}

const ListItem = ({ user, index, max }) => (
    <ItemWrapper>
        <Item>
            <ItemTop>
                <UserWrapper>
                    <Emoji style={{ fontSize: 24 }} name={user.avatar} />
                    <UserName>{user.name}</UserName>
                </UserWrapper>
                <ScoreWrapper>
                    <Score>{user.score}</Score>
                    <Placement>({index})</Placement>
                </ScoreWrapper>
            </ItemTop>
            <ItemBottom>
                <Joined>{`joined ${Math.floor(Math.random() * Math.floor(30)) + 1}/${Math.floor(Math.random() * Math.floor(11)) + 1}`}</Joined>
                <ButtonsWrapper>
                    <StatsButton>
                        <ButtonText>?</ButtonText>
                    </StatsButton>
                    <PlusButton onClick={() => updateDatabase('105', true)}>
                        <ButtonText>+</ButtonText>
                    </PlusButton>
                    <MinusButton>
                        <ButtonText>-</ButtonText>
                    </MinusButton>
                </ButtonsWrapper>
            </ItemBottom>
        </Item>
        {index === max && (
            <LastWrapper>
                <Emoji style={{ fontSize: 24 }} name="hankey" />
                <LastText>HAHA you're last!</LastText>
            </LastWrapper>
        )}
    </ItemWrapper>
)

export default ListItem

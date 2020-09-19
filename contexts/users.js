import React, { Component, createContext } from 'react'
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCBKejrxqgIj_DIuPHtnXcTKVuA0TnNJ1I",
    authDomain: "tumgglfbwft.firebaseapp.com",
    databaseURL: "https://tumgglfbwft.firebaseio.com",
    projectId: "tumgglfbwft",
    storageBucket: "tumgglfbwft.appspot.com",
    messagingSenderId: "882430198154",
    appId: "1:882430198154:web:8d1c4e7ab20000c3d34873",
    measurementId: "G-H0FCF5KPPL"
}

export const UsersContext = createContext()

export default class UsersProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: props?.users ?? []
        }
    }

    componentDidMount() {
        this.mounted = true
        firebase.initializeApp(config)
        this.fetch()
    }

    componentWillUnmount() {
        this.mounted = false
    }

    fetch = () => {
        if(this.mounted) {
            const usersRef = firebase.database().ref('users')

            usersRef.on('value', (snapshot) => {
                const sortedUsers = snapshot?.val().sort((a, b) => a.score - b.score)
                this.setState({ users: sortedUsers })
            })
        }
    }

    render() {
        const { children = null } = this.props

        return (
            <UsersContext.Provider value={this.state}>
                {(typeof children === 'function') && children(this.state)}
                {(typeof children !== 'function') && children}
            </UsersContext.Provider>
        )
    }
}
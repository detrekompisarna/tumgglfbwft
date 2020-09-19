import React from 'react'
// import { FlatList } from 'react-native'
import { List } from './s'
import ListItem from './list-item'
// import { SafeAreaView, FlatList, Text } from 'react-native'

const ListNode = ({ users }) => (
    <List
        data={users}
        renderItem={({ item, index }) => (
            <ListItem user={item} index={users.length - index} max={users.length} />
        )}
        inverted={true}
    />
)

export default ListNode

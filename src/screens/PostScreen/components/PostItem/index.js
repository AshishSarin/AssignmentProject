import React, { Component } from 'react'
import { Text } from 'react-native'

export class PostItem extends Component {
    
    render() {
        const { data } = this.props;
        return (
            <Text>
                {data}
            </Text>
        )
    }
}

export default PostItem

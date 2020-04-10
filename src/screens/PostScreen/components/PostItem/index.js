import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles';
export class PostItem extends Component {
    
    render() {
        const { data } = this.props;
        return (
            <TouchableOpacity
                onPress={this.onPressPostItem}
                activeOpacity={0.5}
                style={styles.container}>
                <Text
                    numberOfLines={3}
                    style={styles.title}>{data?.title || ""}</Text>
                <Text
                    numberOfLines={3}
                    style={styles.url}>{data?.url || ""}</Text>
                <Text
                    numberOfLines={3}
                    style={styles.created_at}>{data?.created_at || ""}</Text>
                <Text
                    numberOfLines={3}
                    style={styles.author}>{data?.author || ""}</Text>
            </TouchableOpacity>
        )
    }

    onPressPostItem = () => {
        const { itemIndex } = this.props;
        this.props.onPressPostItem?.(itemIndex);
    }
}

export default PostItem

import React, { Component } from 'react'
import { Text, FlatList, ActivityIndicator } from 'react-native'
import PostItem from '../PostItem';
import Utils from '../../../../utils/Utils';

class PostScreen extends Component {

    render() {
        const { postList } = this.props;
        console.log('postList-->', postList);
        return (
            <FlatList
                renderItem={this.renderPostItem}
                ListEmptyComponent={this.renderEmptyList}
                keyExtractor={Utils.keyExtractor}
                data={postList}
            />
        )
    }

    renderEmptyList = () => {
        return (
            <ActivityIndicator />
        )
    }

    componentDidMount() {
        this.props.callGetPost();
    }


    renderPostItem = ({ item }) => {
        return (
            <PostItem data={item}/>
        );
    }
}

export default PostScreen

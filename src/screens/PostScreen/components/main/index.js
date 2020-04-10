import React, { Component } from 'react'
import { Text, FlatList, ActivityIndicator, View } from 'react-native'
import PostItem from '../PostItem';
import Utils from '../../../../utils/Utils';
import styles from './styles';

class PostScreen extends Component {

    render() {
        return (
            <View>
                {this.renderHeader()}
                {this.renderPostList()}
            </View>
        )

    }

    renderHeader = () => {
        return (
            <View style={styles.header}>
                <Text>Title</Text>
                <Text>URL</Text>
                <Text>Created at</Text>
                <Text>Author</Text>
            </View>
        );
    }

    renderPostList = () => {
        const { postList } = this.props;
        return (
            <FlatList
                bounces={false}
                contentContainerStyle={styles.postList}
                onEndReachedThreshold={0.5}
                onEndReached={this.onListEndReached}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem={this.renderPostItem}
                ListEmptyComponent={this.renderEmptyList}
                keyExtractor={Utils.keyExtractor}
                data={postList}
            />
        )
    }

    onListEndReached = () => {
        if (!this.props.isLoading) {
            // load more data only if no data is currently being fetched
            this.props.callGetPost();
        }
        
    }

    renderSeparator = () => {
        return <View style={styles.separator}/>
    }

    renderEmptyList = () => {
        return (
            <ActivityIndicator />
        )
    }

    componentDidMount() {
        this.props.startPostFetching();
    }


    renderPostItem = ({ item }) => {
        return (
            <PostItem data={item} />
        );
    }

    componentWillUnmount() {
        this.props.stopPostFetching();
    }
}

export default PostScreen

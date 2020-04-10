import React, { Component } from 'react'
import { Text, FlatList, ActivityIndicator, View } from 'react-native'
import PostItem from '../PostItem';
import Utils from '../../../../utils/Utils';
import styles from './styles';
import { CustomModal } from '../../../../commonComponents/CustomModal';

class PostScreen extends Component {
    constructor(props) {
        super(props);
        this.modalRef = React.createRef();
    }

    render() {
        return (
            <View>
                {this.renderHeader()}
                {this.renderPostList()}
                {this.renderModal()}
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

    renderModal = () => {
        return (
            <CustomModal ref={this.modalRef}>
                <Text>TestModal</Text>
            </CustomModal>
        )
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
            <PostItem
                onPressPostItem={this.onPressPostItem}
                data={item} />
        );
    }

    onPressPostItem = (data) => {
        console.log('onPressPostItem')
        // TODO: complete modal code
        // and open modal here
        // this.modalRef?.current?.showModal?.();
    }

    componentWillUnmount() {
        this.props.stopPostFetching();
    }
}

export default PostScreen

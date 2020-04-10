import React, { Component } from 'react'
import { Text, FlatList, ActivityIndicator, View, ScrollView } from 'react-native'
import PostItem from '../PostItem';
import Utils from '../../../../utils/Utils';
import styles from './styles';
import { CustomModal } from '../../../../commonComponents/CustomModal';

class PostScreen extends Component {
    constructor(props) {
        super(props);
        this.modalRef = React.createRef();
        this.state = {
            selectedItemIndex: -1
        }

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
        if (Boolean(this.state.selectedItemIndex !== -1)) {
            return (
                <CustomModal ref={this.modalRef}>
                    <ScrollView style={styles.modal}>
                        <Text>
                            {JSON.stringify(this.props.postList[this.state.selectedItemIndex])}
                        </Text>
                    </ScrollView>
                </CustomModal>
            )
        }
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
        return <View style={styles.separator} />
    }

    renderEmptyList = () => {
        return (
            <ActivityIndicator />
        )
    }

    componentDidMount() {
        this.props.startPostFetching();
    }


    renderPostItem = ({ item, index }) => {
        return (
            <PostItem
                itemIndex={index}
                onPressPostItem={this.onPressPostItem}
                data={item} />
        );
    }

    onPressPostItem = (itemIndex) => {
        console.log('onPressPostItem')
        this.setState({
            selectedItemIndex: itemIndex
        }, () => {
            this.modalRef?.current?.showModal?.();
        })
    }

    componentWillUnmount() {
        this.props.stopPostFetching();
    }
}

export default PostScreen

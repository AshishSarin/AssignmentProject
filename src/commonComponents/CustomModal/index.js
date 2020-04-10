import React, { Component } from 'react'
import { Modal, TouchableOpacity, Text, View } from 'react-native'
import styles from './styles';

export class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    showModal = () => {
        this.setState({
            isVisible: true
        });
    }

    closeModal = () => {
        console.log('onCloseModal is called');
        
        this.setState({
            isVisible: false
        })
    }


    render() {
        return (
            <Modal
            animationType="slide"
            transparent
            visible={this.state.isVisible}
        >
            <View style={styles.modalParent}>
                <TouchableOpacity style={styles.modalEmpty}
                    onPress={this.closeModal}
                />
                <View style={styles.modalView}>
                    {this.props.children}
                    <TouchableOpacity
                        onPress={this.closeModal}
                        style={styles.closeBtn}>
                            <Text onPress={this.closeModal}> 
                                {`Close`}
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        )
    }
}

export default Modal

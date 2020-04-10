import React, { Component } from 'react'
import { Modal, TouchableOpacity } from 'react-native'

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
            <Modal visible={this.state.isVisible}>
                <TouchableOpacity
                    onPress={this.closeModal}>
                    {this.props.children}
                </TouchableOpacity>
            </Modal>
        )
    }
}

export default Modal

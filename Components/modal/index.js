import React from "react";
import { Modal } from "react-native";

const CustomModal = ({ children , visible, animationType, onRequestClose }) => {
   //children seria todo lo que esta dentro del contenedor modal
   //onRequestClose recibe el METODO onRequestClose
    return (
        <Modal
            animationType={animationType}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            {children}
        </Modal>
    )
}

export default CustomModal;
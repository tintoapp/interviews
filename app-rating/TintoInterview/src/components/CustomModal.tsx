import React from 'react';
import {Modal} from 'react-native';

type ModalProps = {
  children: React.ReactNode;
  visible: boolean;
};

export const CustomModal = ({children, visible}: ModalProps) => {
  return (
    <Modal transparent={false} visible={visible}>
      {children}
    </Modal>
  );
};

export default CustomModal;

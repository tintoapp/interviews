import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomModal from '../components/CustomModal';
import Button from '../components/Button';

export const InitialScreen: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(true);
  const changeVisibility = () => setOpen(false);

  return (
    <View style={styles.centeredView}>
      <CustomModal visible={isOpen}>
        <View style={styles.modalView}>
          <View style={styles.modalTitle}>
            <Text style={styles.modalTitleText}>Enjoying Tinto?</Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.buttonContainer}>
              <Button text="Love it" onClick={changeVisibility} />
            </View>
            <View style={styles.buttonContainer}>
              <Button text="Could be better" onClick={changeVisibility} />
            </View>
          </View>
        </View>
      </CustomModal>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  modalView: {
    position: 'absolute',
    width: '100%',
    padding: 7,
    bottom: 0,
    left: 0,
    borderColor: 'black',
    borderTopWidth: 1,
    backgroundColor: 'white',
  },
  modalTitle: {
    marginTop: 5,
    marginBottom: 5,
  },
  modalTitleText: {
    color: 'grey',
    fontSize: 16,
  },
  buttons: {
    marginTop: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 10,
  },
  button: {
    width: 220,
    paddingVertical: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 16,
  },
});

export default InitialScreen;

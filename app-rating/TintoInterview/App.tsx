import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


const App = () => {
  return (
    <View style={styles.centeredView}>
     <Modal
      transparent={false}
      visible={true}
     >
        <View style={styles.modalView}>
         <Text>Enjoying Tinto?</Text>
         <View>
           <View>
             <TouchableOpacity>
                <Text>
                   Love it
                </Text>
             </TouchableOpacity>
           </View>
           <View>
             <TouchableOpacity>
                <Text>
                  Could be better
                </Text>
             </TouchableOpacity>
           </View>
         </View>
       </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;

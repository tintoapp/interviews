import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/general';

interface ReviewModalInterface {
  handleHappy: () => void;
  handleUnHappy: () => void;
  handleIgnore: () => void;
}

const ReviewModal = ({
  handleHappy,
  handleUnHappy,
  handleIgnore,
}: ReviewModalInterface) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enjoying Tinto?</Text>
      <TouchableOpacity style={styles.button} onPress={handleHappy}>
        <Text style={styles.buttonText}>LOVE IT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleUnHappy}>
        <Text style={styles.buttonText}>COULD BE BETTER</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleIgnore}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewModal;

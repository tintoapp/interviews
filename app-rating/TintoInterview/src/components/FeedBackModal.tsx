import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {styles} from '../styles/general';

interface FeedBackModalInterface {
  onSubmit: () => void;
  onChange: (text: string) => void;
  onLater: () => void;
}

const FeedBackModal = ({
  onSubmit,
  onChange,
  onLater,
}: FeedBackModalInterface) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>We're all ears</Text>
      <Text>
        We're sorry to hear that. If you have a minute, please tell us more
      </Text>
      <TextInput
        placeholder="Type your feedback here..."
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onLater}>
        <Text style={styles.buttonText}>NOT RIGHT NOW</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FeedBackModal;

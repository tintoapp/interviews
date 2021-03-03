import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

/* inAppReviewNotWork, so I only add ability to close modal :( */
    
export const Button = ({text, onClick}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default Button;

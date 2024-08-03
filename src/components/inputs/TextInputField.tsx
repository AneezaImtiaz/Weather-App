import React from 'react';
import { TextInput } from 'react-native';
import { TYPE_HERE } from '../../utils/Constants';
import styles from './TextInputFieldStyles';

export type TextInputFieldProps = {
  text: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const TextInputField: React.FC<TextInputFieldProps> = ({ text, onChangeText, placeholder = TYPE_HERE }) => {
  return (
    <TextInput
      autoCapitalize="words"
      style={styles.input}
      value={text}
      onChangeText={onChangeText}
      placeholder={placeholder} />
  );
};

export default TextInputField;

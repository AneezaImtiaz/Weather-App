import React from 'react';
import { TextInput } from 'react-native';
import { TYPE_HERE } from '../../utils/Constants';
import styles from './TextInputFieldStyles';

type TextInputFieldProps = {
  text: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

/**
 * This component is meant to be displaying the TextInput view.
 * @param TextInputFieldProps - This is an object containing props being used inside this component.
 * @returns UI element for the TextInputField.
 */
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

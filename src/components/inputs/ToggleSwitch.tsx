import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Theme from '../../../Theme';
import styles from './ToggleSwitchStyles';

type ToggleSwitchProps = {
  activeOption: string;
  options: string[];
  onToggle: (option: string) => void;
  activeColor?: string;
  inactiveColor?: string;
  activeTextColor?: string;
  inactiveTextColor?: string;
  disabled?: boolean;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  activeOption,
  options,
  onToggle,
  disabled = false,
  activeColor = Theme.colors.primary.default,
  inactiveColor = Theme.colors.transparent,
  activeTextColor = Theme.colors.background.default,
  inactiveTextColor = Theme.colors.primary.default,
}) => {

  const getColors = () => {
    const background = disabled ? Theme.colors.background.disabled : activeColor;
    const text = disabled ? Theme.colors.background.disabled : inactiveTextColor;
    return { background, text };
  }

  return (
    <View style={[styles.switchContainer, { borderColor: getColors().background }]}>
      {options?.map((option) => (
        <TouchableOpacity
          key={option}
          disabled={disabled}
          style={[styles.toggleItem, { backgroundColor: activeOption === option ? getColors().background : inactiveColor }]}
          onPress={() => onToggle(option)}>
          <Text style={[styles.text, { color: activeOption === option ? activeTextColor : getColors().text }]}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ToggleSwitch;
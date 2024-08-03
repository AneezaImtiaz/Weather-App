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
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  activeOption,
  options,
  onToggle,
  activeColor = Theme.colors.primary.default,
  inactiveColor = Theme.colors.transparent,
  activeTextColor = Theme.colors.background.default,
  inactiveTextColor = Theme.colors.primary.default,
}) => {

  return (
    <View style={[styles.switchContainer, { borderColor: activeColor }]}>
      {options?.map((option) => (
        <TouchableOpacity
          key={option}
          style={[styles.toggleItem, { backgroundColor: activeOption === option ? activeColor : inactiveColor }]}
          onPress={() => onToggle(option)}>
          <Text style={[styles.text, { color: activeOption === option ? activeTextColor : inactiveTextColor }]}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ToggleSwitch;
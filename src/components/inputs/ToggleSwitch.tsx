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

/**
 * This component is meant to be displaying the options as a toogle switch view.
 * @param ToggleSwitchProps - This is an object containing props being used inside this component.
 * @returns UI element for the ToggleSwitch.
 */
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

  /**
   * This function is responsible for handling the colors with respect to disabled prop.
   * @returns Object containing the background and text color.
   */
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
          testID={`toggle-${option}`}
          disabled={disabled}
          style={[styles.toggleItem, {
            backgroundColor: activeOption === option ? getColors().background : inactiveColor
          },
          disabled && { opacity: 0.6 }]}
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
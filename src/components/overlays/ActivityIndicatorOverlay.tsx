import React from 'react';
import { ActivityIndicator, Modal, View, Text } from 'react-native';
import styles from './ActivityIndicatorOverlayStyles';
import Theme from '../../../Theme';

type ActivityIndicatorOverlayProps = {
  label?: string;
  transparent?: boolean;
};

/**
 *  This component is meant to be displaying the acivity loader view.
 * @param ActivityIndicatorOverlayProps - This is an object containing props being used inside this component.
 * @returns UI element for the ActivityIndicatorOverlay.
 */
const ActivityIndicatorOverlay: React.FC<ActivityIndicatorOverlayProps> = ({ label = '', transparent = false }) => {
  return (
    <Modal transparent>
      <View testID="activityIndicator" style={[styles.container, transparent && styles.transparent]}>
        <View style={styles.content}>
          <ActivityIndicator
            size="large"
            color={Theme.colors.primary.default} />
          {label && <Text style={styles.label}>{label}</Text>}
        </View>
      </View>
    </Modal>
  );
};

export default ActivityIndicatorOverlay;
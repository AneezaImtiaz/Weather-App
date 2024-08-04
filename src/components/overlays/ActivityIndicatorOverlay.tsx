import React from 'react';
import { ActivityIndicator, Modal, View, Text } from 'react-native';
import styles from './ActivityIndicatorOverlayStyles';
import Theme from '../../../Theme';

export type ActivityIndicatorOverlayProps = {
  label?: string;
  transparent?: boolean;
};

export const ActivityIndicatorOverlay: React.FC<ActivityIndicatorOverlayProps> = ({ label = '', transparent = false }) => {
  return (
    <Modal transparent>
      <View style={[styles.container, transparent && styles.transparent]}>
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
import React from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import styles from './MessageDialogStyles';

export type MessageDialogProps = {
  title: string;
  description?: string;
  button?: string;
  onButtonClick?: () => void;
  closeButton?: string;
  onClose?: () => void;
};

const MessageDialog: React.FC<MessageDialogProps> = ({
  description,
  title,
  button = '',
  onButtonClick = () => null,
  closeButton = '',
  onClose = () => null,
}) => {
  return (
    <Modal transparent>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          {!!description && <Text style={styles.description}>{description}</Text>}
          <View style={styles.buttonContainer}>
            {!!button && (
              <TouchableOpacity
                style={styles.buttonContent}
                onPress={onButtonClick}>
                <Text style={styles.button}>{button}</Text>
              </TouchableOpacity>
            )}
            {!!closeButton && (
              <TouchableOpacity
                style={styles.buttonContent}
                onPress={onClose}>
                <Text style={styles.button}>{closeButton}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MessageDialog;
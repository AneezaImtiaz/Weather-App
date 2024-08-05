import React from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import styles from './MessageDialogStyles';

type MessageDialogProps = {
  title: string;
  description?: string;
  button?: string;
  onButtonClick?: () => void;
  closeButton?: string;
  onClose?: () => void;
};

/**
 * This component is meant to be displaying the information provided under dialog view.
 * @param MessageDialogProps  - This is an object containing props being used inside this component.
 * @returns UI element for the MessageDialog.
 */
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
/**
 * Modal main component.
 * Modal animation Enum: [slide, fade, none]
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React from 'react';
import {Modal, View} from 'react-native';

const styles = {
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
};

export default ({animation, visible, children}) => {
  return (
    <Modal transparent animationType={animation ? animation : 'fade'} visible={visible}>
      <View style={styles.modal}>{children}</View>
    </Modal>
  );
};

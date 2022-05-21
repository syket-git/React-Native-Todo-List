import React from 'react';
import {
  View,
  Modal,
  Image,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const InputContainer = ({ text, setText, setModalOpen, handleAdd }) => {
  return (
    <Modal animationType="slide">
      <View style={styles.inputWrapper}>
        <Image
          style={styles.imageWrapper}
          source={require('../../assets/goal.png')}
        />
        <TextInput
          value={text}
          onChangeText={(e) => setText(e)}
          placeholder="Write your goal"
          style={styles.textInput}
        />
        <View style={styles.ButtonWrapper}>
          <View style={{ marginRight: 10 }}>
            <Button
              color="#ff006e"
              onPress={() => setModalOpen(false)}
              title="Cancel"
            />
          </View>
          <View>
            <Button color="#5e0acc" onPress={handleAdd} title="Add Goal" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#5e0acc',
    color: 'white',
    padding: 2,
    paddingLeft: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  imageWrapper: {
    width: 100,
    height: 100,
    margin: 20,
  },
  ButtonWrapper: {
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-around',
  },
});

export default InputContainer;

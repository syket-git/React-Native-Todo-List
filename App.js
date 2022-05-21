import {
  StyleSheet,
  SafeAreaView,
  Button,
  ScrollView,
  View,
} from 'react-native';
import { useState } from 'react';
import InputContainer from './components/InputContainer/InputContainer';
import GoalsLIst from './components/GoalsList/GoalsLIst';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [text, setText] = useState('');
  const [goals, setGoals] = useState([]);
  const handleAdd = () => {
    if (text) {
      setGoals((prevGoals) => [...prevGoals, text]);
      setText('');
    }
  };

  const handleDelete = (goal) => {
    const filterITem = goals.filter((g) => g !== goal);
    setGoals(filterITem);
  };

  return (
    <>
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.container}>
          <Button
            onPress={() => setModalOpen(true)}
            title="Add new goal"
            color="#5e0acc"
          />
          {modalOpen && (
            <InputContainer
              text={text}
              setText={setText}
              handleAdd={handleAdd}
              setModalOpen={setModalOpen}
            />
          )}
          <GoalsLIst goals={goals} handleDelete={handleDelete} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    height: '100%',
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});

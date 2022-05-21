import React from 'react';
import { View, FlatList, Text, Pressable, StyleSheet } from 'react-native';

const GoalsLIst = ({ goals, handleDelete }) => {
  return (
    <View style={styles.goalWrapper}>
      <FlatList
        data={goals}
        renderItem={(item) => (
          <Pressable android_ripple={{ color: '#ddd' }}>
            <Text style={styles.goal} onPress={() => handleDelete(item?.item)}>
              {item.item}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalWrapper: {
    flex: 5,
    marginTop: 20,
  },
  goal: {
    backgroundColor: '#5e0acc',
    marginTop: 5,
    marginBottom: 5,
    padding: 8,
    color: 'white',
    borderRadius: 3,
  },
});

export default GoalsLIst;

import { View, Text, StyleSheet } from "react-native";

function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meals Overview</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
  },
});
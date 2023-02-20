import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Auth from './src/components/screens/Auth/Auth';

export default function App() {
  let user = {
    name: 'John',
    age: 30,
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Click Me" onPress={() => alert('Button Clicked!')} />
      {user === null ? <Auth /> : <Text>Welcome {user.name}</Text>}
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});

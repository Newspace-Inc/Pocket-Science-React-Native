
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/HomeScreen"
import TopicSelection from "./src/screens/TopicSelection"
import * as React from 'react';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" component={HomeScreen} options={{ headerShown: false, cardStyle: { backgroundColor: 'white' }}}  />
        <Stack.Screen name="TopicSelection" component={TopicSelection} options={{cardStyle: { backgroundColor: 'white' }}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


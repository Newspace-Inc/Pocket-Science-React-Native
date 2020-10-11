
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./src/screens/HomeScreen"
import TopicSelection from "./src/screens/TopicSelection"
import * as React from 'react';
import TopicExplaination from './src/screens/TopicExplaination';
import MainQuiz from './src/screens/MainQuiz';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const tabTheme = {...DefaultTheme,colors: {...DefaultTheme.colors, card: 'white', text: 'black'}};
export const Lesson = React.createContext();
function App() {
  return (
    <NavigationContainer theme = {tabTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" component={HomeScreen} options={{ headerShown: false, cardStyle: { backgroundColor: 'white' }}}  />
        <Stack.Screen name="TopicSelection" component={TopicSelection} options={{cardStyle: { backgroundColor: 'white' }}} />
        <Stack.Screen name="Lessons" component={Lessons} options={{cardStyle: { backgroundColor: 'white' }}} />
      </Stack.Navigator>

      
    </NavigationContainer>
  );
}
function Lessons({route}){
  return (
    <Lesson.Provider value={route}>
    <Tab.Navigator initialRouteName = "TopicExplaination">
        <Tab.Screen name="TopicExplaination" component={TopicExplaination} options={{cardStyle: { backgroundColor: 'white' }}} />
        <Tab.Screen name="Topics" component={MainQuiz} options={{cardStyle: { backgroundColor: 'white' }}}/>
        <Tab.Screen name="Quiz" component={MainQuiz} options={{cardStyle: { backgroundColor: 'white' }}}/>

      </Tab.Navigator>
      </Lesson.Provider>
  
  );
}





export default App;


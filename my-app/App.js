import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { ScreenStack } from 'react-native-screens';

import ViewState from './src/screens/ViewState.js'
import ViewEfect from './src/screens/ViewEfect.js'
import ViewImage from './src/screens/ViewImage.js'
import Dropdown from './src/screens/Picker.js'
import ViewNav1 from './src/screens/ViewMenuNav1.js'
import ViewLogin from './src/screens/ViewLogin.js'
import Picker from './src/screens/Picker.js'
import ViewTask from './src/screens/ViewTask.js'


export default function App() {
  return (
    <>

      <NavigationContainer>

        {/* <Stack.Navigator screenOptions={{headerShown: false}}> */}
        <Stack.Navigator>
          

          <Stack.Screen name="Login" component={ViewLogin}  />
          <Stack.Screen name="MENU" component={ViewNav1}  />
          <Stack.Screen name="ViewState" component={ViewState}  />
          <Stack.Screen name="ViewEfect" component={ViewEfect} />
          <Stack.Screen name="Picker" component={Picker} />
          <Stack.Screen name="ViewImage" component={ViewImage} />
          <Stack.Screen name="ViewTask" component={ViewTask} />

        </Stack.Navigator>

      </NavigationContainer>

      {/* <ViewState /> */}
      {/* <ViewEfect /> */}
      {/* <ViewImage /> */}
      {/* <Dropdown /> */}

      <StatusBar
        translucent={false}
        backgroundColor="#fff"
        style="auto"
      />

    </>
  );
}


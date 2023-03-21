import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {BottomTabs} from './BottomTabs'

const AppStack = createNativeStackNavigator();

export function AppRoutes() {

  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
      options={{ headerShown: false }}
        name="BottomTabs"
        component={BottomTabs}
      />
    </AppStack.Navigator>
  )
}


import React from 'react';
import {
  StyleSheet
} from 'react-native';
import 'react-native-gesture-handler';

import { SplashScreen } from './src/component/SplashScreen/splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Register } from './src/component/Register/register';
import { screenName } from './src/component/global/constant';
import { Login } from './src/component/Login/login';
import { Home } from './src/component/Home/home';

const Stack = createStackNavigator();
  
const LoginStack = () =>{
  return (
    <Stack.Navigator initialRouteName={screenName.SPLASH} screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenName.SPLASH} component={SplashScreen}/>
      <Stack.Screen name={screenName.REGISTER} component={Register}/>
      <Stack.Screen name={screenName.LOGIN} component={Login}/>
    </Stack.Navigator>
  )

}


const App = () => {
  const login = true;

  return (
    <NavigationContainer>
      {login ? <Home/> : <LoginStack/>}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

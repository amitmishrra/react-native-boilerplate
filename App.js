import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as ReduxProvider } from 'react-redux';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';

import { store } from './src/redux/store';
import LoginPage from './src/Pages/LoginPage';
import HomePage from './src/Pages/HomePage';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// const hashedPassword = HashPwdV2(loginCredentials.password + loginCredentials.loginId.toLocaleLowerCase(), "")
// setHorizonTypeList([...new Map(userList?.filter(a => a.ParentOrgId == preferenceData.parentOrgId).map((item) => [item["HorizonTypeId"], item])).values()])

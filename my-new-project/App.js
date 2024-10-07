import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavroiteScreen from './screens/FavroiteScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerStyle:{backgroundColor:'#351401'}, headerTintColor:'white' ,sceneContainerStyle:{backgroundColor:'#3f2f25'}}}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title:'All Categories'
        }}
      ></Drawer.Screen>
      <Drawer.Screen name="Favorites" component={FavroiteScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
    <StatusBar style='light'></StatusBar>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#351401'}, headerTintColor:'white' ,contentStyle:{backgroundColor:'#3f2f25'}}} >
        <Stack.Screen name='MealsCategories' component={DrawerNavigator} options={{ headerShown:false}} />
        <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
        <Stack.Screen name='MealDetail' component={MealDetailScreen} options={{
          title:'About the Meal'
        }} />
      </Stack.Navigator>

    </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});

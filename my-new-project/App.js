import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavroiteScreen from './screens/FavroiteScreen';
import {Ionicons} from '@expo/vector-icons'
// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor:'#351401',
        drawerActiveBackgroundColor: '#e4baa1'
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size} />
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Favorites"
        component={FavroiteScreen}
        options={{
          drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size} />
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
    <StatusBar style='light'></StatusBar>
    {/* <FavoritesContextProvider> */}
    <Provider store={store} >
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#351401'}, headerTintColor:'white' ,contentStyle:{backgroundColor:'#3f2f25'}}} >
        <Stack.Screen name='MealsCategories' component={DrawerNavigator} options={{ headerShown:false}} />
        <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
        <Stack.Screen name='MealDetail' component={MealDetailScreen} options={{
          title:'About the Meal'
        }} />
      </Stack.Navigator>

    </NavigationContainer>
    </Provider>
    {/* </FavoritesContextProvider> */}
    
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});

import React from "react";
import Feed from "./src/screens/Feed";
import Detail from "./src/screens/Detail";
import {
  NavigationContainer,
  useRoute,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen1 from "./src/screens/Drawer/Screen1";
import Screen2 from "./src/screens/Drawer/Screen2";
import Screen3 from "./src/screens/Drawer/Screen3";
import Tab1 from "./src/screens/Tabs/Tab1";
import Tab2 from "./src/screens/Tabs/Tab2";
import Tab3 from "./src/screens/Tabs/Tab3";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTabs = createMaterialBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();

const createHomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          title: "Hello Feed",
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        // options={{
        //   headerStyle: { backgroundColor: "blue" },
        //   headerTintColor: "white",
        // }}
      />
      <Stack.Screen name="TopTabs" component={createTopTabs} />
      <Stack.Screen name="BottomTabs" component={createBottomTabs} />
    </Stack.Navigator>
  );
};

const createTopTabs = () => {
  const route = useRoute();
  return (
    <TopTabs.Navigator>
      <TopTabs.Screen
        name="Tab1"
        component={Tab1}
        options={{
          title: route.params.name,
        }}
      />
      <TopTabs.Screen name="Tab2" component={Tab2} />
      <TopTabs.Screen name="Tab3" component={Tab3} />
    </TopTabs.Navigator>
  );
};

const createBottomTabs = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Tab1" component={Tab1} />
      <BottomTabs.Screen name="Tab2" component={Tab2} />
      <BottomTabs.Screen name="Tab3" component={Tab3} />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  const colorTheme = useColorScheme();
  const MyTheme = {
    dark: false,
    colors: {
      primary: "purple",
      background: "#cccccc",
      card: "red",
      text: "white",
      border: "green",
    },
  };

  const linking = {
    prefixes: ["kpis://"],
    config: {
      screens: {
        Feed: "feed",
        Detail: "detail",
      },
    },
  };

  return (
    <AppearanceProvider>
      <NavigationContainer theme={colorTheme === "dark" ? DarkTheme : MyTheme} linking={linking}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={createHomeStack} />
          <Drawer.Screen name="Screen1" component={Screen1} />
          <Drawer.Screen name="Screen2" component={Screen2} />
          <Drawer.Screen name="Screen3" component={Screen3} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}

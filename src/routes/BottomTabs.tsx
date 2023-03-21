import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { CusttomTabs } from "../components/Footer";

import { Home } from "../pages/Home";
import { Teste } from "../pages/Teste";
import { Volei } from "../pages/Volei";

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <CusttomTabs {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Teste" component={Teste} />
      <Tab.Screen name="Volei" component={Volei} />
    </Tab.Navigator>
  );
}

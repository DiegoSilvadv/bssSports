import React from "react";
import { FontAwesome5, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Nav } from '../../utils/navigateProps'
import { TabArea, TabItem, ImageIcon } from "./styles";

import basketball from '../../assets/basketball.png'
import iconhand from '../../assets/iconhand.png'
import voleibol from '../../assets/voleibol.png'


export function CusttomTabs() {
  const { navigate } = useNavigation<Nav>();

  const goTo = (screenName: string) => {
    navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo("Home")}>
        <ImageIcon source={basketball}/>
      </TabItem>
      <TabItem onPress={() => goTo("Teste")}>
        <ImageIcon source={iconhand}/>
      </TabItem>
      <TabItem onPress={() => navigate("Volei")}>
        <ImageIcon source={voleibol}/>
      </TabItem>
    </TabArea>
  );
}

import React from 'react';
import { StatusBar, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as S from './styles';

import iconVoleiBol from '../../assets/voleibol.png';
import iconHand from '../../assets/iconhand.png';
import iconBasket from '../../assets/basketball.png';
import Home from '../../pages/Home';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

export default function Header() {

  return (
    // <S.Container>
    //   <S.logoContent>
    //     <S.LogoFooter source={iconVoleiBol}/>
    //     <S.LogoFooter source={iconHand}/>
    //     <S.LogoFooter source={iconBasket}/>
    //   </S.logoContent> 
    // </S.Container>
    

  )
}
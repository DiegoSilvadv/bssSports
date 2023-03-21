import React, { useState } from "react";
import { Text, ScrollView, StatusBar, FlatList, SafeAreaView } from "react-native";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Jogadores from "../../assets/jogadores.png";
import Jogadoras from "../../assets/jogadoras.png"

import Svg, {Path} from "react-native-svg"
import * as S from './styles';

import BlogImage from '../../assets/blogimage.png';
import miniLogo from '../../assets/minilogo.png';

export default function Basquete() {

  

  return (

    <S.Container>
      <StatusBar hidden={true} />

      <Header />


      
        
      
      <S.areaView>
       <S.Title>Modalidades</S.Title>
      
       <S.Separetor/>
       <S.blogInfosWrapper>

        <S.imageModalidades source={Jogadores}>
          
        </S.imageModalidades>
        
        <S.blogDescription>BASQUETE 5X5 MASCULINO</S.blogDescription>
       </S.blogInfosWrapper>
       <S.Separetor/>
       <S.blogInfosWrapper>

        <S.imageModalidades source={Jogadores}>
          
        </S.imageModalidades>
        <S.blogDescription>BASQUETE 3X3 MASCULINO</S.blogDescription>
       </S.blogInfosWrapper>
       <S.Separetor/>
       <S.blogInfosWrapper>

        <S.imageModalidades source={Jogadoras}>
          
          
        </S.imageModalidades>
        
        <S.blogDescription>BASQUETE 5X5 FEMININO</S.blogDescription>
       </S.blogInfosWrapper>
       <S.Separetor/>
       <S.blogInfosWrapper>

        <S.imageModalidades source={Jogadoras}>
          
        </S.imageModalidades>
        <S.blogDescription>BASQUETE 3X3 FEMININO</S.blogDescription>
       </S.blogInfosWrapper>
      </S.areaView>
      
    </S.Container>
  )
}




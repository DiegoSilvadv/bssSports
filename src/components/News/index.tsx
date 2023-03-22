import React, { useState } from "react";
import { Text, ScrollView, StatusBar, FlatList, SafeAreaView } from "react-native";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import BlogImage from '../../assets/blogimage.png';
import miniLogo from '../../assets/minilogo.png';

import * as S from './styles';


export default function News({data}){



    return (
        <SafeAreaView>
        
          <S.BlogContainer>
            <S.LastNotices>Últimas notícias</S.LastNotices>
            <S.blogImage source={BlogImage} />
            <S.blogTitle>Time de Curitiba vence partida com ampla vantagem mesmo com Herbert em quadra </S.blogTitle>
            <S.blogDescription>Te rça-feira (14) é dia de Champions League! Dois jogos agitam, logo mais, as oitavas de final da principal competição europeia. Manchester City (1) x (1) RB Leipzig FC Porto (0) x (1) Inter Acompanhe...</S.blogDescription>
          </S.BlogContainer>
          <S.areaView>
            <FlatList
              data={data}
              contentContainerStyle={{ paddingBottom: 20 }}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => <ListItem data={item} />}
            />
          </S.areaView>
        
        </SafeAreaView>
      )
}



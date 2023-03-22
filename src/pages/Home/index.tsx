import React, { useState } from "react";
import { Text, ScrollView, StatusBar, FlatList, SafeAreaView } from "react-native";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import * as S from './styles';

import BlogImage from '../../assets/blogimage.png';
import miniLogo from '../../assets/minilogo.png';

export default function Home() {

  const [data, setData] = useState([{
    id: "Java basquete é campeão daTaça Curitiba.", description: "BSS Esportes há 3 horas", date: "BSS Esportes há 3 horas"
  },
  {
    id: "Java basquete é campeão daTaça Curitiba.", description: "BSS Esportes há 3 horas", date: "BSS Esportes há 3 horas"
  },
  {
    id: "Java basquete é campeão daTaça Curitiba.", description: "BSS Esportes há 3 horas", date: "BSS Esportes há 3 horas"
  },
  {
    id: "Java basquete é campeão daTaça Curitiba.", description: "BSS Esportes há 3 horas", date: "BSS Esportes há 3 horas"
  },
  {
    id: "Java basquete é campeão daTaça Curitiba.", description: "BSS Esportes há 3 horas", date: "BSS Esportes há 3 horas"
  },
  {
    id: "Java basquete é campeão daTaça Curitiba.", description: "BSS Esportes há 3 horas", date: "BSS Esportes há 3 horas"
  },
  {
    id: "Java basquete é campeão daTaça Curitiba.", description: "BSS Esportes há 3 horas", date: "BSS Esportes há 3 horas"
  },])

  return (
    <SafeAreaView>
    <S.Container>
      <StatusBar hidden={true} />
      <Header />
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
    </S.Container>
    </SafeAreaView>
  )
}

function ListItem({ data }) {
  return (

    <S.blogInfosWrapper>
      {/* <S.Separetor></S.Separetor> */}
      <S.blogFooter>
        <S.blogTitle>{data.id}</S.blogTitle>
        <S.blogFooterInfos>
          <S.blogImageLogo source={miniLogo} />
          <S.blogFooterDate>{data.date}</S.blogFooterDate>
        </S.blogFooterInfos>
      </S.blogFooter>
      <S.imageBlogGroup source={BlogImage} />
    </S.blogInfosWrapper>

  )
}


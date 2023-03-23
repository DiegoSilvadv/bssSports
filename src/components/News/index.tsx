import React, { useState } from "react";
import { Text, ScrollView, StatusBar, FlatList, SafeAreaView } from "react-native";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import BlogImage from '../../assets/blogimage.png';
import miniLogo from '../../assets/minilogo.png';

import * as S from './styles';

interface PostsProps {
  title: string;
  hour: string;
  image: string;
}

interface IPosts {
  posts: PostsProps[]
}


export default function News({data}){

  const [dataPosts, setDataPosts] = useState([
    {
      title: "post 1",
      hour: "3 horas atras",
      image: "1213"
    },
    {
      title: "post 2",
      hour: "3 horas atras",
      image: "1213"
    },
    {
      title: "post 3",
      hour: "3 horas atras",
      image: "1213"
    }
  ])

    return (
        <SafeAreaView>
          <S.BlogContainer>
            <S.LastNotices>Últimas notícias</S.LastNotices>
            <S.blogImage source={BlogImage} />
            <S.blogTitle>Time de Curitiba vence partida com ampla vantagem mesmo com Herbert em quadra </S.blogTitle>
            <S.blogDescription>Terça-feira (14) é dia de Champions League! Dois jogos agitam, logo mais, as oitavas de final da principal competição europeia. Manchester City (1) x (1) RB Leipzig FC Porto (0) x (1) Inter Acompanhe...</S.blogDescription>
          </S.BlogContainer>
          {/* <S.areaView> */}
            <FlatList
              data={dataPosts}
              contentContainerStyle={{ paddingBottom: 20 }}
              keyExtractor={item => String(item.title)}
              renderItem={({ item }) => <ListItem posts={item} />}
            />
          {/* </S.areaView> */}
        </SafeAreaView>
      ) 
}

function ListItem({posts}: IPosts) { 
   return (
    <SafeAreaView>
      <S.Separetor></S.Separetor>

      <S.BlogWrapperFooter>
        <S.BlogWrapperFooterTitle>{posts.title}</S.BlogWrapperFooterTitle>
        <S.BlogWrapperFooterTitle>{posts.title}</S.BlogWrapperFooterTitle>
      </S.BlogWrapperFooter>
    </SafeAreaView>
      

    
  );
}



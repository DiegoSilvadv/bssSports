import React from "react";
import { Text, ScrollView, StatusBar } from "react-native";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import * as S from './styles';

import BlogImage from '../../assets/blogimage.png';
import miniLogo from '../../assets/minilogo.png';

export function Teste() {
  
  return (
    
      <S.Container>
        <StatusBar hidden={true} />
        <Header />
          <S.BlogContainer>
            <S.LastNotices>Últimas notícias</S.LastNotices>
            <S.BlogWrapper>
              <S.blogImage source={BlogImage} />
            </S.BlogWrapper>
            <S.blogTitle>Time de Curitiba vence partida com ampla vantagem mesmo com Herbert em quadra </S.blogTitle>
            <S.blogDescription>Terça-feira (14) é dia de Champions League! Dois jogos agitam, logo mais, as oitavas de final da principal competição europeia. Manchester City (1) x (1) RB Leipzig FC Porto (0) x (1) Inter Acompanhe...</S.blogDescription>
          
            <S.blogInfosContainer>
              <S.blogInfosWrapper>
                <S.blogFooter>
                  <S.blogTitle>Java basquete é campeão da Taça Curitiba.</S.blogTitle>
                  <S.blogFooterInfos>
                    <S.blogImageLogo source={miniLogo} />
                    <S.blogFooterDate>BSS Esportes há 3 horas</S.blogFooterDate>
                  </S.blogFooterInfos>
                </S.blogFooter>
                <S.imageBlogGroup source={BlogImage} />
              </S.blogInfosWrapper>
            </S.blogInfosContainer>
            {/* <S.blogContainer></S.blogContainer> */}
          </S.BlogContainer>
        <Footer />

      </S.Container>
    

  )
}


import React, { useState } from "react";
import { Text, ScrollView, StatusBar, FlatList, SafeAreaView } from "react-native";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Jogadores from "../../assets/jogadores.png";
import Jogadoras from "../../assets/jogadoras.png"
import Jogadoras3x3 from "../../assets/jogadoras3x3.png"
import Jogadores3x3 from "../../assets/jogadores3x3.png"
import LogoJava from "../../assets/logojavabasquetebol.png"
import LogoMonster from "../../assets/logomonsterbasquetebol.png"

import Svg, {Path} from "react-native-svg"
import * as S from './styles';

import BlogImage from '../../assets/blogimage.png';
import miniLogo from '../../assets/minilogo.png';

export default function Basquete() {

  const [data, setData] = useState([
    {
      id: "1", Liga: "Taça Curitiba", Date: "15 de março de 2023", Fase: 'Semi-Final', TimeCasa: 'JAVA Basquetebol', LogoTimeCasa: LogoJava, PontosTimeCasa: '62', LogoTimeVisitante: LogoMonster, TimeVisitante: 'MONSTERS Basquetebol', PontosTimeVisitante: '26', 
    },
    {
      id: "2", Liga: "Taça Curitiba", Date: "15 de março de 2023", Fase: 'Semi-Final', TimeCasa: 'JAVA Basquetebol', LogoTimeCasa: LogoJava, PontosTimeCasa: '62', LogoTimeVisitante: LogoMonster, TimeVisitante: 'MONSTERS Basquetebol', PontosTimeVisitante: '26', 
    },
    {
      id: "3", Liga: "Taça Curitiba", Date: "15 de março de 2023", Fase: 'Semi-Final', TimeCasa: 'JAVA Basquetebol', LogoTimeCasa: LogoJava, PontosTimeCasa: '62', LogoTimeVisitante: LogoMonster, TimeVisitante: 'MONSTERS Basquetebol', PontosTimeVisitante: '26', 
    },
    {
      id: "4", Liga: "Taça Curitiba", Date: "15 de março de 2023", Fase: 'Semi-Final', TimeCasa: 'JAVA Basquetebol', LogoTimeCasa: LogoJava, PontosTimeCasa: '62', LogoTimeVisitante: LogoMonster, TimeVisitante: 'MONSTERS Basquetebol', PontosTimeVisitante: '26', 
    },
  
    ])

  

  return (

    <S.Container>
      <StatusBar hidden={true} />

      <Header />


      <S.areaView>
  


          <FlatList
            data={data}
            contentContainerStyle={{ paddingBottom: 5, gap: 12 }}
            keyExtractor={item => String(item.id)}
            horizontal={true}
            renderItem={({ item }) => <ModalItem data={item} />}
          />

       <S.Title>Modalidades</S.Title>
      
       <S.Separetor/>
      <S.modali>

       <S.blogInfosWrapper>
        <S.imageModalidades source={Jogadores}></S.imageModalidades>
        <S.blogDescription>BASQUETE 5X5 MASCULINO</S.blogDescription>
       </S.blogInfosWrapper>

      </S.modali>

       <S.Separetor/>
      <S.modali>

       <S.blogInfosWrapper>
        <S.imageModalidades3 source={Jogadores3x3}></S.imageModalidades3>
        <S.blogDescription>BASQUETE 3X3 MASCULINO</S.blogDescription>
       </S.blogInfosWrapper>

      </S.modali>

       <S.Separetor/>

      <S.modali>
       <S.blogInfosWrapper>
        <S.imageModalidades source={Jogadoras}></S.imageModalidades>
        <S.blogDescription>BASQUETE 5X5 FEMININO</S.blogDescription>
       </S.blogInfosWrapper>

      </S.modali>

       <S.Separetor/>
      <S.modali>

       <S.blogInfosWrapper>
        <S.imageModalidades3 source={Jogadoras3x3}></S.imageModalidades3>
        <S.blogDescription>BASQUETE 3X3 FEMININO</S.blogDescription>
       </S.blogInfosWrapper>
      </S.modali>

      </S.areaView>
      
    </S.Container>
  )
}


function ModalItem({data}) {
  return (

    <S.ModalPlacar>
      <S.ViewLiga>
        <S.Title>{data.Liga}</S.Title>
      </S.ViewLiga>
      <S.ViewData>

        <S.Subtitle>{data.Date}</S.Subtitle>
        <S.Subtitle>{data.Fase}</S.Subtitle>
      </S.ViewData>
      <S.ViewPlacar>
        <S.ImageLogo source={data.LogoTimeCasa}></S.ImageLogo>
        <S.TitlePontos>{data.PontosTimeCasa}</S.TitlePontos>
        <S.Titlex>X</S.Titlex>
        <S.TitlePontos>{data.PontosTimeVisitante}</S.TitlePontos>
        <S.ImageLogo source={data.LogoTimeVisitante}></S.ImageLogo>
      </S.ViewPlacar>
      <S.ViewNome>

        <S.TitleTimes>{data.TimeCasa}</S.TitleTimes>
        <S.TitleTimes>{data.TimeVisitante}</S.TitleTimes>
      </S.ViewNome>
      <S.ButtonVer>
        <S.TitleButton>Ver estatísticas</S.TitleButton>
      </S.ButtonVer>
    </S.ModalPlacar>

  )
}


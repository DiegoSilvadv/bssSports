import React, { useState } from "react";
import { StatusBar, FlatList } from "react-native";
import Header from "../../components/Header";
import Jogadores from "../../assets/jogadores.png";;
import Jogadoras from "../../assets/jogadoras.png";
import Jogadoras3x3 from "../../assets/jogadoras3x3.png";
import Jogadores3x3 from "../../assets/jogadores3x3.png";
import LogoJava from "../../assets/logojavabasquetebol.png";
import Jogador from "../../assets/jogador.png";
import Jogadora from "../../assets/jogadora.png";
import LogoMonster from "../../assets/logomonsterbasquetebol.png";

import * as S from './styles';


import CardPlacar from '../../components/CardPlacar' 

export default function TelaBasquete() {

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
          <S.ViewLiga>
            <FlatList
              data={data}
              contentContainerStyle={{ paddingBottom: 5, gap: 12 }}
              keyExtractor={item => String(item.id)}
              horizontal={true}
              renderItem={({ item }) => <CardPlacar data={item} />}
              showsHorizontalScrollIndicator={false}
            />
          </S.ViewLiga>
        <S.ViewButton>
          <S.imageModalidadesButton source={Jogador}></S.imageModalidadesButton>
          <S.imageModalidadesButton source={Jogador}></S.imageModalidadesButton>
          <S.imageModalidadesButton source={Jogadora}></S.imageModalidadesButton>
          <S.imageModalidadesButton source={Jogadora}></S.imageModalidadesButton>
        </S.ViewButton>
    <S.modaliText>
       <S.Title>Modalidades</S.Title>
    </S.modaliText>
       <S.Separetor/>
      <S.modaliView>
       <S.infosWrapper>
        <S.imageModalidades source={Jogadores}></S.imageModalidades>
        <S.modalidadeDescription>BASQUETE 5X5 MASCULINO</S.modalidadeDescription>
       </S.infosWrapper>
      </S.modaliView>
       <S.Separetor/>
      <S.modaliView>
       <S.infosWrapper>
        <S.imageModalidades3 source={Jogadores3x3}></S.imageModalidades3>
        <S.modalidadeDescription>BASQUETE 3X3 MASCULINO</S.modalidadeDescription>
       </S.infosWrapper>
      </S.modaliView>
       <S.Separetor/>
      <S.modaliView>
       <S.infosWrapper>
        <S.imageModalidades source={Jogadoras}></S.imageModalidades>
        <S.modalidadeDescription>BASQUETE 5X5 FEMININO</S.modalidadeDescription>
       </S.infosWrapper>
      </S.modaliView>
       <S.Separetor/>
      <S.modaliView>
       <S.infosWrapper>
        <S.imageModalidades3 source={Jogadoras3x3}></S.imageModalidades3>
        <S.modalidadeDescription>BASQUETE 3X3 FEMININO</S.modalidadeDescription>
       </S.infosWrapper>
      </S.modaliView>
      </S.areaView>   
    </S.Container>
  )
}


import { SafeAreaView, ScrollView, Text } from 'react-native'
import Header from '../../components/Header';
import * as S from './styles';

import Team1 from '../../assets/team1.png';
import Local from '../../assets/local.png';
import Time from '../../assets/time.png';
import imgTST from '../../assets/imgtst.png';
import News from '../../components/News';



export default function Team() {
  return (
    <SafeAreaView>
      <ScrollView>
        <S.Container>
          <Header />
          <S.Scoreboard>
            <S.ScoreboardTeams>       
              <S.ScoreboardTeamsGroup>
                <S.ScoreboardTeamsGroupIMG source={Team1} />
                <S.ScoreboardTeamsGroupTeam>JAVA Basquetebol</S.ScoreboardTeamsGroupTeam>
              </S.ScoreboardTeamsGroup>
              <S.Score>20</S.Score>
              <S.Score>x</S.Score>
              <S.Score>20</S.Score>
              <S.ScoreboardTeamsGroup>
                <S.ScoreboardTeamsGroupIMG source={Team1} />
                <S.ScoreboardTeamsGroupTeam>Monsters Basquetebal</S.ScoreboardTeamsGroupTeam>
              </S.ScoreboardTeamsGroup>
            </S.ScoreboardTeams>
          </S.Scoreboard>
          <S.DetailsMatch>
            <S.DetailsTitle>Detalhes do jogo</S.DetailsTitle>
            <S.Separetor></S.Separetor>
            <S.LeagueGroupDescription>
              <S.IconDetailGroup>
                <S.IconsDetails source={Local} />
              </S.IconDetailGroup>
              <S.DescriptionGroup>
                <S.Title>Campeonato</S.Title>
                <S.Description>Taça Curitiba</S.Description>
              </S.DescriptionGroup>
            </S.LeagueGroupDescription>
            <S.Separetor></S.Separetor>

            <S.LeagueGroupDescription>
              <S.IconDetailGroup>
                <S.IconsDetails source={Time} />
              </S.IconDetailGroup>
              <S.DescriptionGroup>
                <S.Title>Início</S.Title>
                <S.Description>15 março às 16:00</S.Description>
              </S.DescriptionGroup>
            </S.LeagueGroupDescription>
            <S.Separetor></S.Separetor>
            <S.LeagueGroupDescription>
              <S.IconDetailGroup>
                <S.IconsDetails source={Local} />
              </S.IconDetailGroup>
              <S.DescriptionGroup>
                <S.Title>Local</S.Title>
                <S.Description>Quadra random</S.Description>
              </S.DescriptionGroup>
            </S.LeagueGroupDescription>
            <S.Separetor></S.Separetor>

            <S.LeagueGroupDescription>
              <S.IconDetailGroup>
                <S.IconsDetails source={imgTST} />
              </S.IconDetailGroup>
              <S.DescriptionGroup>
                <S.Title>MVP da partida</S.Title>
                <S.Description>Herbert Carnaúba ( Rei )</S.Description>
              </S.DescriptionGroup>
            </S.LeagueGroupDescription>
          </S.DetailsMatch>

          <S.ButtonMoreStatistics>
            <S.ButtonMoreStatisticsText>Ver estatistica completa</S.ButtonMoreStatisticsText>
          </S.ButtonMoreStatistics>
          <News />

        </S.Container>
      </ScrollView>
    </SafeAreaView>

  )
}
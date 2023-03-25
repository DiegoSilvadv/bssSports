import { SafeAreaView, ScrollView, Text } from 'react-native'
import Header from '../../components/Header';
import * as S from './styles';

import Team1 from '../../assets/team2.png';
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
              <S.ScoreboardTeamsGroupIMG source={Team1} />    
              <S.ScoreboardTeamsGroup>
                <S.TeamInfo>TIME</S.TeamInfo>
                <S.ScoreboardTeamsGroupTeam>JAVA Basquetebol</S.ScoreboardTeamsGroupTeam>
              </S.ScoreboardTeamsGroup>
            </S.ScoreboardTeams>
          </S.Scoreboard>


          <S.DetailsMatch>
            <S.DetailsTitle>Elenco</S.DetailsTitle>
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

            <S.ButtonMoreStatistics>
              <S.ButtonMoreStatisticsText>Ver estatistica completa</S.ButtonMoreStatisticsText>
            </S.ButtonMoreStatistics>

          </S.DetailsMatch>
          <News />
        </S.Container>
      </ScrollView>
    </SafeAreaView>
    

  )
}
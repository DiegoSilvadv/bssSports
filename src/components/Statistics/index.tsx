import { Text } from 'react-native'
import Header from '../Header';
import * as S from './styles';

import Team1 from '../../assets/team1.png';


export default function Statistics() {
  return(
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
      </S.DetailsMatch>
    </S.Container>
    
  )
}
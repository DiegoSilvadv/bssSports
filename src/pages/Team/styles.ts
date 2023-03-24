import styled, { css } from 'styled-components';

export const Container = styled.View`
  background-color: #fff;
  height: 100%;

  flex: 1;
  align-items: center;
`

export const Scoreboard = styled.View`
  width: 100%;
  height: 213px;
  background-color: #383838;
`
export const ScoreboardTeams = styled.View`
  width: 100%;
  margin-top: -25%;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0 58px 0 58px;
`
export const ScoreboardTeamsGroup = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ScoreboardTeamsGroupIMG = styled.Image`
`
export const ScoreboardTeamsGroupTeam = styled.Text`
  color: #fff;
  margin-top: 30px;
  text-align: center;
`

export const Score = styled.Text`
  color: #ffffff;
  margin: 1%;
  font-size: 24px;
  font-weight: bold;
`

// detalhes do jogo
export const DetailsMatch = styled.View`
  width: 90%;
  height: ${(265)}px;
  background-color: #f2f2f2;
  margin: -15% auto 0 auto;
  border-radius: 15px;
`

export const DetailsTitle = styled.Text`
  color: #000000;
  font-weight: bold;
  font-size: 16px;
  margin: 16px 0 9px 24px;
`

export const Separetor = styled.View`
  width: 90%;
  height: 1px;
  background-color: #d1d1d1;
  margin: 0 auto;
`

export const LeagueGroupDescription = styled.View`
  flex: 1;
  height: ${(53)}px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-left: 33px;
  padding: 14px 0 14px 0;
`
export const IconDetailGroup = styled.View`
  width: 10%;
  justify-content: center;
  align-items: center;
  
`

export const DescriptionGroup = styled.View`
  width: 100%;
  margin-left: 11px;
`
export const Title = styled.Text`
  font-size: 12px;
  font-weight: 600;;

`
export const Description = styled.Text`
  font-size: 12px;
  color: #9b9b9b;
`

export const IconsDetails = styled.Image`
 
`
export const ButtonMoreStatistics = styled.TouchableOpacity`
  width: 242px;
  height: 29px;
  background-color: #FF9F00;

  margin-top: 21px;
 justify-content: center;
 align-items: center;
 border-radius: 15px;
`
export const ButtonMoreStatisticsText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin: 5px;
`




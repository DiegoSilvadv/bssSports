import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  background-color: #fff;
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
  height: 251px;
  background-color: #f2f2f2;
  margin: -15% auto 0 auto;

  border-radius: 15px;
`

export const DetailsTitle = styled.Text`
  color: #000000;
  font-weight: bold;
  font-size: 16px;
  margin: 16px 0 9px 24px;

  border
`

export const Separetor = styled.View`
  width: 90%
  height: 1px;
  background-color: #d1d1d1;
  margin: 0 auto;
`


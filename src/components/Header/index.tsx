import React from "react";


import * as S from './styles';
import Logo from '../../assets/logo.png';


export default function Header () {
  return (
    <S.Container>
      <S.Logo source={Logo}/>
    </S.Container>
  )
}

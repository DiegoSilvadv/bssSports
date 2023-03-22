import * as S from './styles';




export default function CardPlacar({data}) {
  
  return(

        <S.ModalPlacar>
            <S.ViewLiga>
                <S.Title>{data.Liga}</S.Title>
            </S.ViewLiga>
            <S.ViewDate>
                <S.Subtitle>{data.Date}</S.Subtitle>
                <S.Subtitle>{data.Fase}</S.Subtitle>
            </S.ViewDate>
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
            <S.ViewLiga>

                <S.ButtonVer>
                    <S.TitleButton>Ver estatísticas</S.TitleButton>
                </S.ButtonVer>
            </S.ViewLiga>
        </S.ModalPlacar>

  )
}


import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 900px;
  flex:1 ;
  // background-color: #111;
`
export const areaView = styled.SafeAreaView`
  width: 90%
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
export const BlogContainer = styled.View`
  width: 90%;
  height: 300px;
  margin: 0 auto;
`
export const blogImage = styled.Image`
  width: 100%;
  border-radius: 10px;
`
export const LastNotices = styled.Text`
  font-size: 16px;
  font-weight: bold;

  margin-bottom: 8px;
`

export const blogTitle = styled.Text`
  font-weight: bold;
  font-size: 12px;
  margin-top: 10px;

`
export const blogDescription = styled.Text`
  font-size: 12px;
  margin-top: 10px;
`

export const blogInfosWrapper = styled.View`
  width: 90%;

  flex-direction: row;
  
`

export const Separetor = styled.View`
  width: 100%;
  height: 1px;
  
  background-color: #d1d1d1;
`

export const blogFooter = styled.View`
  width: 100%;
  height: 100%
  align-items: flex-start;
  flex-direction: column;

`
export const blogFooterDate = styled.Text`
  font-size: 10px;
  color: #a1a1a1;

`

export const blogImageLogo = styled.Image`
  margin-left: -13px;
`

export const imageBlogGroup = styled.Image`
  width: 68px
  height: 46px;

  border-radius: 10px;
`

export const blogFooterInfos = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;

`



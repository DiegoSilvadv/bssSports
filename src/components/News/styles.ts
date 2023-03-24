import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  width: ${wp(100)}%;
  height: 900px;
  /* flex:1 ; */
  // background-color: #111;
`
// export const areaView = styled.SafeAreaView`
//   width: 90%;
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   margin: 0 auto;
// `
export const BlogContainer = styled.View`
  width: ${wp(90)};
  /* height: 300px; */
  margin: 0 auto;
  padding: 32px 0 8px 0; 
`
export const blogImage = styled.Image`
  width: ${wp(90)};
  border-radius: 10px;
  background-color: #111;
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

export const Separetor = styled.View`
  width: ${(100)}%;
  height: 1px;
  background-color: #d1d1d1;
  margin: 0 auto;
`

// Posts
export const BlogWrapperFooter = styled.View`
  width: 100px;
  flex: 1;
  align-items: flex-start;
  justify-content: center;

`

export const BlogWrapperFooterTitle = styled.Text`
  width: 180px;
  font-size: 12px;
  color: #000000;
  font-weight: 700;
`
export const BlogFooterConatainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: flex-start;

  flex-direction: row;
  padding: 9px 0 9px 0;
`

export const BlogWrapperFooterInfos = styled.View`
  width: ${(100)}%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const ImageFooterPost = styled.Image`
  margin-left: -5%;
`

export const PostFooterTitle = styled.Text`
  color: #a1a1a1;
  font-size: 10px;
`

export const ImagePost = styled.Image`
  width: ${(68)}px;
  height: ${(46)}px;
  border-radius: 10px;
`


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
  height: 300px;
  margin: 0 auto;
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
  align-items: center;
  justify-content: center;
`

export const BlogWrapperFooterTitle = styled.Text`
  font-size: 12px;
  color: #fff;
  background-color: #111;
`


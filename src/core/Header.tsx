import React from 'react'
import images from '../assets'
import styled from 'styled-components/native'
import addOpacity from '../utils/addOpacity'
import { screenWidth } from '../utils'
import themeColors from '../theme/theme'

interface Props {
  title: string
  goBack?: () => void
  goProfile: () => void
  image?: Object
}

const Header: React.FC<Props> = ({
  title,
  goBack,
  image = images.profileUser,
  goProfile,
}) => {
  return (
    <StyledContainer>
      <StyledView>
        {goBack && (
          <StyledImageContainer onPress={goBack}>
            <StyledImage source={images.chevronLeft} />
          </StyledImageContainer>
        )}
      </StyledView>
      <StyledTitle>{title}</StyledTitle>
      <StyledProfileContainer onPress={goProfile}>
        <StyledImageProfile source={image} />
      </StyledProfileContainer>
    </StyledContainer>
  )
}
// border-color: ${({ theme }) => theme.colors.grey};
// tint-color: ${({ theme }) => theme.colors.lightBlue};
// color: ${({ theme }) => theme.colors.darkGrey};

const StyledContainer = styled.View`
  width: ${screenWidth}px;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 10px;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.colors.grey};
  flex-direction: row;
`
const StyledView = styled.View`
  width: 40px;
`
const StyledImageContainer = styled.TouchableOpacity`
  background-color: ${addOpacity(themeColors.colors.blue, 0.8)};
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${addOpacity(themeColors.colors.darkGrey, 0.6)};
`
const StyledImage = styled.Image`
  height: 20px;
  width: 20px;
  tint-color: ${({ theme }) => theme.colors.lightBlue};
`
const StyledTitle = styled.Text`
  font-size: 20px;
  line-height: 26.38px;
  font-style: normal;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: center;
`
const StyledProfileContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${addOpacity(themeColors.colors.darkGrey, 0.6)};
`
const StyledImageProfile = styled.Image`
  max-height: 38px;
  max-width: 38px;
  border-radius: 20px;
  tint-color: ${addOpacity(themeColors.colors.blue, 0.8)};
`
export default Header

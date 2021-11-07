import React, { memo } from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import themeColors from '../../theme/theme'
import addOpacity from '../../utils/addOpacity'

interface Props {
  title: string
  subtitle: string
  image: string
  onPress: () => void
}

const screenWidth = Dimensions.get('window').width

const Card: React.FC<Props> = ({ title, subtitle, image, onPress }) => {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <StyledViewImage>
        <StyledImage source={{ uri: image }} />
      </StyledViewImage>
      <StyledViewText>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledViewText>
    </StyledTouchableOpacity>
  )
}

const StyledTouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  height: 250px;
  width: ${screenWidth - 30}px;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.grey};
  border-radius: 20px;
`
const StyledViewImage = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.grey};
`
const StyledImage = styled.Image`
  height: 100%;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`
const StyledViewText = styled.View`
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${addOpacity(themeColors.colors.blue, 0.4)};
`
const StyledTitle = styled.Text`
  align-self: center;
  font-size: 20px;
  line-height: 26.38px;
  font-style: normal;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`
const StyledSubtitle = styled.Text`
  align-self: center;
  font-size: 15px;
  line-height: 26.38px;
  font-style: normal;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`

export default memo(Card)

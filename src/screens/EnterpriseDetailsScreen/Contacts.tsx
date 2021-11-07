import React from 'react'

import styled from 'styled-components/native'

interface Props {
  meansOfContact: string
  contact: string
}

const Contacts = ({ meansOfContact, contact }: Props) => {
  return (
    <StyledContainer>
      <StyledTitle>{meansOfContact}</StyledTitle>
      <StyledDescription>{contact}</StyledDescription>
    </StyledContainer>
  )
}

const StyledContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
`
const StyledTitle = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  align-self: flex-start;
`

const StyledDescription = styled.Text`
  font-size: 15px;
  line-height: 22px;
  font-style: normal;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`

export default Contacts

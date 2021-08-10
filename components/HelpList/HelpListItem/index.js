import React from 'react'
import Image from 'next/image'
import {
  StyledHelpListItem,
  StyledHelpListImage,
  StyledHelpListItemContent,
  StyledHelpListNumber
} from './helpListItem.styled'

const HelpListItem = ({
  img,
  headingOne,
  headingTwo,
  paragraph,
  background,
  reverseOrder = false
}) => {
  return (
    <StyledHelpListItem reverseOrder={reverseOrder}>
      <StyledHelpListImage>
        <Image src={img} alt='Help' />
      </StyledHelpListImage>

      <StyledHelpListNumber reverseOrder={reverseOrder}>
        {background}
      </StyledHelpListNumber>

      <StyledHelpListItemContent reverseOrder={reverseOrder}>
        <h5>{headingOne}</h5>
        <h3>{headingTwo}</h3>
        <p>{paragraph}</p>
      </StyledHelpListItemContent>
    </StyledHelpListItem>
  )
}

export default HelpListItem

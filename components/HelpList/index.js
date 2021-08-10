import React from 'react'

import Container from '../Container'
import HelpListItem from './HelpListItem'
import { StyledHelpList } from './helpList.styled'

import hairPhoto from '../../public/img/hair-photo-1-2-x.png'
import sexPhoto from '../../public/img/sex-photo-1-2-x.png'

const HelpList = () => {
  return (
    <StyledHelpList>
      <Container>
        <h2>What we can help with</h2>
        <div>
          <HelpListItem
            img={hairPhoto}
            headingOne='Hair Loss'
            headingTwo='Hair loss needn’t be irreversible. We can help!'
            paragraph='Hair loss needn’t be irreversible. There’s a scientifically proven way that’s most effective in keeping and regrowing your hair. It’s all to do with blocking a pesky hormone called DHT. That’s the bad guy behind hair loss. And you can keep him at bay. The choice is yours.'
            background='01'
          />
          <HelpListItem
            img={sexPhoto}
            headingOne='Erectile Dysfunction'
            headingTwo='Erections can be a tricky thing.
But no need to feel down!'
            paragraph='There are plenty of reasons why you might be having difficulty in the erection department. We can help you figure out possible reasons why. And prescribe a pill if needed.'
            reverseOrder={true}
            background='02'
          />
        </div>
      </Container>
    </StyledHelpList>
  )
}

export default HelpList

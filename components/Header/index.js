import React from 'react'
import Image from 'next/image'

// Custom Imports
import Container from '../Container'
import { StyledHeader, StyledHeaderContent } from './header.styled'

//Assets
import logo from '../../public/img/logo.png'

const Header = ({ openQuestions }) => {
  return (
    <StyledHeader>
      <Container>
        <div>
          <Image src={logo} alt='Manual' />
        </div>
        <StyledHeaderContent>
          <h1>Be Good To Yourself</h1>
          <p>
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
          <button onClick={openQuestions}>Take The Quiz</button>
        </StyledHeaderContent>
      </Container>
    </StyledHeader>
  )
}

export default Header

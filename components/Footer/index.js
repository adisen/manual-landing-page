import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import {
  StyledFooter,
  StyledFooterContent,
  StyledFooterItem,
  StyledFooterImage
} from './footer.styled'
import Container from '../Container'

import logo from '../../public/img/manual-symblol@3x.png'

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterContent>
          <StyledFooterImage>
            <Image width={'100%'} height={'100%'} src={logo} alt='Manual' />
          </StyledFooterImage>
          {/* <div> */}
          <StyledFooterItem>
            <h5>Product</h5>
            <Link href=''>
              <a>Popular</a>
            </Link>
            <Link href=''>
              <a>Trending</a>
            </Link>
            <Link href=''>
              <a>Guided</a>
            </Link>
            <Link href=''>
              <a>Products</a>
            </Link>
          </StyledFooterItem>
          <StyledFooterItem>
            <h5>Company</h5>
            <Link href=''>
              <a>Press Releases</a>
            </Link>
            <Link href=''>
              <a>Mission</a>
            </Link>
            <Link href=''>
              <a>Strategy</a>
            </Link>
            <Link href=''>
              <a>About</a>
            </Link>
          </StyledFooterItem>
          <StyledFooterItem>
            <h5>Info</h5>
            <Link href=''>
              <a>Support</a>
            </Link>
            <Link href=''>
              <a>Customer Service</a>
            </Link>
            <Link href=''>
              <a>Get Started Guide</a>
            </Link>
          </StyledFooterItem>
          <StyledFooterItem className='social'>
            <h5>Follow Us</h5>
            <Link href=''>
              <a>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </Link>
            <Link href=''>
              <a>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </Link>
            <Link href=''>
              <a>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Link>
          </StyledFooterItem>
          {/* </div> */}
        </StyledFooterContent>
        <hr />
        <p>© 2019 Manual. All rights reserved.</p>
      </Container>
    </StyledFooter>
  )
}

export default Footer

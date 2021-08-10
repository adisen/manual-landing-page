import styled from 'styled-components'

export const StyledHeader = styled.section`
  background-image: url('/img/hair-cat-header.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;
  padding-top: 30px;

  @media screen and (max-width: 1200px) {
    height: 100vh;
  }
`

export const StyledHeaderContent = styled.div`
  margin: auto 0;
  margin-top: 5%;
  /* display: flex; */
  flex-direction: column;
  align-self: center;
  justify-self: center;
  color: ${({ theme }) => theme.colors.pineGreen};
  width: 50%;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  h1 {
    font-size: 82px;
    text-transform: uppercase;
    margin-bottom: 22px;

    @media screen and (max-width: 1200px) {
      font-size: 70px;
    }

    @media screen and (max-width: 680px) {
      font-size: 60px;
    }

    @media screen and (max-width: 480px) {
      font-size: 55px;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.44;
    letter-spacing: normal;
    margin-bottom: 38px;
    width: 65%;

    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }

  button {
    width: 200px;
    height: 48px;
    border-radius: 49.5px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2.4px;
    cursor: pointer;
  }
`

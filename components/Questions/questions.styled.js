import styled from 'styled-components'

export const StyledQuestions = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  position: relative;
`

export const StyledQuestionsCancel = styled.button`
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  right: 4rem;
  top: 2rem;
`

export const StyledQuestionNav = styled.div`
  text-align: center;
  margin-top: 3rem;

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
    margin: 1rem 2rem;
  }
`

export const StyledQuestionResult = styled.h2`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`

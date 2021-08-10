import styled from 'styled-components'

export const StyledQuestionItem = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`

export const StyledQuestionItemOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const StyledQuestionOption = styled.div`
  margin: 1rem 1rem;
  box-shadow: 7px 7px 10px #00000029;
  border-radius: 14px;
  padding: 1.5rem;
  background-color: ${({ selected }) => (selected ? '#000' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
`

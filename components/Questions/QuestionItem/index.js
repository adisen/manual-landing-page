import React from 'react'

import {
  StyledQuestionItem,
  StyledQuestionItemOptions,
  StyledQuestionOption
} from './questionsItem.styled'

const QuestionItem = ({ currentQuestion, setSelectedValue, moveNext }) => {
  const setSelectedHandler = (value, isRejection) => {
    setSelectedValue(value, isRejection)
    moveNext()
  }

  const { question, options } = currentQuestion
  return (
    <StyledQuestionItem>
      <h1>{question}</h1>
      <StyledQuestionItemOptions>
        {options.map(option => {
          console.log(option.value === currentQuestion.selected.value)
          return (
            <StyledQuestionOption
              key={option.value}
              selected={option.value === currentQuestion.selected.value}
              onClick={() =>
                setSelectedHandler(option.value, option.isRejection)
              }
              dangerouslySetInnerHTML={{ __html: option.display }}
            />
          )
        })}
      </StyledQuestionItemOptions>
    </StyledQuestionItem>
  )
}

export default QuestionItem

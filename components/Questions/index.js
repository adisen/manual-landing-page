import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import QuestionItem from './QuestionItem'
import Container from '../Container'

import {
  StyledQuestions,
  StyledQuestionNav,
  StyledQuestionsCancel,
  StyledQuestionResult
} from './questions.styled'

const Questions = ({ questions, closeQuestion }) => {
  questions.forEach(question => {
    question.selected = {
      value: null,
      rejection: null
    }
  })
  const [quest, setQuestions] = useState(questions)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(quest[currentIndex])
  const [rejection, setRejection] = useState(null)

  const onPreviousHandler = () => {
    setCurrentIndex(prevState => {
      let nextState = prevState
      if (prevState > 0) {
        nextState = prevState - 1
        setCurrentQuestion(quest[nextState])
      }

      return nextState
    })
  }

  const onNextHandler = () => {
    setCurrentIndex(prevState => {
      let nextState = prevState
      if (prevState < questions.length - 1) {
        nextState = prevState + 1
        setCurrentQuestion(quest[nextState])
      }

      return nextState
    })
  }

  const onGetResultsHandler = () => {
    for (let i = 0; i < quest.length; i++) {
      let current = quest[i]
      console.log(current.selected)
      if (current.selected.rejection) {
        setRejection(true)
        return
      }
    }

    setRejection(false)

    return
  }

  const setSelectedValueHandler = (value, rejection) => {
    setQuestions(prevState => {
      let newState
      newState = prevState.map(question => {
        if (question.question === currentQuestion.question) {
          let newQuestion = {
            ...question,
            selected: {
              value,
              rejection
            }
          }

          return newQuestion
        } else {
          return question
        }
      })

      setCurrentQuestion(newState[currentIndex])
      return newState
    })
  }

  let content
  if (rejection === null) {
    content = (
      <>
        <QuestionItem
          currentQuestion={currentQuestion}
          setSelectedValue={setSelectedValueHandler}
          moveNext={onNextHandler}
        />
        <StyledQuestionNav>
          {currentIndex !== 0 && (
            <button onClick={onPreviousHandler}>Previous</button>
          )}

          {currentIndex === questions.length - 1 ? (
            <button onClick={onGetResultsHandler}>Get Results</button>
          ) : (
            <button onClick={onNextHandler}>Next</button>
          )}
        </StyledQuestionNav>
      </>
    )
  } else if (rejection) {
    content = (
      <StyledQuestionResult>
        Unfortunately, we are unable to prescribe this medication for you. This
        is because finasteride can alter the PSA levels, which maybe used to
        monitor for cancer. You should discuss this further with your GP or
        specialist if you would still like this medication.
      </StyledQuestionResult>
    )
  } else {
    content = (
      <StyledQuestionResult>
        Great news! We have the perfect treatment for your hair loss. Proceed to{' '}
        <a href='https://manual.com' target='__blank'>
          www.manual.co
        </a>
        , and prepare to say hello to your new hair
      </StyledQuestionResult>
    )
  }

  return (
    <StyledQuestions>
      <Container>
        <StyledQuestionsCancel onClick={closeQuestion}>
          <FontAwesomeIcon icon={faTimes} size='3x' />
        </StyledQuestionsCancel>
        {content}
      </Container>
    </StyledQuestions>
  )
}

export default Questions

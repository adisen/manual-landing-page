import { useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import axios from 'axios'

// Custom components
import Header from '../components/Header'
import HelpList from '../components/HelpList'
import Footer from '../components/Footer'
import Questions from '../components/Questions'

const StyledIndex = styled.div`
  font-family: 'Montserrat';
`

function Home({ questions, notFound }) {
  const [openQuestions, setOpenQuestions] = useState(false)

  const openQuestionsHandler = () => {
    setOpenQuestions(true)
  }

  const closeQuestionsHandler = () => {
    setOpenQuestions(false)
  }

  let content
  if (openQuestions) {
    content = (
      <Questions questions={questions} closeQuestion={closeQuestionsHandler} />
    )
  } else {
    content = (
      <>
        <Header openQuestions={openQuestionsHandler} />
        <HelpList />
        <Footer />
      </>
    )
  }

  return (
    <StyledIndex>
      <Head>
        <title>Manual Landing Page</title>
        <meta name='description' content='A landing page by Manual.co' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>{content}</main>
    </StyledIndex>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get(
    'https://manual-case-study.herokuapp.com/questionnaires/972423.json'
  )

  const data = res.data

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { questions: data.questions, notFound: false }
  }
}

export default Home

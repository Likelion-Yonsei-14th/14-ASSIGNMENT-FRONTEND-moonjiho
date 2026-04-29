import { useEffect, useState } from 'react'
import './App.css'
import Portfolio from './Portfolio'
import ScrollToTopButton from './ScrollToTopButton'

function App() {

  return (
    <>
      <NameQuiz open={open} setOpen={setOpen} />
      {open && (
        <>
          <Portfolio></Portfolio>
          <ScrollToTopButton></ScrollToTopButton>
        </>
      )}
    </>
  )
}

export default App

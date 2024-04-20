import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './testSlice'

export const TestView = () => {
  const numOfTests = useSelector(state => state.test.numOfTests)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of tests - {numOfTests}</h2>
      <button onClick={() => dispatch(ordered())}>Order Test</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Tests</button>
    </div>
  )
}

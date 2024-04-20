import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './demoSlice'

const DemoView = () => {
    const numOfDemos = useSelector(state => state.demo.numOfDemo)
    const dispatch = useDispatch()
  return (
      <div>
      <h2>Number of demos - {numOfDemos}</h2>
      <button onClick={() => dispatch(ordered())}>Order Demo</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Demos</button>
    </div>
  )
}

export default DemoView
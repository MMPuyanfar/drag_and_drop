import React from 'react'
import {Container} from '../container/Container'

export function App() {
  return (
    <>
      <Container containerId="main" row={1} column={5} />
      <Container containerId="alt" />
    </>
  )
}

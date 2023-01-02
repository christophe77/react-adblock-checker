import React, { FC, ReactElement } from 'react'
import useAdBlockChecker from '../dist/esm'

const Example: FC = (): ReactElement => {
  const { isAdBlockActive } = useAdBlockChecker()

  return <h1>Adblocker enabled : {isAdBlockActive.toString()}</h1>
}
export default Example

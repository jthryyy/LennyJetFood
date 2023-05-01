import * as React from 'react'
import { Flex } from '../utils/Flex'

export const Footer = (): JSX.Element => {
  return (
    <Flex
      width="96.65%"
      backgroundColor="lightgray"
      padding="1rem"
      justifyContent="center"
      flexDirection="column"
      id="about"
      color="black"
    >
      <Flex borderBottom="2px solid black" width="4rem" />
      <Flex fontSize="1rem" flexDirection="row" marginTop="0.5rem">
        <Flex marginRight="1.5rem">Contact</Flex>
      </Flex>
    </Flex>
  )
}

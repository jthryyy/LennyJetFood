import * as React from 'react'
import { Flex } from '../utils/Flex'

export const Footer = (): JSX.Element => {
  return (
    <Flex
      width="96.65%"
      backgroundColor="gray"
      padding="1.5rem"
      justifyContent="center"
      flexDirection="column"
      id="about"
      color="black"
    >
      <Flex borderBottom="3px solid grey" width="4rem" />
      <Flex fontSize="1rem" flexDirection="row">
        <Flex marginRight="1.5rem">Contact</Flex>
        <Flex>Copyright 2023 </Flex>
      </Flex>
    </Flex>
  )
}

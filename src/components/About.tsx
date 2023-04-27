import * as React from 'react'
import { Flex } from '../utils/Flex'

export const About = (): JSX.Element => {
  return (
    <Flex
      width="98%"
      backgroundColor="white"
      padding="1.5rem"
      justifyContent="center"
      flexDirection="column"
      id="about"
      color="black"
    >
      <Flex borderBottom="3px solid grey" width="4rem" />
      <Flex fontSize="3rem" marginY="1.5rem">
        About
      </Flex>
      <Flex fontSize="2rem">
        Lenny and Jet love food. But it wasn't always that way.
      </Flex>
    </Flex>
  )
}

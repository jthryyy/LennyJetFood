import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '../utils/Flex'

const NavigationLink = styled(NavLink)`
  color: white;
  display: flex;
  border-bottom: 3px solid transparent;
  text-decoration: none;

  &:hover {
    color: #b8b8b8;
  }
`

export function NavigationBar(): JSX.Element {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      textDecoration="none"
      position="absolute"
      top={5}
      backgroundColor="#16212d8c"
      width="calc(100% - 64px)"
      marginTop="-8px"
      height="4rem"
      alignItems="center"
      padding="1rem 2rem"
      fontSize="2.5rem"
      boxShadow="0px 3px 6px rgba(0, 0, 0, 0.23)"
    >
      <Flex flexDirection="column" color="white">
        <Flex>Food Reviews</Flex>
        <Flex fontSize="1rem">By Lenny and Jet</Flex>
      </Flex>

      <Flex flexDirection="row" gridGap="1rem" fontSize="1.5rem">
        <NavigationLink to="/about">ABOUT</NavigationLink>
        <NavigationLink to="/map">MAP</NavigationLink>
      </Flex>
    </Flex>
  )
}

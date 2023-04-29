import * as React from 'react'
import { Flex } from '../utils/Flex'

export const LocationIcon = (): JSX.Element => {
  return (
    <Flex height="16px" width="16px" cursor="pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="red"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="butt"
        strokeLinejoin="bevel"
      >
        <circle cx="11.5" cy="8.5" r="5.5" />
        <path d="M11.5 14v7" />
      </svg>
    </Flex>
  )
}

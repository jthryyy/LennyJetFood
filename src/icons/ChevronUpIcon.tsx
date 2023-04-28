import * as React from 'react'
import { Flex } from '../utils/Flex'
import type { GenericProps } from '../types'

export const ChevronUpIcon = (props: GenericProps): JSX.Element => {
  const { onClick } = props

  return (
    <Flex height="16px" width="16px" onClick={onClick} cursor="pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="butt"
        strokeLinejoin="bevel"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </Flex>
  )
}

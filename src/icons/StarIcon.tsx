import * as React from 'react'
import { Flex } from '../utils/Flex'

interface StarProps {
  color?: string
}
export const StarIcon = (props: StarProps): JSX.Element => {
  const { color = 'black' } = props

  return (
    <Flex height="16px" width="16px">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={color}
        stroke="#c41818"
        strokeWidth="1.5"
        strokeLinecap="butt"
        strokeLinejoin="bevel"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    </Flex>
  )
}

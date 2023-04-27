import * as React from 'react'
import { Flex } from '../utils/Flex'

interface SortByProps {
  onClick: (sortOptions: string | null) => void
}
export const SortBy = (props: SortByProps): JSX.Element => {
  const { onClick } = props
  return (
    <Flex flexDirection="row" padding="1rem">
      <Flex> Sort by</Flex>
      <Flex flexDirection="column">
        <Flex onClick={() => onClick(null)}>All</Flex>
        <Flex onClick={() => onClick('year')}>Year First Visited</Flex>
      </Flex>
    </Flex>
  )
}

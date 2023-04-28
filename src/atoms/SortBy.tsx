import * as React from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '../icons'
import { Flex } from '../utils/Flex'
import './atoms.css'
interface SortByProps {
  onClick: (sortOptions: string | null) => void
}
export const SortBy = (props: SortByProps): JSX.Element => {
  const { onClick } = props
  const [showMenu, setShowMenu] = React.useState<boolean>(false)
  const handleOnClick = (sortOptions: string | null): void => {
    onClick(sortOptions)
    setShowMenu(false)
  }
  return (
    <Flex flexDirection="row" padding="1rem">
      <Flex flexDirection="row">
        <Flex>Sort by</Flex>
        {showMenu ? (
          <ChevronUpIcon onClick={() => setShowMenu(false)} />
        ) : (
          <ChevronDownIcon onClick={() => setShowMenu(true)} />
        )}
      </Flex>
      {showMenu ? (
        <Flex flexDirection="column">
          <Flex className="Filter-buttons" onClick={() => handleOnClick(null)}>
            Alphabetical
          </Flex>
          <Flex
            className="Filter-buttons"
            onClick={() => handleOnClick('year')}
          >
            Year First Visited
          </Flex>
        </Flex>
      ) : null}
    </Flex>
  )
}

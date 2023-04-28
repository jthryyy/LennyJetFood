import * as React from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '../icons'
import { Flex } from '../utils/Flex'
import './atoms.css'
interface SortByProps {
  onClick: (sortOptions: string | null) => void
}

const sortOptions = [
  { label: 'Alphabetical', value: null },
  { label: 'Year First Visited', value: 'year' },
]

export const SortBy = (props: SortByProps): JSX.Element => {
  const { onClick } = props
  const [showMenu, setShowMenu] = React.useState(false)
  const [showActive, setShowActive] = React.useState<string | null>(null)

  const handleOnClick = (sortOption: {
    label: string
    value: string | null
  }): void => {
    onClick(sortOption.value)
    setShowMenu(false)
    setShowActive(sortOption.value)
  }

  const menuContent = showMenu && (
    <Flex
      flexDirection="column"
      cursor="pointer"
      position="absolute"
      top="7rem"
      right="51%"
    >
      {sortOptions.map(option => (
        <Flex
          key={option.value}
          className={
            showActive === option.value
              ? 'Active-filter-buttons'
              : 'Filter-buttons'
          }
          onClick={() => handleOnClick(option)}
        >
          {option.label}
        </Flex>
      ))}
    </Flex>
  )

  return (
    <Flex flexDirection="column" paddingX="1rem">
      <Flex flexDirection="row">
        <Flex>Sort by</Flex>
        {showMenu ? (
          <ChevronUpIcon onClick={() => setShowMenu(false)} />
        ) : (
          <ChevronDownIcon onClick={() => setShowMenu(true)} />
        )}
      </Flex>
      {menuContent}
    </Flex>
  )
}

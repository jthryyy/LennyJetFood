import * as React from 'react'
import { useOnClickOutside } from '../hooks'
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
  const sortByRef = React.useRef(null)
  useOnClickOutside(sortByRef, () => {
    setShowMenu(false)
  })

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
      ref={sortByRef}
      flexDirection="column"
      cursor="pointer"
      position="absolute"
      top="6.38rem"
      right="3%"
      zIndex={500}
      border="1px solid gray"
      boxShadow="0px 3px 6px rgba(0, 0, 0, 0.23)"
    >
      {sortOptions.map(option => (
        <Flex
          padding="0.5rem"
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

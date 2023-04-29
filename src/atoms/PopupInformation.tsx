import * as React from 'react'
import startCase from 'lodash/startCase'
import { Flex } from '../utils/Flex'
import { getPrice, getStarRatings } from '../utils/utils'
import { LocationIcon } from '../icons'
import type { RestaurantDataWithId } from '../types'

interface PopupInformationProps {
  restuarantData: RestaurantDataWithId
}
export const PopupInformation = (props: PopupInformationProps): JSX.Element => {
  const { restuarantData } = props
  const {
    name,
    price,
    rating,
    firstVisit,
    type,
    subcategory,
    description,
    link,
    location,
    neighborhood,
    id,
  } = restuarantData
  const isPermanentlyClosed = restuarantData.permanantlyClosed
  const styledType = (
    <Flex
      marginLeft="4px"
      padding="6px"
      backgroundColor="purple"
      color="white"
      borderRadius="15px"
      width="5rem"
      justifyContent="center"
      fontSize="12px"
    >
      {startCase(type)}
    </Flex>
  )
  const styledSub =
    subcategory != null ? (
      <Flex
        marginLeft="4px"
        padding="6px"
        backgroundColor="blue"
        color="white"
        borderRadius="15px"
        width="5rem"
        justifyContent="center"
        fontSize="12px"
      >
        {startCase(subcategory)}
      </Flex>
    ) : null

  return (
    <Flex flexDirection="column" gridGap="4px" key={id}>
      <Flex fontWeight={500} flexDirection="row" justifyContent="space-between">
        <Flex> {name}</Flex>
        {isPermanentlyClosed ? (
          <Flex color="red" marginLeft="4px">
            Permanently Closed
          </Flex>
        ) : null}
      </Flex>
      <Flex>{getPrice(price)}</Flex>
      <Flex>{getStarRatings(rating)}</Flex>
      <Flex>
        <LocationIcon />
        {location != null
          ? location.state + ', ' + location.country
          : neighborhood}
      </Flex>
      <Flex>First visited: {firstVisit}</Flex>
      <Flex>
        {styledType}
        {styledSub}
      </Flex>
      <Flex>{description}</Flex>
      {link ? <a href={link}>Website</a> : null}
    </Flex>
  )
}
